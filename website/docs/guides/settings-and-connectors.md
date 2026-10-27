---
sidebar_label: Settings & Connectors
title: Settings & Connectors
description: Per-mode settings, permission levels, custom endpoints and MCP connectors.
---

# Settings &amp; Connectors

## Per-mode settings

Each mode — Code, Research, Write — has its own settings slice:

- **Extensions** — which per-mode and bundled extensions are enabled.
- **Models** — the default model and thinking effort for that mode.
- **Permission level** — how much the agent may do before asking.

## Permission levels and risky commands

At the default permission level, the agent must stop and ask before running **risky commands**. Blocked-by-default examples:

- `rm -rf` and other destructive deletes
- `sudo` commands
- `git push`
- anything that writes outside the project directory

One rule applies at **every** permission level: **`.env` files are always blocked.** The agent can never read or write them, no matter how permissive the mode is.

## Custom endpoints

Trivium talks to model providers through pi's model runtime, which means custom endpoints work out of the box:

- **Ollama**, **LM Studio**, **vLLM**
- any **OpenAI-compatible**, **Anthropic-compatible** or **Gemini-compatible** service

Point a provider at a base URL, give it a key if it needs one, and its models appear in the searchable model list like any other.

## Connectors (MCP)

The **Connectors page** manages [MCP](https://modelcontextprotocol.io/) servers and their logins in one place:

- Add, edit and remove MCP servers.
- Handle OAuth-style **logins** for servers that need them.
- **Paste a `mcpServers` JSON block** straight from Claude Desktop, Cursor or VS Code — Trivium imports the whole config instead of making you retype it server by server.

Like extensions, connectors respect mode boundaries: a server can be enabled everywhere or only where it is useful.
