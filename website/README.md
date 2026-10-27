# Trivium Website

The documentation website for [Trivium](https://github.com/SkarnerV/Trivium), built with [Docusaurus 3](https://docusaurus.io/) (TypeScript). It lives in this `website/` folder so it can sit next to the app source without interfering with it.

## Development

```bash
pnpm install        # install dependencies (npm install works too)
pnpm start          # dev server with hot reload
pnpm run build      # production build into build/
pnpm run serve      # serve the production build locally
```

## Structure

| Path | Purpose |
|------|---------|
| `docs/` | Documentation content — Getting Started, Guides, Architecture, Reference |
| `src/pages/index.tsx` | Landing page (hero, three modes, Why Trivium, features grid) |
| `src/css/custom.css` | Theme tokens: indigo `#5457E8` (Code), teal `#0B7A6E` (Research), amber `#A65A08` (Write) |
| `sidebars.ts` | Sidebar definition — register new documents here |
| `docusaurus.config.ts` | Site metadata, navbar, footer, Mermaid support |

## Deployment

The site is a static build (`pnpm run build`) and deploys anywhere static files are served.

For **GitHub Pages**, add a workflow at `.github/workflows/website.yml` that runs `pnpm install && pnpm run build` inside `website/` and uploads `website/build` with the official [`actions/deploy-pages`](https://github.com/actions/deploy-pages) action — `URL` and `BASE_URL` are picked up from the environment automatically (`BASE_URL` should be `/Trivium/` for a project page).
