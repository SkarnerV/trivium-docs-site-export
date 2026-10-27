---
sidebar_label: Extensions
title: Extensions
description: Any pi extension works in Trivium — globally, or scoped to a single mode.
---

# Extensions

Trivium embeds pi, so **any pi extension works**. Extensions are how you add commands, tools and behaviors without waiting for an app release.

## Where extensions live

- **All modes** — pi's built-in extensions and your global pi extensions load everywhere. Built-ins can be turned off in **Settings** if you want a leaner profile.
- **One mode only** — drop an extension into `~/.trivium/apps/<app>/extensions/` (where `<app>` is `code`, `research` or `write`) and it loads **only in that mode**.

Per-mode loading keeps tool whitelists honest: a citation checker belongs in Research, not in Code.

## Example: a citation checker for Research

This extension adds a `/cite` command that asks the agent to verify every claim in the current note against the session's sources. Save it as `~/.trivium/apps/research/extensions/cite-check.ts`:

```ts
// cite-check.ts — Research-mode extension.
// Adds a /cite command that verifies the note's claims against its sources.
export default function citeCheck(pi) {
  pi.registerCommand("cite", {
    description: "Check that every claim in the note has a citation",
    handler: async (_args, ctx) => {
      const proceed = await ctx.ui.confirm(
        "Scan the current note and verify each claim against the sources list?",
      );
      if (!proceed) {
        return;
      }

      const report = await ctx.agent.run(
        "List every claim in the open note. For each claim, cite the source " +
          "it came from, or mark it UNVERIFIED if no source supports it.",
      );

      const missing = report.match(/UNVERIFIED/g)?.length ?? 0;
      if (missing === 0) {
        ctx.ui.notify("Citation check passed — every claim has a source.");
      } else {
        ctx.ui.notify(`${missing} claim(s) still need a source.`, {
          kind: "warning",
        });
      }
    },
  });
}
```

Two things to notice:

- `ctx.ui.confirm` and `ctx.ui.notify` render as **native Trivium dialogs and notifications** — extensions get the app's UI, not a terminal prompt.
- The handler drives the same agent session the user is watching, so the verification appears as a normal, inspectable run.

## Managing extensions

- Per-mode extensions are listed under **Settings → Extensions**, grouped by mode, and can be toggled individually.
- pi's bundled extensions load in **all modes** by default and can be disabled the same way.
- On the roadmap: installing extensions **from npm by name**, plus first-party `@coresmos` plugins. See the [Roadmap](../reference/roadmap.md).
