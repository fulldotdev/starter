# Marketing homepage

Your task is to build an incredible marketing homepage. I want it to be creative and unique. Really push the limits of your design capabilities.

You already have a project initialized with the following specs:

- Astro
- Tailwind
- Typescript
- Pnpm

I want you to create FIVE different designs. Each design should be creative and unique from all the others that you create. They should be created in 1, /2, /3, /4 and /5 respectively.

## Implementation guidelines

Scope is strictly limited to `src/pages/1.astro` through `src/pages/5.astro`.
Assume everything outside these five files is already correctly configured.

Use a strict two-phase workflow:

1. Structure pass

- Build production-ready page structure first.
- Use Tailwind as primary for layout, spacing, typography scale, and responsive behavior.
- Use Tailwind spacing/size utilities (`p-*`, `px-*`, `gap-*`, `space-*`, `max-w-*`, etc.) as default; avoid custom spacing systems.
- Prefer existing token utilities like `bg-background`, `bg-card`, `text-foreground`, `text-muted-foreground`, `border-border`, `bg-primary`, and `text-primary-foreground`.
- In this phase, use only already-defined color/theme variables.

2. Sauce pass

- Preserve phase 1 structure; only enhance visual design.
- You may add custom vanilla CSS only for high-value polish Tailwind does not express cleanly (advanced motion, texture/noise, mask/clip-path, layered effects).
- You may add a small amount of static custom colors on top when they clearly improve the design; keep this intentional and limited.
- If custom colors work well, they can be standardized into theme variables later.
- You may add small, lightweight scripts for progressive enhancement (for example scroll-reveal with `IntersectionObserver`), but keep them minimal and purposeful.
- Override the theme variables in the `<style is:global>` in whatever way you see fit to make the design exceptional.

Use your frontend design skill to make these designs exceptional.
