import fs from "node:fs/promises";
import { Workbook, SpreadsheetFile } from "@oai/artifact-tool";

const out = process.argv[2];
if (!out) throw new Error("missing output path");

const workbook = Workbook.create();
const plan = workbook.worksheets.add("转播计划表");
plan.getRange("A1:D1").values = [["地区", "媒体单位/部门", "播出平台", "播出场次"]];
plan.getRange("A2:D5").values = [
  ["无锡", "无锡日报社", "无锡日报视频号", "无锡vs泰州"],
  ["南通", "南通广播电视台", "南通广播电视台抖音号", "南通vs南京"],
  ["省级", "阿里巴巴-优酷", "阿里巴巴-优酷", "无锡vs泰州\n南通vs南京"],
  ["省级", "监测", null, "无锡vs泰州"],
];

const ref = workbook.worksheets.add("苏超平台视频源参考表");
ref.getRange("A1:F3").values = [
  ["媒体（单位）名称", "平台", "平台名称", "链接", "违规次数", "回放次数"],
  ["南通广播电视台", "抖音号", "南通广播电视台抖音号", "https://live.douyin.com/test", 0, 0],
  ["优酷公司", "优酷视频", "优酷视频", "rtmp://example.test/live", 0, 0],
];

const exec = workbook.worksheets.add("执行表");
exec.getRange("A1:G5").values = [
  [null, null, null, null, null, null, null],
  ["媒体（单位）名称", "平台", "转播主体", "转播场次", "原视频名", "对比视频名", "链接"],
  ["官方", "官方", "官方", "无锡vs泰州", "官方无锡vs泰州", "官方无锡vs泰州", "rtmp://official-wx"],
  ["官方", "官方", "官方", "南通vs南京", "官方南通vs南京", "官方南通vs南京", "rtmp://official-nt"],
  ["官方", "官方", "官方", "徐州vs宿迁", "官方徐州vs宿迁", "官方徐州vs宿迁", "rtmp://official-xz"],
];

await fs.mkdir(out.slice(0, out.lastIndexOf("/")), { recursive: true });
const exported = await SpreadsheetFile.exportXlsx(workbook);
await exported.save(out);
