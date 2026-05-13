import fs from "node:fs/promises";
import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const outputPath = "/Users/vincent/Desktop/influo/官网/influo-ai/outputs/su-chao-week5/苏超直播白名单_整理版.xlsx";
const input = await FileBlob.load(outputPath);
const workbook = await SpreadsheetFile.importXlsx(input);

const sheet1 = workbook.worksheets.items.find((sheet) => sheet.name === "Sheet1");
const sheet2 = workbook.worksheets.items.find((sheet) => sheet.name === "Sheet2");
if (!sheet1 || !sheet2) throw new Error("缺少 Sheet1 或 Sheet2");

const readValues = async (sheetName, range, rows = 300, cols = 10) => {
  const inspected = await workbook.inspect({
    kind: "table",
    range: `${sheetName}!${range}`,
    include: "values,formulas",
    tableMaxRows: rows,
    tableMaxCols: cols,
  });
  return JSON.parse(inspected.ndjson.trim().split("\n")[0]).values;
};

const normalize = (value) => String(value ?? "")
  .trim()
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

const sheet1Values = await readValues("Sheet1", "A2:G200", 199, 7);
const sheet2Values = await readValues("Sheet2", "A1:F300", 300, 6);

const linksByName = new Map();
const linkedEntries = [];
for (const row of sheet2Values.slice(1)) {
  const platformName = String(row?.[2] ?? "").trim();
  const link = String(row?.[3] ?? "").trim();
  if (!platformName || !link) continue;
  linkedEntries.push({ platformName, link, key: normalize(platformName) });

  const keys = new Set([
    normalize(platformName),
    normalize(platformName.replace(/微信/g, "")),
    normalize(platformName.replace(/官方/g, "")),
  ]);
  for (const key of keys) {
    if (key && !linksByName.has(key)) linksByName.set(key, { platformName, link });
  }
}

const officialLinksByGame = new Map([
  ["无锡vs泰州", "rtmp://alive.cloud.jstv.com/football/59WuxiVSTaizhouMain?auth_key=1778048966-0-0-d4b1c339a7a1a95e01a9f4795da4356b"],
  ["南通vs南京", "rtmp://alive.cloud.jstv.com/football/59NantongVSNanjingMain?auth_key=1778049029-0-0-ae709fda8517cec5d49aa6ec491c2ecc"],
  ["徐州vs宿迁", "rtmp://alive.cloud.jstv.com/football/59XuzhouVSSuqianMain?auth_key=1778049063-0-0-64fee9eacb1d82d4fd066e17dcc868db"],
]);

let restoredOfficial = 0;
for (let index = 1; index <= 3; index += 1) {
  const row = sheet1Values[index] ?? [];
  const excelRow = index + 2;
  const game = String(row[3] ?? "").trim();
  const officialLink = officialLinksByGame.get(game);
  if (officialLink) {
    sheet1.getRange(`G${excelRow}`).values = [[officialLink]];
    restoredOfficial += 1;
  }
}

let filled = 0;
let cleared = 0;
const unmatched = [];

for (let index = 4; index < sheet1Values.length; index += 1) {
  const row = sheet1Values[index] ?? [];
  if (!row.some((cell) => cell !== null && cell !== "")) continue;

  const excelRow = index + 2;
  const subject = String(row[2] ?? "").trim();
  if (!subject) continue;

  const keys = [
    normalize(subject),
    normalize(subject.replace(/微信/g, "")),
    normalize(subject.replace(/官方/g, "")),
  ];
  let match = keys.map((key) => linksByName.get(key)).find(Boolean);
  if (!match) {
    const subjectKey = normalize(subject);
    match = linkedEntries.find((entry) => subjectKey.includes(entry.key) || entry.key.includes(subjectKey));
  }

  if (match) {
    sheet1.getRange(`G${excelRow}`).values = [[match.link]];
    filled += 1;
  } else {
    sheet1.getRange(`G${excelRow}`).values = [[null]];
    cleared += 1;
    if (/抖音|优酷/.test(subject)) {
      unmatched.push({ excelRow, subject });
    }
  }
}

const exported = await SpreadsheetFile.exportXlsx(workbook);
await exported.save(outputPath);

console.log(JSON.stringify({
  outputPath,
  availableLinks: linksByName.size,
  restoredOfficial,
  filled,
  cleared,
  unmatched,
}, null, 2));
