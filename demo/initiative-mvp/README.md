# Initiative MVP Demo

This is a standalone front-end prototype for the `Initiative / Campaign MVP`.

It is intentionally isolated from the existing site:

- no dependency changes
- no route changes
- no edits to the current marketing pages

## Preview

From the repo root, run either:

```bash
python3 -m http.server 4173 -d demo/initiative-mvp
```

Then open:

```text
http://localhost:4173
```

## What it demonstrates

- three initiative modes: `campaign`, `always_on`, `response`
- chat-to-brief structuring
- workflow states and human approval points
- workbench tabs: strategy, budget, assets, distribution, review
- budget confidence and assumptions
- memory scope and writeback rules
