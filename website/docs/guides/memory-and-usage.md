---
sidebar_label: Memory & Usage
title: Memory & Usage
description: Three-layer memory via @pify/memory, and the Usage page's token and cost statistics.
---

# Memory &amp; Usage

## Memory

Trivium's memory is provided by the `@pify/memory` extension and works in **three layers**:

| Layer | Scope | Where it lives |
|-------|-------|----------------|
| **Global** | Facts about you and your preferences, available in every project | Global memory store under `~/.trivium` |
| **Project** | Decisions, conventions and context for one repository | `MEMORY.md` in the project |
| **Daily** | A running log of what happened, day by day | Daily logs alongside the global store |

The agent reads the relevant layers at the start of a session and writes back things worth remembering. One hard rule: **memory refuses to store credentials** — API keys, tokens and passwords are never saved, even if asked.

The **Memory page** gives you full control over what was remembered:

- **Add** entries by hand,
- **edit** or **delete** anything the agent got wrong,
- **pin** the memories that should always win.

## Usage

The **Usage page** answers "what is this costing me?" without leaving the app:

- **Token and cost statistics** across your connected providers.
- **Cache-read share** — how much of your input traffic is being served from provider caches instead of billed at full rate.
- **Breakdowns by mode, model and conversation**, so you can see whether Code runs or Research sessions are the expensive ones.
- Time ranges: **7 days**, **30 days** or **all time**, plus a **12-month calendar heatmap** of daily activity.

Usage data is computed locally from your sessions; nothing is sent anywhere to produce these numbers.
