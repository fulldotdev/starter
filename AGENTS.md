# Agent Rules

This repo is Fulldev Starter, a schema-first Astro starter. Keep the starter generic and keep the content model explicit.

## Core rules

- Pass `page` and `global` into layouts explicitly. Do not read content data from `Astro.locals` inside layouts or blocks.
- Resolve locale directly from `Astro.currentLocale`. Do not add middleware just to forward locale state.
- Use schemas as the source of truth. Add fields in Zod schemas before you add them to layouts or editor configuration.
- Do not add a new content collection unless there is a documented reason the existing `pages` and `globals` collections cannot cover the use case.
- Keep `cloudcannon.config.yaml` in sync with `src/content.config.ts` and the actual schema fields.
- Keep the starter free of project-specific business logic, branding, or campaign pages.
- Reuse `src/components/layouts/base.astro` and `src/schemas/layouts/base.ts` for shared page structure.
- Keep page sections in dedicated files under `src/components/blocks`, then compose them from layouts.
- Prefer `Container` plus plain semantic markup inside those blocks over extra section abstractions.
- Keep global content flat when the same data is reused across multiple blocks. Do not split site-wide data into separate `header` and `footer` objects unless the values truly differ.
- Each block should declare a written-out props interface in its own file.
- Each layout should take its props from the matching layout schema and explicitly map that data into block props. The mapping can be one-to-one, but it does not have to be.
- Use `astro:assets` directly unless a wrapper adds real behavior.
- Use Bun for install and scripts.

## Page-type workflow

When adding a page type:

1. Add or update the schema in `src/schemas/layouts`.
2. Extend the union in `src/schemas/page.ts`.
3. Add or reuse block components in `src/components/blocks`.
4. Add the matching layout component in `src/components/layouts`.
5. Reuse `src/components/layouts/base.astro` unless the page truly needs a different frame.
6. Register the layout in `src/pages/[...page].astro`.
7. Add example content in `src/content/pages`.
8. Update CloudCannon inputs for the new fields.

## Globals workflow

- Keep `src/schemas/global.ts` as the single source of truth for shared site data.
- Store locale-specific global content only in `src/content/globals`.
- If a layout should omit header or footer, it still receives the global object and decides what to render.

## Cleanup standard

- Prefer removing dead starter code over leaving placeholders behind.
- Remove repo-specific assets or docs when they no longer support the starter.
- Keep dependencies justified. If a package is unused, remove it and update the lockfile.
