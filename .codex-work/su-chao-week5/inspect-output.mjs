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
const rows = values
  .slice(1)
  .map((row, i) => ({ excelRow: i + 2, row }))
  .filter(({ row }) => row.some((cell) => cell !== null && cell !== ""));

const appLike = rows.filter(({ row }) => /app/i.test(String(row[1] ?? "")) || /app/i.test(String(row[2] ?? "")));
console.log(JSON.stringify({
  totalRows: rows.length,
  appLike,
}, null, 2));
