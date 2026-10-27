---
sidebar_label: Quick start
title: Quick start
description: Requirements, download and first run — or build Trivium from source.
---

# Quick start

## Requirements

- **macOS** (Apple Silicon or Intel) or **Windows x64**
- **At least one model provider** — connect one in **Settings → Models and logins**, or use the pi CLI's `/login` command; the logins are shared
- On **Windows**, install [Git for Windows](https://gitforwindows.org/) — the Code mode and the Git panel depend on it

## Download

Grab the latest build from the [releases page](https://github.com/SkarnerV/Trivium/releases/latest):

- **macOS** — download the DMG that matches your machine: `arm64` for Apple Silicon, `x64` for Intel
- **Windows** — download the ZIP, extract it, and run `Trivium.exe`

:::caution[Unsigned preview builds]
Preview builds are **not signed or notarized**. On macOS, the first launch is blocked by Gatekeeper: open **System Settings → Privacy &amp; Security** and choose **Open Anyway** next to the Trivium entry. On Windows, confirm the SmartScreen prompt if it appears.
:::

Once the app is running:

1. Open **Settings → Models and logins** and connect a provider (or run `/login` in the pi CLI first).
2. Open a project folder — or start a **no-project chat** to try things out.
3. Press `⌘1` and ask the agent to fix something small. Watch the steps, then review the diff in the **Changes** panel.

## Run from source

Requires **Node.js ≥ 22.19**:

```bash
git clone https://github.com/SkarnerV/Trivium.git
cd Trivium
npm install --ignore-scripts
node node_modules/electron/install.js
npm start
```

The `--ignore-scripts` flag skips Electron's automatic binary download, which the `node node_modules/electron/install.js` step then performs explicitly.

:::tip[Developing against the app?]
See [Development](../architecture/development.md) for hot reload, the scripted fake model (`TRIVIUM_DEV_FAUX=1`) and packaging commands.
:::
