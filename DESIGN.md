# DESIGN.md

## Character and imagery

The name Trivium comes from the classical three arts (grammar, logic, rhetoric) — the site design is built around "three": three modes, three accent colors. The mood is "a desk lamp in a late-night study": restrained dark text, paper-like whitespace, with three soft color glows adding a hint of tech. Not noisy, not cyberpunk. Developer-first; information density over decoration.

## Official branding (source of truth)

- Brand assets come from the upstream repo `docs/branding/` and `docs/screenshots/` — never hand-draw the logo
- `static/img/logo.png` — official three-color wordmark (mark + "Trivium" with letters color-matched: Tri indigo / vi teal / um amber), used in the navbar and as the hero display title
- `static/img/logo-mark.png` — symbol only, used for the favicon (`favicon.ico` + static root copy)
- `static/img/app-hero.png` — real Code-mode screenshot (session list / working steps / Keep-Revert diff), shown inside a framed "window" on the hero

## Hero composition ("the triptych")

- Behind the wordmark: three Roman arches (one per art, I / II / III) drawn as thin strokes in the three brand colors with faint fills — a restrained altarpiece motif, not decoration noise
- Real app screenshot sits under the CTAs inside a window frame: three colored traffic dots (indigo/teal/amber), mono uppercase window title, soft layered shadow, three-color glow behind
- All hero artwork is static (no looping animation)

## Color scheme

- Primary Indigo `#5457E8` (Code mode; the pi badge primary)
- Accent Teal `#0B7A6E` (Research mode)
- Warm Amber `#A65A08` (Write mode)
- The three mode cards, the three arches and the hero glows use these three colors, forming the "three arts" visual thread
- Light theme is the default; in dark theme the three accents are brightened (`#7B7EF0` / `#14B8A6` / `#F5A623`)

## Typography

- Body/headings: Inter (Google Fonts; use fonts.googleapis.cn in CN environments)
- Code/data labels: JetBrains Mono; small uppercase labels use mono + letter-spacing for an "instrument readout" feel

## Motion and interaction

- Card hover: translateY(-4px) + soft shadow, 200ms ease
- Hero glows and arches: static radial gradients, no looping animations (restraint)
- Button hover: darker color + slight lift

## Anti-patterns

- No hand-drawn replacement logos — always use the official branding assets
- No pure-black backgrounds with neon borders ("hacker style")
- No blue-purple gradient card stacks — the generic AI template look
- No emoji icons; the feature grid uses minimal line SVG icons
