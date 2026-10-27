---
sidebar_label: Project layout
title: Project layout
description: The source tree of the Trivium Electron app.
---

# Project layout

Trivium is an **Electron 45 + React 19 + TypeScript 5.9** app. The source tree follows the process boundary:

```
Trivium/
├── src/
│   ├── main/        # Electron main process
│   ├── preload/     # window.trivium bridge
│   ├── renderer/    # React UI
│   └── shared/      # IPC types shared by main and renderer
└── dev/             # Scripted development model
```

## `src/main` — Electron main process

Hosts everything privileged: the pi SDK session host, the run tracker, the change tracker, the git reader and the dialog bridge that renders extension UI requests as native dialogs. See [How it works](./how-it-works.md).

## `src/preload` — the `window.trivium` bridge

The only channel between renderer and main. It exposes a typed `window.trivium` API over IPC — the renderer never gets Node or filesystem access.

## `src/renderer` — the React UI

The chat, the three modes' panels (Changes / Git / Preview, note preview and Sources, tracked changes), Settings, Memory, Usage and the Connectors page.

## `src/shared` — IPC types

Type definitions shared by `main`, `preload` and `renderer`, so both ends of every IPC call are checked against the same contract.

## `dev/` — scripted development model

The scripted fake model used with `TRIVIUM_DEV_FAUX=1` — including `trivium-faux/scripted`, a complete scripted demo of a bug fix. See [Development](./development.md).
