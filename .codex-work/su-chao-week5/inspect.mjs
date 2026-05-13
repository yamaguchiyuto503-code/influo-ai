import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const inputPath = "/Users/vincent/Desktop/苏超视频/周报/5月9日/副本2026年第五周苏超直播白名单V3.xlsx";
const input = await FileBlob.load(inputPath);
const workbook = await SpreadsheetFile.importXlsx(input);

const sheetInfo = workbook.worksheets.items.map((sheet) => ({
  id: sheet.id,
  name: sheet.name,
}));

console.log(JSON.stringify({ sheetInfo }, null, 2));

for (const sheet of workbook.worksheets.items) {
  const result = await workbook.inspect({
    kind: "table",
    range: `${sheet.name}!A1:G120`,
    include: "values,formulas",
    tableMaxRows: 120,
    tableMaxCols: 7,
  });
  console.log(`--- ${sheet.name} ---`);
  console.log(result.ndjson);
}
