import fs from "node:fs/promises";
import path from "node:path";
import { createRequire } from "node:module";
import { pathToFileURL } from "node:url";

async function loadArtifactTool() {
  try {
    return await import("@oai/artifact-tool");
  } catch (error) {
    const nodeModules = process.env.ARTIFACT_TOOL_NODE_MODULES;
    if (!nodeModules) {
      throw new Error(`Cannot load @oai/artifact-tool. Set ARTIFACT_TOOL_NODE_MODULES to the Codex bundled node_modules path. Original error: ${error.message}`);
    }
    const requireFromNodeModules = createRequire(path.join(nodeModules, "noop.cjs"));
    const resolved = requireFromNodeModules.resolve("@oai/artifact-tool");
    return await import(pathToFileURL(resolved).href);
  }
}

const { FileBlob, SpreadsheetFile } = await loadArtifactTool();

const args = new Map();
for (let i = 2; i < process.argv.length; i += 1) {
  if (process.argv[i].startsWith("--")) {
    args.set(process.argv[i].slice(2), process.argv[i + 1]);
    i += 1;
  }
}

const inputPath = args.get("input");
const outputPath = args.get("output") ?? inputPath;
if (!inputPath) {
  console.error("Usage: node build_execution_table.mjs --input workbook.xlsx [--output output.xlsx]");
  process.exit(1);
}

const input = await FileBlob.load(inputPath);
const workbook = await SpreadsheetFile.importXlsx(input);

const sheetByName = (names) => workbook.worksheets.items.find((sheet) => names.includes(sheet.name));

async function inspectValues(sheetName, range, rows = 500, cols = 26) {
  const inspected = await workbook.inspect({
    kind: "table",
    range: `${sheetName}!${range}`,
    include: "values,formulas",
    tableMaxRows: rows,
    tableMaxCols: cols,
  });
  return JSON.parse(inspected.ndjson.trim().split("\n")[0]).values;
}

async function findSheetByHeaders(requiredHeaders) {
  for (const sheet of workbook.worksheets.items) {
    const values = await inspectValues(sheet.name, "A1:Z80", 80, 26);
    if (values.some((row) => requiredHeaders.every((header) => row.some((cell) => String(cell ?? "").trim() === header)))) {
      return sheet;
    }
  }
  return null;
}

const sourceSheet = sheetByName(["转播计划表", "白名单IP收集"]) ??
  await findSheetByHeaders(["媒体单位/部门", "播出平台", "播出场次"]);
const referenceSheet = sheetByName(["苏超平台视频源参考表", "Sheet2"]) ??
  await findSheetByHeaders(["平台名称", "链接"]);
let resultSheet = sheetByName(["整理结果"]);
let executionSheet = sheetByName(["执行表", "Sheet1"]);

if (!sourceSheet) throw new Error("找不到转播计划表/白名单IP收集");
if (!referenceSheet) throw new Error("找不到苏超平台视频源参考表/Sheet2");
if (!resultSheet) resultSheet = workbook.worksheets.add("整理结果");
if (!executionSheet) executionSheet = workbook.worksheets.add("执行表");

const clean = (value) => String(value ?? "").trim();
const splitGames = (value) => clean(value)
  .split(/\n|；|;/)
  .map((item) => item.trim())
  .filter(Boolean);

function normalizePlatform(rawPlatform, unit = "") {
  const raw = clean(rawPlatform);
  const text = `${raw} ${unit}`;
  const platforms = [];
  const add = (name) => {
    if (!platforms.includes(name)) platforms.push(name);
  };

  if (/电视平台|电视频道|频道/.test(raw)) add("电视平台");
  if (/视频号/.test(raw)) add("视频号");
  if (/抖音|苏银零售金融/.test(raw)) add("抖音");
  if (/快手/.test(text)) add("快手");
  if (/微博/.test(raw)) add("微博");
  if (/客户端/.test(raw) || /app/i.test(raw)) add("客户端");
  if (/OTT|大屏/i.test(raw)) add("OTT大屏");
  if (/优酷/.test(raw)) add("优酷");
  if (/央视频|央视体育/.test(raw)) add("央视频");
  if (/百度/.test(raw)) add("百度");
  if (/(^|[^a-z])b站|哔哩哔哩|bilibili/i.test(raw)) add("B站");
  return platforms.join("、");
}

function normalizeAppText(value) {
  return clean(value)
    .replace(/APP|App|app/g, "客户端")
    .replace(/客户端客户端/g, "客户端");
}

function buildSubject(rawPlatform, platform) {
  let raw = normalizeAppText(rawPlatform);
  const parts = clean(platform).split("、").filter(Boolean);
  const missing = parts.filter((part) => !raw.includes(part));
  return `${raw}${missing.join("")}`;
}

function pushRows(outputRows, row) {
  for (const game of row.games) {
    outputRows.push([row.unit, row.platform, row.subject, game]);
  }
}

const sourceValues = await inspectValues(sourceSheet.name, "A1:G200", 200, 7);
const headerIndex = sourceValues.findIndex((row) =>
  row.includes("媒体单位/部门") && row.includes("播出平台") && row.includes("播出场次"));
if (headerIndex < 0) throw new Error("转播计划表缺少 媒体单位/部门、播出平台、播出场次 表头");

const header = sourceValues[headerIndex];
const unitCol = header.indexOf("媒体单位/部门");
const platformCol = header.indexOf("播出平台");
const gamesCol = header.indexOf("播出场次");

let currentUnit = "";
let currentGames = [];
const resultRows = [];

for (let r = headerIndex + 1; r < sourceValues.length; r += 1) {
  const row = sourceValues[r] ?? [];
  const unitCell = clean(row[unitCol]);
  const rawPlatform = clean(row[platformCol]);
  const gamesCell = clean(row[gamesCol]);

  if (unitCell) currentUnit = unitCell;
  if (gamesCell) currentGames = splitGames(gamesCell);
  if (!currentUnit || !rawPlatform || currentUnit === "监测") continue;

  if (/中央广播电视总台央视频\/央视体育/.test(rawPlatform)) {
    pushRows(resultRows, {
      unit: currentUnit,
      platform: "央视频",
      subject: "总台江苏站",
      games: currentGames,
    });
    resultRows.push([currentUnit, "央视频", "黄金赛事", "？"]);
    continue;
  }

  if (/快手平台官方/.test(currentUnit)) {
    if (/江苏省足球运动协会|苏体竞赛官方账号/.test(rawPlatform)) {
      resultRows.push([currentUnit, "快手", rawPlatform.includes("快手") ? rawPlatform : `${rawPlatform}快手`, "？"]);
    }
    continue;
  }

  if (/阿里巴巴-优酷/.test(currentUnit) || /阿里巴巴-优酷/.test(rawPlatform)) {
    resultRows.push([currentUnit, "优酷", "阿里巴巴-优酷", "混流"]);
    continue;
  }

  const platform = normalizePlatform(rawPlatform, currentUnit);
  if (!platform) {
    throw new Error(`无法判断平台：第 ${r + 1} 行 ${currentUnit} / ${rawPlatform}`);
  }

  let subject = buildSubject(rawPlatform, platform);
  if (/苏银零售金融/.test(rawPlatform)) subject = "苏银零售金融抖音";
  if (/“学习强国”/.test(currentUnit) && /客户端/.test(platform)) subject = "“学习强国”客户端";
  if (/现代\+/.test(rawPlatform) && /客户端/.test(platform)) subject = "现代+客户端";
  if (/咪咕视频/.test(currentUnit) && /客户端/.test(platform)) subject = "咪咕视频客户端";
  if (/水韵江苏/.test(rawPlatform) && /抖音/.test(platform)) subject = "“水韵江苏”抖音";

  let games = currentGames;
  if (/现代快报微博|现代快报视频号|现代快报抖音号/.test(subject)) games = ["？"];

  pushRows(resultRows, { unit: currentUnit, platform, subject, games });
}

const resultValues = [["媒体（单位）名称", "平台", "转播主体", "播出场次"], ...resultRows];
resultSheet.getRange("A1:D500").clear();
resultSheet.getRange(`A1:D${resultValues.length}`).values = resultValues;

const executionExisting = await inspectValues(executionSheet.name, "A1:G150", 150, 7);
const officialRows = executionExisting
  .filter((row) => clean(row?.[0]) === "官方" && clean(row?.[3]) && clean(row?.[4]))
  .map((row) => row.slice(0, 7));
const officialNameByGame = new Map(officialRows.map((row) => [clean(row[3]), clean(row[4])]));

const referenceValues = await inspectValues(referenceSheet.name, "A1:F200", 200, 6);
const linkByName = new Map();
const linkedEntries = [];

function normalizeForMatch(value) {
  return clean(value)
    .replace(/[“”"'\s+（）()\-—_]/g, "")
    .replace(/微信/g, "")
    .replace(/APP|App|app/g, "客户端")
    .replace(/抖音号/g, "抖音")
    .replace(/快手号/g, "快手")
    .replace(/视频号/g, "视频")
    .replace(/交汇点/g, "")
    .replace(/优酷视频/g, "优酷")
    .replace(/江苏省足球运动协会/g, "江苏省足球协会")
    .replace(/客户端客户端/g, "客户端");
}

for (const row of referenceValues.slice(1)) {
  const name = clean(row?.[2]);
  const link = clean(row?.[3]);
  if (!name || !/^(https?:\/\/|rtmp:\/\/)/.test(link)) continue;
  const entry = { name, link, key: normalizeForMatch(name) };
  linkedEntries.push(entry);
  for (const key of [entry.key, normalizeForMatch(name.replace(/官方/g, ""))]) {
    if (key && !linkByName.has(key)) linkByName.set(key, entry);
  }
}

function findLink(subject) {
  const keys = [normalizeForMatch(subject), normalizeForMatch(subject.replace(/官方/g, ""))];
  let match = keys.map((key) => linkByName.get(key)).find(Boolean);
  if (!match) {
    const subjectKey = normalizeForMatch(subject);
    match = linkedEntries.find((entry) => subjectKey.includes(entry.key) || entry.key.includes(subjectKey));
  }
  return match?.link ?? "";
}

const executionRows = resultRows.map(([unit, platform, subject, game]) => [
  unit,
  platform,
  subject,
  game,
  officialNameByGame.get(game) ?? `官方${game}`,
  `${subject}${game}`,
  findLink(subject),
]);

const executionValues = [
  [null, null, null, null, null, null, null],
  ["媒体（单位）名称", "平台", "转播主体", "转播场次", "原视频名", "对比视频名", "链接"],
  ...officialRows,
  ...executionRows,
];

executionSheet.getRange("A1:G500").clear();
executionSheet.getRange(`A1:G${executionValues.length}`).values = executionValues;

for (const sheet of [resultSheet, executionSheet]) {
  sheet.getRange("A:A").columnWidthPx = 260;
  sheet.getRange("B:B").columnWidthPx = 120;
  sheet.getRange("C:C").columnWidthPx = 300;
  sheet.getRange("D:D").columnWidthPx = 140;
}
executionSheet.getRange("E:E").columnWidthPx = 180;
executionSheet.getRange("F:F").columnWidthPx = 300;
executionSheet.getRange("G:G").columnWidthPx = 420;

await fs.mkdir(outputPath.slice(0, outputPath.lastIndexOf("/")), { recursive: true });
const exported = await SpreadsheetFile.exportXlsx(workbook);
await exported.save(outputPath);

const unresolvedGames = resultRows.filter((row) => row[3] === "？").map((row) => row.slice(0, 4));
const linkedCount = executionRows.filter((row) => clean(row[6])).length + officialRows.filter((row) => clean(row[6])).length;
console.log(JSON.stringify({
  outputPath,
  normalizedRows: resultRows.length,
  officialRows: officialRows.length,
  executionRows: executionRows.length + officialRows.length,
  linkedRows: linkedCount,
  unresolvedGames,
}, null, 2));
