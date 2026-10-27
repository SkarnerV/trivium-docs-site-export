---
sidebar_label: Development
title: Development
description: Scripts, the scripted fake model, and release packaging for Trivium.
---

# Development

## Everyday commands

| Command | What it does |
|---------|--------------|
| `npm run check` | Type-check the whole tree |
| `npm start` | Build and launch the app once |
| `npm run dev` | Launch with **hot reload** for renderer changes |
| `npm test` | Run the test suite |
| `npm run package` | Build distributables — **Windows ZIP** and **macOS DMG** |

Releases are cut by CI: **push a tag** and the release workflow builds and publishes the artifacts.

## The scripted fake model

Set `TRIVIUM_DEV_FAUX=1` to run against a **scripted model** instead of a real provider:

```bash
TRIVIUM_DEV_FAUX=1 npm start
```

The `trivium-faux/scripted` script plays out a complete bug-fix demo — steps, diffs and all — with no API key and no network. It is the fastest way to develop UI against realistic agent behavior, and the recommended setup for taking screenshots (see [Contributing](../reference/contributing.md)).

## Evaluation and screenshots

Two more environment variables support scripted evaluation and captures:

- `TRIVIUM_EVAL` — run scripted scenarios for evaluation
- `TRIVIUM_CAPTURE` — drive the app into specific states for screenshots

## Isolated development environments

Combine the data-directory overrides to keep development state completely separate from your daily setup:

```bash
PI_CODING_AGENT_DIR=/tmp/pi-dev TRIVIUM_HOME=/tmp/trivium-dev TRIVIUM_DEV_FAUX=1 npm start
```

- `PI_CODING_AGENT_DIR` redirects pi's sessions and logins to `/tmp/pi-dev`
- `TRIVIUM_HOME` redirects Trivium's own preferences to `/tmp/trivium-dev`
- `TRIVIUM_DEV_FAUX=1` swaps in the scripted model

The result is a fully disposable Trivium instance — nothing under your real home directory is touched.
