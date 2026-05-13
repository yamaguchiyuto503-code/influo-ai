import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const outputPath = "/Users/vincent/Desktop/influo/官网/influo-ai/outputs/su-chao-week5/苏超直播白名单_整理版.xlsx";
const input = await FileBlob.load(outputPath);
const workbook = await SpreadsheetFile.importXlsx(input);

console.log(JSON.stringify({
  sheets: workbook.worksheets.items.map((sheet) => sheet.name),
}, null, 2));

for (const sheet of workbook.worksheets.items) {
  const inspected = await workbook.inspect({
    kind: "table",
    range: `${sheet.name}!A1:Z30`,
    include: "values,formulas",
    tableMaxRows: 30,
    tableMaxCols: 26,
  });
  console.log(`--- ${sheet.name} ---`);
  console.log(inspected.ndjson);
}
