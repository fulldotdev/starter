# Marketing page designs

Your task is to build FIVE marketing content pages with a strict two-phase workflow:

1. Build the pages we want (clean structure pass).
2. Then throw the visual "sauce" over them (polish pass).

## Project setup

- Astro
- Tailwind CSS 4
- TypeScript
- pnpm
- UI components in `src/components/ui/`

## Output

- Create five pages at `/1`, `/2`, `/3`, `/4`, `/5`.
- Use `src/pages/1.astro` through `src/pages/5.astro`.
- Each page must be unique in concept, but consistent in quality.

## Phase 1 - Structure first (required)

Build minimal, production-ready page structure before any heavy styling.

- Prioritize information architecture, section flow, hierarchy, and spacing.
- Use Tailwind utilities for layout, typography scale, responsive behavior, and spacing.
- Keep visuals intentionally restrained (minimal colors, no decorative effects yet).
- Ensure each page has clear sections, readable copy blocks, and strong CTA placement.
- Do not add "sauce" effects in this phase.

## Phase 2 - Sauce pass (after phase 1 is complete)

Enhance the already-correct structure with visual polish.

- Preserve structure from phase 1; do not redesign layout unless a clear issue exists.
- Add art direction, signature details, and tasteful motion.
- Tailwind remains primary for layout/responsiveness.
- Custom CSS is allowed for high-value polish only (advanced keyframes, texture/noise, masks, special decorative treatment).
- Custom CSS must extend the existing theme tokens (use variables like `var(--background)`, `var(--foreground)`, `var(--primary)`), not a separate design system.

## Quality guardrails

- Avoid generic template aesthetics.
- Each page should have one memorable visual motif.
- Keep performance and readability strong.
- Mobile behavior must be intentionally designed.

Use your frontend design skill to execute both phases with high quality.

Use the dev server on port `4321` for validation.
