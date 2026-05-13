import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const outputPath = "/Users/vincent/Desktop/influo/官网/influo-ai/outputs/su-chao-week5/苏超直播白名单_整理版.xlsx";
const input = await FileBlob.load(outputPath);
const workbook = await SpreadsheetFile.importXlsx(input);

const inspectRange = async (range) => {
  const inspected = await workbook.inspect({
    kind: "table",
    range,
    include: "values,formulas",
    tableMaxRows: 20,
    tableMaxCols: 7,
  });
  return JSON.parse(inspected.ndjson.trim().split("\n")[0]).values;
};

const result = await inspectRange("整理结果!A1:D100");
const sheet1Head = await inspectRange("Sheet1!A1:G12");
const sheet1Tail = await inspectRange("Sheet1!A60:G75");

const resultRows = result.slice(1).filter((row) => row.some((cell) => cell !== null && cell !== ""));
const sheet1Rows = [...sheet1Head, ...sheet1Tail].filter((row) => row.some((cell) => cell !== null && cell !== ""));

console.log(JSON.stringify({
  resultRows: resultRows.length,
  sheet1Head,
  sheet1Tail,
  sampledNonBlankRows: sheet1Rows.length,
}, null, 2));
