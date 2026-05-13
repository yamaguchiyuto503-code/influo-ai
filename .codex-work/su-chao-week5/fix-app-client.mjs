import fs from "node:fs/promises";
import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const outputPath = "/Users/vincent/Desktop/influo/官网/influo-ai/outputs/su-chao-week5/苏超直播白名单_整理版.xlsx";
const input = await FileBlob.load(outputPath);
const workbook = await SpreadsheetFile.importXlsx(input);
const sheet = workbook.worksheets.items[0];

const inspected = await workbook.inspect({
  kind: "table",
  range: `${sheet.name}!A1:D120`,
  include: "values,formulas",
  tableMaxRows: 120,
  tableMaxCols: 4,
});

const values = JSON.parse(inspected.ndjson.trim().split("\n")[0]).values;
let changed = 0;

for (let i = 1; i < values.length; i += 1) {
  const row = values[i];
  if (!row?.some((cell) => cell !== null && cell !== "")) continue;

  const platform = String(row[1] ?? "").trim();
  const subject = String(row[2] ?? "").trim();
  const hasAppPlatform = /^app$/i.test(platform);
  const hasAppSubject = /app/i.test(subject);

  if (!hasAppPlatform && !hasAppSubject) continue;

  const excelRow = i + 1;
  const normalizedSubject = subject
    .replace(/APP|App|app/g, "客户端")
    .replace(/客户端客户端/g, "客户端");

  sheet.getRange(`B${excelRow}`).values = [["客户端"]];
  sheet.getRange(`C${excelRow}`).values = [[normalizedSubject]];
  changed += 1;
}

await fs.mkdir("/Users/vincent/Desktop/influo/官网/influo-ai/outputs/su-chao-week5", { recursive: true });
const exported = await SpreadsheetFile.exportXlsx(workbook);
await exported.save(outputPath);

console.log(JSON.stringify({ outputPath, changed }, null, 2));
