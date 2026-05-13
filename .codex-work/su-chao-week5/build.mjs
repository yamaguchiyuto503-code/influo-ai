import fs from "node:fs/promises";
import { FileBlob, SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const inputPath = "/Users/vincent/Desktop/苏超视频/周报/5月9日/副本2026年第五周苏超直播白名单V3.xlsx";
const outputDir = "/Users/vincent/Desktop/influo/官网/influo-ai/outputs/su-chao-week5";
const outputPath = `${outputDir}/苏超直播白名单_整理版.xlsx`;

const input = await FileBlob.load(inputPath);
const sourceWorkbook = await SpreadsheetFile.importXlsx(input);
const sourceSheet = sourceWorkbook.worksheets.items[0];
const inspected = await sourceWorkbook.inspect({
  kind: "table",
  range: `${sourceSheet.name}!A1:G120`,
  include: "values,formulas",
  tableMaxRows: 120,
  tableMaxCols: 7,
});
const sourceRows = JSON.parse(inspected.ndjson.trim().split("\n")[0]).values;

const splitGames = (value) => String(value ?? "")
  .split(/\n|；|;/)
  .map((item) => item.trim())
  .filter(Boolean);

const normalizePlatform = (rawPlatform, unit) => {
  const raw = String(rawPlatform ?? "").trim();
  const rawLower = raw.toLowerCase();
  const unitText = String(unit ?? "");
  const platforms = [];
  const add = (name) => {
    if (!platforms.includes(name)) platforms.push(name);
  };

  if (/电视平台|电视频道|频道/.test(raw)) add("电视平台");
  if (/视频号/.test(raw)) add("视频号");
  if (/抖音/.test(raw)) add("抖音");
  if (/快手/.test(raw) || /快手/.test(unitText)) add("快手");
  if (/微博/.test(raw)) add("微博");
  if (/(^|[^a-z])b站|哔哩哔哩|bilibili/i.test(raw)) add("B站");
  if (/客户端/.test(raw)) add("客户端");
  if (/app/i.test(raw)) add("客户端");
  if (/OTT|大屏/i.test(raw)) add("OTT大屏");
  if (/优酷/.test(raw)) add("优酷");
  if (/央视频/.test(raw)) add("央视频");
  if (/央视体育/.test(raw)) add("央视体育");
  if (/百度/.test(raw)) add("百度");
  if (/苏银零售金融/.test(raw)) add("抖音");

  return platforms.length ? platforms.join("、") : "";
};

const buildSubject = (rawPlatform, platform) => {
  const raw = String(rawPlatform ?? "").trim().replace(/APP|App|app/g, "客户端");
  const platformText = String(platform ?? "").trim();
  if (!platformText) return raw;

  const platformParts = platformText.split("、").filter(Boolean);
  const missingParts = platformParts.filter((part) => !raw.includes(part));
  return `${raw}${missingParts.join("")}`;
};

const outputRows = [];
const seenRows = new Set();
const ambiguous = [];
let currentUnit = "";
let currentGames = [];

for (let index = 3; index < sourceRows.length; index += 1) {
  const row = sourceRows[index] ?? [];
  const unit = String(row[4] ?? "").trim();
  const rawPlatform = String(row[5] ?? "").trim();
  const rawGames = String(row[6] ?? "").trim();

  if (unit) currentUnit = unit;
  if (rawGames) currentGames = splitGames(rawGames);
  if (!currentUnit || !rawPlatform || currentUnit === "监测") continue;

  const platform = normalizePlatform(rawPlatform, currentUnit);
  if (!platform) {
    ambiguous.push({
      row: index + 1,
      unit: currentUnit,
      rawPlatform,
    });
  }

  for (const game of currentGames) {
    const outputRow = [
      currentUnit,
      platform,
      buildSubject(rawPlatform, platform),
      game,
    ];
    const rowKey = outputRow.join("\u0001");
    if (!seenRows.has(rowKey)) {
      seenRows.add(rowKey);
      outputRows.push(outputRow);
    }
  }
}

if (ambiguous.length) {
  console.log(JSON.stringify({ ambiguous }, null, 2));
  process.exit(2);
}

const workbook = Workbook.create();
const sheet = workbook.worksheets.add("整理结果");
const headers = ["媒体（单位）名称", "平台", "转播主体", "播出场次"];
const values = [headers, ...outputRows];
sheet.getRange(`A1:D${values.length}`).values = values;

sheet.getRange("A1:D1").format = {
  fill: { color: "#1F4E78" },
  font: { color: "#FFFFFF", bold: true },
  horizontalAlignment: "center",
};
sheet.getRange(`A2:D${values.length}`).format = {
  wrapText: true,
  verticalAlignment: "top",
};
sheet.getRange("A:A").columnWidthPx = 260;
sheet.getRange("B:B").columnWidthPx = 110;
sheet.getRange("C:C").columnWidthPx = 310;
sheet.getRange("D:D").columnWidthPx = 130;

await fs.mkdir(outputDir, { recursive: true });
const exported = await SpreadsheetFile.exportXlsx(workbook);
await exported.save(outputPath);

const verify = await workbook.inspect({
  kind: "table",
  range: `整理结果!A1:D${Math.min(values.length, 20)}`,
  include: "values,formulas",
  tableMaxRows: 20,
  tableMaxCols: 4,
});
console.log(verify.ndjson);
console.log(JSON.stringify({ outputPath, rows: outputRows.length }, null, 2));
