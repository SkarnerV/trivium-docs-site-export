# AGENTS.md

## Project overview

Official documentation website for the Trivium open-source project, built with **Docusaurus 3.10 + TypeScript + React 19**. Contains the landing page and 4 categories with 12 documents. Site language: English.

- Subject: Trivium (https://github.com/SkarnerV/Trivium), an Electron desktop app embedding the pi agent
- Build output: `website/build/`

## Build and run

- Package manager: **pnpm** (never install dependencies with npm/yarn; the `npm run build` script itself works)
- Dev preview: `coze dev` (runs `scripts/dev.sh`; port comes from `${DEPLOY_RUN_PORT}`, never hardcode)
- Production build: `pnpm run build` inside `website/`; serve the output locally with `pnpm run serve`
- `.coze` build/run must go through the root `scripts/*.sh` helpers — coze joins array commands with spaces, which breaks `sh -c "..."` forms

## Workspace layout

- `website/` — the Docusaurus site; **this is the folder that gets pushed to the Trivium repo**
- `scripts/` — sandbox lifecycle helpers (`install.sh`, `dev.sh`, `build.sh`, `serve.sh`); each `cd`s into `website/`
- `docusaurus.config.ts` (inside `website/`): site metadata, navbar (Docs / Roadmap / GitHub icon / Download button), footer, `markdown.mermaid: true` + `@docusaurus/theme-mermaid`; deployment URL honors `URL` / `BASE_URL` (GitHub Pages) and `COZE_PROJECT_DOMAIN_DEFAULT` (sandbox)
- `website/sidebars.ts`: manually maintained 4 categories (Getting Started / Guides / Architecture / Reference) — register new documents here
- `website/src/css/custom.css`: Infima variables and global styles; design decisions in `DESIGN.md`
- `website/src/pages/index.tsx` + `index.module.css`: landing page (Hero / three mode cards / Why Trivium / features grid / bottom CTA)

## Known pitfalls (fixed — do not regress)

1. **Legacy admonition syntax fails under `future.v4: true`**: `:::note Title` (title on the same line) is not parsed. Must use the new syntax `:::note[Title]`.
2. **Mermaid SSG output is an empty placeholder**: ```mermaid code blocks appear as `<!-- -->` in SSG HTML; the chart source lives in the page JS chunk and renders client-side. This is expected — do not verify mermaid by grepping SSG HTML.
3. **`pnpm run start -- --port` does not work**: `--` is passed literally to docusaurus. To pass flags use `pnpm exec docusaurus start --port ...` (see `scripts/dev.sh`).
4. **The dev server is an SPA without SSR**: curl against the dev server returns no document body; verify content against the `build/` output.

## Content conventions

- Any path fragment containing angle brackets (e.g. `<app>`) must be wrapped in an inline code span so MDX does not parse it as JSX
- Tables, code blocks (bash/json/ts) and Mermaid diagrams must be spot-checked in `build/` HTML after building
- Colors follow DESIGN.md: indigo=Code, teal=Research, amber=Write
- Everything that ships to the Trivium repository (everything inside `website/`) must be in English
