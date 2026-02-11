# Marketing homepages - Component-first

Create FIVE logical, high-quality homepage designs in `src/pages/1.astro` through `src/pages/5.astro`.

## Core rule

Use components first. Prefer `src/components/ui` primitives wherever they can represent the UI. Only use raw HTML when no suitable primitive exists.

## Required behavior

- Keep page structure clear and logical (hero, value props, social proof, CTA, footer, etc.).
- Use `Layout`, `LayoutHead`, `LayoutBody`, and `LayoutMain` on every page.
- Use component variants/composition instead of long custom class strings.
- Keep Tailwind token utilities for theme consistency (`bg-background`, `text-foreground`, `border-border`, etc.).
- Keep pages distinct in direction, but consistent in system usage.

## Component inventory (use where relevant)

`accordion`, `alert`, `badge`, `button`, `checkbox`, `collapsible`, `field`, `icon`, `image`, `input`, `label`, `layout`, `marquee`, `native-carousel`, `native-select`, `navigation-menu`, `price`, `radio-group`, `rating`, `sheet`, `table`, `tabs`, `textarea`, `theme-toggle`, `video`

Use your frontend design skill to make these component-first designs exceptional.
