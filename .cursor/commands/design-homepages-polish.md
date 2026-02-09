# Marketing homepage - Visual polish pass

Apply a second-pass visual layer on top of existing wireframes to create high-quality, memorable marketing pages.

## Prerequisite

- Assume wireframes already exist in `src/pages/1.astro` through `src/pages/5.astro`.
- Do not rewrite page structure unless necessary for visual execution.

## Goal

Preserve the wireframe information architecture and improve aesthetic quality through typography, color, motion, and tasteful effects.

## Project stack

- Astro
- TypeScript
- pnpm
- Tailwind CSS 4
- UI components in `src/components/ui/`

## Enhancement strategy

Use a hybrid approach: Tailwind-first, CSS-enhanced.

### Keep in Tailwind

- Layout and spacing primitives
- Responsive behavior
- Core type sizing and hierarchy
- Token-driven color and surface choices

### Add with custom CSS (only when it improves quality)

- Advanced keyframes or stagger choreography
- Signature decorative effects (gradient mesh, texture/noise, mask/clip, layered depth)
- Refined interaction details not practical with utilities alone

## Custom CSS constraints

- Custom CSS must extend existing theme tokens from `src/styles/global.css`.
- Use token variables (`var(--background)`, `var(--foreground)`, `var(--primary)`, etc.) over disconnected hardcoded systems.
- Do not create a second standalone design system.
- Scope styles to the page/component to avoid leakage.
- Keep CSS concise and intentional (target: <= 120 lines per page).

## Visual quality requirements

For each page, add:

- One clear art direction
- One signature motif
- Cohesive typography pairing
- Polished but performant motion
- Strong contrast and accessibility

Each of the FIVE pages must remain distinct in personality and execution.

## Guardrails

- Do not collapse all pages into the same visual style.
- Do not remove content sections introduced in wireframe phase unless clearly redundant.
- Avoid generic template aesthetics.

## Process

- For each page, briefly state the polish concept before editing.
- Apply visual layer while preserving structure.
- Verify all FIVE pages render and remain responsive on `http://localhost:4321`.
