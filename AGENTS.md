# AGENTS

Notes for AI agents working in this repo.

## Project basics
- Package manager: `pnpm`
- Build: `pnpm build`

## Content + schemas
- Content collections live in `src/content/`.
- Schemas live in `src/schemas/`.
- Pages are rendered via `src/pages/[...page].astro`.

## Layout merging
- A default layout is loaded from `layouts/index`.
- A type-based layout is loaded from `layouts/<page.data.type>` when present.
- Layout data merges into page data; page data overrides layout data.
- Sections are merged in the page renderer (`src/pages/[...page].astro`).
