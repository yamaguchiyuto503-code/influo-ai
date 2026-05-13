import fs from "node:fs/promises";
import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const outputPath = "/Users/vincent/Desktop/influo/官网/influo-ai/outputs/su-chao-week5/苏超直播白名单_整理版.xlsx";
const input = await FileBlob.load(outputPath);
const workbook = await SpreadsheetFile.importXlsx(input);
const sheet = workbook.worksheets.items[0];

const inspected = await workbook.inspect({
  kind: "table",
  range: `${sheet.name}!A1:D100`,
  include: "values,formulas",
  tableMaxRows: 100,
  tableMaxCols: 4,
});
const values = JSON.parse(inspected.ndjson.trim().split("\n")[0]).values;
const dataRows = values.slice(1).filter((row) => row.some((cell) => cell !== null && cell !== ""));
const blankPlatformRows = dataRows.filter((row) => !String(row[1] ?? "").trim());
const monitorRows = dataRows.filter((row) => row.some((cell) => String(cell ?? "").includes("监测")));
const uniqueFieldCounts = new Set(dataRows.map((row) => row.length));

const rendered = await workbook.render({ sheetName: sheet.name, range: `A1:D${Math.min(dataRows.length + 1, 45)}`, scale: 1 });
await fs.writeFile("/Users/vincent/Desktop/influo/官网/influo-ai/outputs/su-chao-week5/preview.png", Buffer.from(await rendered.arrayBuffer()));

console.log(JSON.stringify({
  sheetName: sheet.name,
  rowCount: dataRows.length,
  blankPlatformRows: blankPlatformRows.length,
  monitorRows: monitorRows.length,
  fieldCounts: [...uniqueFieldCounts],
}, null, 2));
