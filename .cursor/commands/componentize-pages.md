# Componentize marketing pages

Refactor marketing pages to reusable UI components while preserving the visual result as closely as possible.

## Scope

- Work on pages requested in chat. If not specified, use: `src/pages/index.astro`, `src/pages/services.astro`, `src/pages/about.astro`, `src/pages/contact.astro` (use only pages that exist).
- Create duplicate comparison outputs with `-componentized` suffix; do not overwrite originals.

## Required behavior

- Inspect `src/components/ui` first, then analyze repetition across selected pages.
- Preserve layout, spacing, typography, colors, motion, copy, and interactions.
- Use a component-first approach across the full `src/components/ui` library, with correct variants and composition.
- For each componentized page, use `Layout`, `LayoutHead`, `LayoutBody`, and `LayoutMain` from `src/components/ui/layout`.
- For site navigation, use `NavigationMenu` primitives from `src/components/ui/navigation-menu` (add `Sheet` for mobile menu if needed).
- Across the selected pages, use every relevant UI primitive available (not just buttons/badges), including content, form, media, list, and disclosure components where they naturally fit.
- If the same class patterns repeat, move them into component variants/styles.
- Keep per-instance overrides minimal; avoid `!` overrides. If a component instance needs many custom classes, create/update a variant instead.
- If replacement causes visible regression, keep the existing element.

## Guardrails

- No redesign, no new sections, no copy changes.
- No global theme rewrites.
- Prioritize visual fidelity and cross-page consistency over raw component count.
- Componentization must be meaningful: reduce repeated page-level class strings and centralize reusable styling in components/variants.

## Validation

- Take browser snapshots before/after for each componentized page and compare.
- Validate on `http://localhost:4321` for responsiveness and behavior.
