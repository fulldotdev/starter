# Marketing homepage

I am building a marketing homepage for a web development agency focused on combining technical expertise with human soft skills for smooth client communication.

The agency bridges client goals and technical possibilities. Services include website, webshop, web application development, and AI integration.

Your task is to build exceptional marketing homepages with bold, memorable visual direction.

## Project stack

- Astro
- TypeScript
- pnpm
- Tailwind CSS 4
- UI components in `src/components/ui/`

## Deliverables

- Create FIVE different homepage designs.
- Save them as `src/pages/1.astro` through `src/pages/5.astro`.
- They should be available at `/1` through `/5`.
- Every design must be clearly distinct in art direction, layout system, typography, and motion language.

## Styling policy (non-negotiable)

Use a hybrid approach: Tailwind-first, CSS-enhanced.

### Use Tailwind for

- Layout and structure (grid, flex, positioning, spacing)
- Typography scale, responsive behavior, and state variants
- Color/token usage through existing theme utilities (`bg-background`, `text-foreground`, etc.)
- Component composition and UI consistency

### Use custom CSS only for

- Complex keyframes and animation choreography
- Effects that are awkward or impossible with utilities alone (masking, clip-path, blend/filter stacks, advanced gradient/noise treatments)
- Highly specific decorative details that materially improve the design quality

### Custom CSS constraints

- Prefer `<style>` scoped to each page/component; avoid global leakage.
- No separate design system. Do not introduce a new standalone palette/spacing/radius system.
- Custom CSS must extend Tailwind tokens: use existing theme variables (`var(--background)`, `var(--foreground)`, `var(--primary)`, etc.) rather than unrelated hardcoded systems.
- Avoid raw hex values when an existing theme token can express the same intent.
- Keep custom CSS concise and purposeful (target: <= 80 lines per page unless absolutely necessary).
- No CSS frameworks other than Tailwind.

## Quality bar

- Avoid generic template aesthetics.
- Each page must include one signature visual motif (e.g. distinctive hero composition, interaction pattern, or art-directed section treatment).
- Use strong type pairings and clear hierarchy.
- Include tasteful, performant motion (not excessive).
- Ensure responsive behavior is designed, not merely stacked.

## Process

- Use the frontend-design skill to push creative quality.
- Before implementing each page, define a short concept direction (tone, palette intent, type approach, interaction idea), then execute.
- Validate that each page renders without errors in the running dev server (`http://localhost:4321`).
