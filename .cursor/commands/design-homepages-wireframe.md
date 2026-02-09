# Marketing homepage - Wireframe pass

Create the first pass as a clean, minimal wireframe set for marketing homepages.

## Goal

Design structure first, styling second. Focus on hierarchy, spacing, readability, and flow. This pass should be intentionally restrained and easy to iterate on.

## Project stack

- Astro
- TypeScript
- pnpm
- Tailwind CSS 4
- UI components in `src/components/ui/`

## Deliverables

- Create FIVE wireframe homepages.
- Save them as `src/pages/1.astro` through `src/pages/5.astro`.
- Pages should be available at `/1` through `/5`.
- Each page should have a distinct layout concept, but all should stay visually minimal in this pass.

## Wireframe styling rules (strict)

- Use Tailwind utilities only for the main implementation.
- No decorative effects in this pass (no noise layers, glows, complex gradients, masks, or heavy motion).
- Keep colors neutral and token-based using existing theme utilities (`bg-background`, `text-foreground`, `border-border`, `text-muted-foreground`).
- Use simple typography and clear section rhythm.
- Use borders, spacing, and scale to communicate hierarchy.
- If custom CSS is needed, keep it tiny and utility-aligned (only for small gaps Tailwind cannot express cleanly).

## Content and layout requirements

Each page must include:

- Header / nav area
- Hero section
- Services section
- Process or approach section
- Proof section (stats, testimonials, or logos)
- CTA and footer

## Quality bar for this phase

- Minimal, clean, and highly legible.
- Strong information architecture.
- Mobile behavior must be intentional.
- Avoid visual polish that belongs to phase 2.

## Process

- Start each page with a short layout concept sentence.
- Implement the minimal structure.
- Validate each page renders correctly on the dev server (`http://localhost:4321`).
