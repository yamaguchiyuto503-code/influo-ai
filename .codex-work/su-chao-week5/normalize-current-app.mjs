import fs from "node:fs/promises";
import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const outputPath = "/Users/vincent/Desktop/influo/官网/influo-ai/outputs/su-chao-week5/苏超直播白名单_整理版.xlsx";
const input = await FileBlob.load(outputPath);
const workbook = await SpreadsheetFile.importXlsx(input);

const normalizeText = (value) => String(value ?? "")
  .replace(/APP|App|app/g, "客户端")
  .replace(/客户端客户端/g, "客户端");

let changed = 0;

for (const sheetName of ["整理结果", "Sheet1"]) {
  const sheet = workbook.worksheets.items.find((item) => item.name === sheetName);
  if (!sheet) continue;

  const inspected = await workbook.inspect({
    kind: "table",
    range: `${sheetName}!A1:G200`,
    include: "values,formulas",
    tableMaxRows: 200,
    tableMaxCols: 7,
  });
  const values = JSON.parse(inspected.ndjson.trim().split("\n")[0]).values;

  for (let rowIndex = 0; rowIndex < values.length; rowIndex += 1) {
    const row = values[rowIndex] ?? [];
    const excelRow = rowIndex + 1;

    for (const columnIndex of [1, 2, 5]) {
      const current = row[columnIndex];
      if (current === null || current === undefined || current === "") continue;
      const normalized = normalizeText(current);
      if (normalized !== current) {
        const columnLetter = String.fromCharCode("A".charCodeAt(0) + columnIndex);
        sheet.getRange(`${columnLetter}${excelRow}`).values = [[normalized]];
        changed += 1;
      }
    }
  }
}

const exported = await SpreadsheetFile.exportXlsx(workbook);
await exported.save(outputPath);
console.log(JSON.stringify({ outputPath, changed }, null, 2));
