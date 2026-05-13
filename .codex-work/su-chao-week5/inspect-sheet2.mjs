import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const outputPath = "/Users/vincent/Desktop/influo/官网/influo-ai/outputs/su-chao-week5/苏超直播白名单_整理版.xlsx";
const input = await FileBlob.load(outputPath);
const workbook = await SpreadsheetFile.importXlsx(input);

console.log(JSON.stringify({
  sheets: workbook.worksheets.items.map((sheet) => sheet.name),
}, null, 2));

for (const sheetName of ["Sheet1", "Sheet2"]) {
  const sheet = workbook.worksheets.items.find((item) => item.name === sheetName);
  if (!sheet) continue;
  const inspected = await workbook.inspect({
    kind: "table",
    range: `${sheetName}!A1:Z80`,
    include: "values,formulas",
    tableMaxRows: 80,
    tableMaxCols: 26,
  });
  console.log(`--- ${sheetName} ---`);
  console.log(inspected.ndjson);
}
