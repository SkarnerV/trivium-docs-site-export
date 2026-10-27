---
sidebar_label: Conversations
title: Conversations
description: Editing, forking and organizing conversations in Trivium.
---

# Conversations

Conversations are the unit of work in Trivium. They are ordinary pi sessions — you can open the same session in the pi CLI and pick up where you left off.

## Reshape any conversation

Every message carries three actions:

- **Edit** — rewrite a message and re-run from that point. Useful when the prompt, not the agent, was the problem.
- **Fork** — branch the conversation to try a different angle without losing the original thread.
- **Copy** — copy any turn (yours or the agent's) to the clipboard.

## No-project chats

You do not need a project open to talk. A **no-project chat** is a scratch conversation — good for questions, one-off explanations, or trying a model before pointing it at a repository.

## Pinning

Pin what you come back to:

- **Pin projects** to keep them at the top of the project list.
- **Pin conversations** inside a project so the important threads survive a long session list.

Everything else is one `⌘K` away — global search covers every conversation in every project.

## Export

Export any conversation to **Markdown** with one click: prompts, replies, steps and code blocks included. Handy for bug reports, design docs, or pasting into an issue.

## The model button

The model button in the composer opens two controls:

- **Thinking effort slider** — dial how hard the model reasons before answering, per conversation.
- **Searchable model list** — every model from your connected providers, filterable by name.

Model choices are per mode, with per-conversation overrides. Connect providers under **Settings → Models and logins**, or via the pi CLI's `/login`.
