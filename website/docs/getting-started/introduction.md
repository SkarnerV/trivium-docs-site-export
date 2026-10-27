---
sidebar_label: Introduction
title: Introduction
description: Why Trivium exists, and how it relates to the pi agent.
---

# Introduction

Trivium is one desktop workspace for **coding, research and writing**, powered by the [pi agent](https://github.com/earendil-works/pi). It is an open-source Electron app (MIT licensed), currently in **early preview** for macOS (Apple Silicon and Intel) and Windows x64.

## Why Trivium

Coding agents in a terminal have a visibility problem: you watch a spinner, then read a final answer. Everything in between — which files were read, which commands ran, what was changed and why — scrolls past or never appears at all. When the run ends, you are left reverse-engineering what just happened to your project.

Trivium keeps the whole run on the record:

- **Steps** — every tool call the agent makes, listed with its own duration. Folded to a single line (`Worked for 6.4s · 8 steps · 1 failed`) when you want calm, expanded when you want proof.
- **Waiting questions** — when the agent needs you, the question sits inline in the conversation, not buried in a log.
- **Exact diffs** — every run records precisely what changed on disk, so you can review, keep or revert it before opening an editor.

## Three modes

The name *Trivium* comes from the classical three arts: grammar, logic and rhetoric. The app is built around three modes in the same spirit:

| Mode | For | Default tools |
|------|-----|---------------|
| **Code** | Fixing and building software | `read`, `bash`, `edit`, `write` |
| **Research** | Reading material and taking notes | no shell — every claim needs a citation |
| **Write** | Drafting project documentation | small, reviewable edits that keep your voice |

Switch between them with `⌘1` / `⌘2` / `⌘3`; sessions keep running in the background when you do. See [Modes](../guides/modes.md) for the full tour.

## It is still pi

Under the hood, Trivium embeds the **pi SDK** in-process — there is no CLI subprocess and no RPC layer. That means:

- Every Trivium conversation is an **ordinary pi session**, stored in the usual place. You can open the same session in the pi CLI and continue it there.
- pi's **extensions, skills and model providers** all work unchanged. If pi can do it, Trivium can show it to you.

Read [How it works](../architecture/how-it-works.md) for the architecture, or jump straight to the [Quick start](./quick-start.md).
