# Trivium Docs Workspace

Workspace for the [Trivium](https://github.com/SkarnerV/Trivium) documentation website. The site itself lives in [`website/`](./website) and is designed to be dropped into the Trivium repository as-is (it does not touch the app's `docs/`, `scripts/` or root `package.json`).

See [`website/README.md`](./website/README.md) for site development commands and structure, and [`DESIGN.md`](./DESIGN.md) for the visual design decisions.

## Workspace layout

```
.
├── website/          # Docusaurus 3 site (this is what gets pushed to the repo)
├── scripts/          # Sandbox lifecycle helpers used by .coze (dev/build/serve)
├── .coze             # Sandbox build/run configuration
├── DESIGN.md         # Design tokens and visual direction
└── AGENTS.md         # Agent handbook for this workspace
```
