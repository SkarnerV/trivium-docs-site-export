---
sidebar_label: Contributing
title: Contributing
description: How to contribute to Trivium during early preview.
---

# Contributing

Trivium is in **early preview** — issues and pull requests are genuinely welcome, and the shape of the app is still open to influence.

## Before you start

- **Open an issue first for big changes.** A short discussion up front saves everyone a rejected PR.
- Small fixes — typos, bugs, papercuts — can go straight to a pull request.

## Before you submit

1. Run the type check and make sure it passes:

   ```bash
   npm run check
   ```

2. If your change touches the UI, **attach screenshots** to the PR.

## Screenshot-friendly development

The scripted fake model exists exactly for this: run the app with

```bash
TRIVIUM_DEV_FAUX=1 npm start
```

and the `trivium-faux/scripted` script plays out a complete, deterministic bug-fix demo — no API key, no network, same run every time. It makes UI screenshots reproducible and reviews much easier. See [Development](../architecture/development.md) for the full set of development environment variables.

## Where to help

- Bug reports with reproduction steps are the highest-value contribution right now.
- Docs improvements — including this site — are always in scope.
- If you build a pi extension that works well in Trivium, tell us about it.
