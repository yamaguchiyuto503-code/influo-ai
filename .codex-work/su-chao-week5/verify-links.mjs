import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const outputPath = "/Users/vincent/Desktop/influo/官网/influo-ai/outputs/su-chao-week5/苏超直播白名单_整理版.xlsx";
const input = await FileBlob.load(outputPath);
const workbook = await SpreadsheetFile.importXlsx(input);

const inspected = await workbook.inspect({
  kind: "table",
  range: "Sheet1!A2:G100",
  include: "values,formulas",
  tableMaxRows: 100,
  tableMaxCols: 7,
});

const rows = JSON.parse(inspected.ndjson.trim().split("\n")[0]).values;
const dataRows = rows.slice(1).filter((row) => row.some((cell) => cell !== null && cell !== ""));
const linkRows = dataRows.filter((row) => String(row[6] ?? "").trim());
const placeholderRows = dataRows.filter((row) => String(row[6] ?? "").trim() === "117");
const nonUrlRows = linkRows.filter((row) => !/^(https?:\/\/|rtmp:\/\/)/.test(String(row[6] ?? "").trim()));

console.log(JSON.stringify({
  dataRows: dataRows.length,
  linkRows: linkRows.length,
  placeholderRows: placeholderRows.length,
  nonUrlRows,
  firstLinkedRows: linkRows.slice(0, 20),
}, null, 2));
