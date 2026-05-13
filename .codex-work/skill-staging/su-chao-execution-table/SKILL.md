---
name: su-chao-execution-table
description: Process weekly Su Chao broadcast workbooks into an execution table. Use when Codex needs to transform a Su Chao 转播计划表 into 整理结果 and 执行表/Sheet1, normalize media platform names, apply the established manual correction rules, map official video names, and fill stream links from 苏超平台视频源参考表/Sheet2.
---

# 苏超执行表整理

Use this skill for the weekly Su Chao workbook workflow:

- Source broadcast plan sheet: `转播计划表` (older files may call it `白名单IP收集`)
- Reference source sheet: `苏超平台视频源参考表` (older files may call it `Sheet2`)
- Output execution sheet: `执行表` (older files may call it `Sheet1`)
- Intermediate normalized sheet: `整理结果`

Prefer the bundled script `scripts/build_execution_table.mjs` when the workbook is an `.xlsx` with these sheets. Use the Spreadsheets skill/runtime and pass the Codex bundled Node package path as `ARTIFACT_TOOL_NODE_MODULES`:

```bash
ARTIFACT_TOOL_NODE_MODULES=/path/to/codex/node_modules node /path/to/su-chao-execution-table/scripts/build_execution_table.mjs --input /path/to/input.xlsx --output /path/to/output.xlsx
```

If the user already edited the workbook, preserve their workbook and only update the requested sheet/range. Do not overwrite user edits unless they ask for a full rebuild.

## Required Output

Create or update `整理结果` with exactly four columns:

1. `媒体（单位）名称`
2. `平台`
3. `转播主体`
4. `播出场次`

Create or update `执行表` with these columns:

1. `媒体（单位）名称`
2. `平台`
3. `转播主体`
4. `转播场次`
5. `原视频名`
6. `对比视频名`
7. `链接`

`执行表` keeps the official rows from the existing sheet if present. For non-official rows:

- Copy `媒体（单位）名称`/`平台`/`转播主体`/`播出场次` from `整理结果`.
- `原视频名`: match the official row for the same场次, e.g. `无锡vs泰州` -> `官方无锡vs泰州`.
- `对比视频名`: `转播主体 + 转播场次`, with no separator.
- `链接`: fill from `苏超平台视频源参考表` where possible; leave blank when the reference table has no link.

## Parsing 转播计划表

Find the header row by `媒体单位/部门`, `播出平台`, and `播出场次`. Fill down blank media unit and blank match values from the previous nonblank row. Split multiple matches in one cell by line breaks, `;`, or `；`.

Skip:

- Empty platform rows.
- Rows whose media unit is `监测`.

Each output row must represent one media unit/platform subject and one match/event.

## Platform Normalization

Normalize `平台` to the platform itself, not the full account name:

- Contains `电视平台`, `电视频道`, or `频道` -> `电视平台`
- Contains `视频号` -> `视频号`
- Contains `抖音` -> `抖音`
- Contains `快手` -> `快手`
- Contains `微博` -> `微博`
- Contains `客户端` -> `客户端`
- Contains any `APP/app/App` -> `客户端`
- Contains `OTT` or `大屏` -> `OTT大屏`
- Contains `优酷` -> `优酷`
- Contains `央视频` -> `央视频`
- Contains `央视体育` -> do not output `央视体育`; use the manual override below for `黄金赛事`
- Contains `百度` -> `百度`
- Contains `b站`, `B站`, `哔哩哔哩`, or `bilibili` -> `B站`

If one account genuinely spans multiple platforms, join with `、`, e.g. `视频号、快手` or `视频号、客户端`.

## 转播主体 Rules

Use the original `播出平台` text as the base for `转播主体`, then apply these corrections:

- Do not use `媒体单位 + 平台`.
- Do not insert `+`.
- Remove duplicated `APP/app/App`; convert them to `客户端`.
- If the base text lacks the normalized platform label and needs disambiguation, append the platform directly with no separator, e.g. `苏银零售金融抖音`, `新华社b站（平台无此平台）B站`.
- Preserve meaningful original notes such as `（平台无此平台，视频号）` unless the user asks to clean them.

## Established Manual Corrections

Apply these before asking the user, because they were confirmed in the week-5 final workbook:

- `中央广播电视总台央视频/央视体育` becomes three rows with `平台=央视频`, `转播主体=总台江苏站`, one per listed match; also add `平台=央视频`, `转播主体=黄金赛事`, `播出场次=？`.
- `苏银零售金融` is `平台=抖音`, `转播主体=苏银零售金融抖音`.
- `阿里巴巴-优酷` is `平台=优酷`, `转播主体=阿里巴巴-优酷`, `播出场次=混流`.
- `咪咕视频APP` or `咪咕视频APP`-like text becomes `平台=客户端`, `转播主体=咪咕视频客户端`.
- `“学习强国”app` becomes `平台=客户端`, `转播主体=“学习强国”客户端`.
- `现代+App` becomes `平台=客户端`, `转播主体=现代+客户端`.
- `现代快报微博`, `现代快报视频号`, and `现代快报抖音号` use `播出场次=？` unless the workbook explicitly gives a match.
- `快手平台官方` rows keep account-level subjects such as `江苏省足球运动协会快手` and `苏体竞赛官方账号快手`, with `播出场次=？`; do not keep a generic `江苏省城市足球联赛` row unless the user confirms it.
- `江苏省足球运动协会` rows keep account-specific subjects:
  - `足球江苏抖音号`
  - `“江苏省足球运动协会”抖音号`
  - `”江苏省足球运动协会“视频号 快手号` with `平台=视频号、快手`
- `央广网视频号  客户端` uses `平台=视频号、客户端`.
- `新华日报交汇点抖音号` may match `新华日报抖音号` in the reference table for links.

If a new row cannot be classified, stop and ask the user before finalizing.

## Link Filling

Reference sheet columns are:

- `媒体（单位）名称`
- `平台`
- `平台名称`
- `链接`
- optional count columns

Match `执行表.转播主体` to `苏超平台视频源参考表.平台名称`, with normalization:

- Ignore Chinese/English quotes, spaces, `+`, parentheses, hyphen-like punctuation.
- Treat `APP/app/App` as `客户端`.
- Treat `抖音号` as `抖音`, `快手号` as `快手`, and `视频号` as `视频`.
- Ignore `微信` in names.
- Ignore `交汇点` for matching `新华日报交汇点抖音号` to `新华日报抖音号`.
- Treat `江苏省足球运动协会` and `江苏省足球协会` as equivalent.
- Allow containment matches only after exact normalized matching fails.

Only write real URL-like links (`http://`, `https://`, or `rtmp://`). Clear placeholder values such as `117`. Preserve official links already in `执行表`.

## Validation

Before final response:

- Confirm `整理结果` has exactly four fields and no blank platform.
- Confirm `执行表` official rows are preserved.
- Confirm `执行表.原视频名` maps to the matching official row by场次.
- Confirm `执行表.对比视频名 = 转播主体 + 转播场次`.
- Confirm `链接` contains only blank cells or URL-like values; no `117`.
- Report unresolved `？` rows and linkable subjects that still lack links.
