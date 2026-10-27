---
sidebar_label: Review every change
title: Review every change
description: The Changes, Git and Preview views — plus the branch summary in the header.
---

# Review every change

Code mode is built around one rule: **nothing changes on disk without you being able to see it.** Three views and a header summary make that practical.

## Changes view

Before the agent's first edit in a run, Trivium records a **baseline** of the affected files. Everything the run changes is then shown against that baseline:

- Read the diff per file, exactly as it landed on disk.
- **Keep changes** to accept the run's work, or **Revert** to restore the baseline.
- **Open in VS Code** jumps into your editor with the same file when you want to take over manually.

## Git view

A live read of the repository state, grouped into **staged**, **unstaged**, **untracked** and **conflicted**. The view refreshes automatically:

- after every agent run, and
- whenever the Trivium window regains focus.

So what you see is never stale after the agent touches the repo.

## Preview view

Renders files in a **sandboxed iframe** — HTML, Markdown, CSV, plain text and images. The preview **auto-refreshes when the file changes on disk**, so while the agent edits a page or a table, you watch the result update in place. Because it is sandboxed, previewed content gets no access to the rest of the app.

## Branch summary

The header shows a compact summary of the current branch:

- the **upstream** it tracks,
- how many commits are **unpushed**,
- and a one-click action to **ask the agent to push** for you.

`git push` is one of the risky commands blocked by default at lower permission levels — see [Settings &amp; Connectors](./settings-and-connectors.md) for how permission levels work.
