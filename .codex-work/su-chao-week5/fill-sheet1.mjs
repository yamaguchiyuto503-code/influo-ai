import fs from "node:fs/promises";
import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const outputPath = "/Users/vincent/Desktop/influo/官网/influo-ai/outputs/su-chao-week5/苏超直播白名单_整理版.xlsx";
const input = await FileBlob.load(outputPath);
const workbook = await SpreadsheetFile.importXlsx(input);

const resultSheet = workbook.worksheets.items.find((sheet) => sheet.name === "整理结果");
const sheet1 = workbook.worksheets.items.find((sheet) => sheet.name === "Sheet1");
if (!resultSheet || !sheet1) {
  throw new Error("缺少整理结果或Sheet1");
}

const readTable = async (sheetName, range) => {
  const inspected = await workbook.inspect({
    kind: "table",
    range: `${sheetName}!${range}`,
    include: "values,formulas",
    tableMaxRows: 200,
    tableMaxCols: 10,
  });
  return JSON.parse(inspected.ndjson.trim().split("\n")[0]).values;
};

const resultValues = await readTable("整理结果", "A1:D200");
const sheet1Values = await readTable("Sheet1", "A1:G200");
const resultRows = resultValues
  .slice(1)
  .filter((row) => row?.slice(0, 4).some((cell) => cell !== null && cell !== ""));

const officialNameByGame = new Map();
for (const row of sheet1Values.slice(2, 5)) {
  const game = String(row?.[3] ?? "").trim();
  const officialName = String(row?.[4] ?? "").trim();
  if (game && officialName) officialNameByGame.set(game, officialName);
}

const headerRow = sheet1Values[1]?.slice(0, 7) ?? ["媒体（单位）名称", "平台", "转播主体", "转播场次", "原视频名", "对比视频名", "链接"];
const officialRows = sheet1Values
  .slice(2, 5)
  .map((row) => row.slice(0, 7));

const filledRows = resultRows.map((row) => {
  const unit = String(row[0] ?? "").trim();
  const platform = String(row[1] ?? "").trim();
  const subject = String(row[2] ?? "").trim();
  const game = String(row[3] ?? "").trim();
  const officialName = officialNameByGame.get(game) ?? `官方${game}`;
  return [
    unit,
    platform,
    subject,
    game,
    officialName,
    `${subject}${game}`,
    "",
  ];
});

const outputValues = [
  [null, null, null, null, null, null, null],
  headerRow,
  ...officialRows,
  ...filledRows,
];

sheet1.getRange(`A1:G${outputValues.length}`).values = outputValues;
sheet1.getRange(`A${outputValues.length + 1}:G200`).clear();
sheet1.getRange("A2:G2").format = {
  fill: { color: "#1F4E78" },
  font: { color: "#FFFFFF", bold: true },
  horizontalAlignment: "center",
};
sheet1.getRange(`A3:G${outputValues.length}`).format = {
  wrapText: true,
  verticalAlignment: "top",
};
sheet1.getRange("A:A").columnWidthPx = 260;
sheet1.getRange("B:B").columnWidthPx = 110;
sheet1.getRange("C:C").columnWidthPx = 260;
sheet1.getRange("D:D").columnWidthPx = 130;
sheet1.getRange("E:E").columnWidthPx = 180;
sheet1.getRange("F:F").columnWidthPx = 260;
sheet1.getRange("G:G").columnWidthPx = 360;

await fs.mkdir("/Users/vincent/Desktop/influo/官网/influo-ai/outputs/su-chao-week5", { recursive: true });
const exported = await SpreadsheetFile.exportXlsx(workbook);
await exported.save(outputPath);

console.log(JSON.stringify({
  outputPath,
  officialRows: officialRows.length,
  filledRows: filledRows.length,
  totalRowsIncludingHeaderAndBlank: outputValues.length,
}, null, 2));
