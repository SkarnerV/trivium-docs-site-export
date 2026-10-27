---
sidebar_label: Modes
title: Modes
description: Code, Research and Write — three agent profiles with dedicated tools and panels.
---

# Modes

Each mode is a dedicated **agent profile**: a tool whitelist, a system-prompt delta and its own panel layout. Switch with `⌘1` / `⌘2` / `⌘3` — sessions keep running in the background when you move between modes.

## Code — fix and build software

The full engineering tool set: `read`, `bash`, `edit` and `write`. The agent can explore the repo, run commands and change files — and every change lands in front of you.

Dedicated panels:

- **Changes** — a baseline is recorded before the agent's first edit; review the run's diff, then **Keep changes** or **Revert**. See [Review every change](./review-every-change.md).
- **Git** — staged, unstaged, untracked and conflicted files, refreshed after each run and whenever the window regains focus.
- **Preview** — renders HTML, Markdown, CSV, text and images in a sandboxed iframe, auto-refreshing as files change on disk.

## Research — read and take notes

Research mode has **no shell**. The agent reads material — papers, docs, code — and takes structured notes instead of touching your system.

- Every claim the agent makes **must come with a citation**.
- The **note preview** renders the working note alongside a **Sources** tab that lists everything cited.
- **Open in Write** hands the note off to Write mode when it is time to turn research into prose.

## Write — draft in your own voice

Write mode drafts project documentation and long-form text. It is tuned to **preserve the author's voice** rather than flatten it into generic AI prose.

- Edits are **small and reviewable** — the agent works in steps you can actually audit.
- Everything it proposes lands as **tracked changes** in the revision view.
- **Accept or reject** each edit individually, or accept / reject all at once.

## Why separate modes?

A single do-everything agent is hard to trust and hard to tune. Splitting the work into three profiles means each mode can be strict about what matters: Code gets a shell and an audit trail, Research gets citations instead of a shell, and Write gets restraint instead of rewrites.

Per-mode models, permission levels and extensions are configured in [Settings &amp; Connectors](./settings-and-connectors.md).
