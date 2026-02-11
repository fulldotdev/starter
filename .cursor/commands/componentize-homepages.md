# Componentize homepages

Rewrite existing homepage designs to use reusable UI primitives while preserving the exact visual result as closely as possible.

## Scope

- Work only on `src/pages/1.astro` through `src/pages/5.astro`.
- Keep routes and filenames unchanged.

## Goal

Refactor raw page markup into components from `src/components/ui` (and reusable local patterns when useful), without redesigning.

## Required behavior

- Deeply inspect available components in `src/components/ui` before editing pages.
- Preserve layout, spacing, typography, colors, motion, copy, and interactions from the current pages.
- Keep Tailwind classes/token usage compatible with the existing setup.
- Replace raw elements with UI components where there is a close visual/behavioral match.
- If a component would cause visible regression, keep the current element instead of forcing replacement.

## Guardrails

- No redesign, no new sections, no copy changes.
- No route changes.
- No global style/theme rewrites as part of this command.
- Prioritize visual fidelity over maximum component count.

## Validation

- Compare before/after behavior on the dev server (`http://localhost:4321`).
- Ensure each page remains fully responsive and visually consistent after refactoring.
