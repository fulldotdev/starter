---
name: data-slot-astro
description: Build accessible, unstyled interactive behavior with data-slot primitives in any web project. Use when the user asks for headless components, framework-agnostic JavaScript interactions, or alternatives to pre-styled UI libraries.
---

# data-slot (general skill)

Use this skill when you need interaction logic without imposing a visual style system.

Reference: https://github.com/bejamas/data-slot

## Core approach

- Keep behavior and styling separate.
- Use `data-slot` markup for structure and accessibility state.
- Initialize behavior with small JavaScript modules.
- Style states with the existing CSS/Tailwind/CVA system.
- Use data-slot when headless behavior is needed and styling should stay fully custom.

## When to use vs skip

- Use when you need lightweight interactive behavior with full control over styling.
- Use when you want to avoid framework-specific component runtime.
- Skip when an existing project component already provides the same behavior and API.
- Skip when static markup is enough (no interaction/state required).

## Workflow

1. Pick the needed primitive.
2. Add semantic markup with the correct `data-slot` attributes.
3. Add a small `<script type="module">` to initialize behavior.
4. Style states using `data-*` / `aria-*` selectors.
5. Verify keyboard navigation, focus behavior, and ARIA state changes.

If DOM is re-rendered dynamically (for example CMS section reloads), re-run initialization for the affected scope.

## Installation

Install only required packages:

```bash
pnpm add @data-slot/accordion @data-slot/navigation-menu
```

Install more packages only when needed.

## Base usage pattern

```html
<div data-slot="tabs" data-default-value="one">
  <div data-slot="tabs-list">
    <button data-slot="tabs-trigger" data-value="one">One</button>
    <button data-slot="tabs-trigger" data-value="two">Two</button>
  </div>
  <div data-slot="tabs-content" data-value="one">Panel one</div>
  <div data-slot="tabs-content" data-value="two">Panel two</div>
</div>

<script type="module">
  import { create } from "@data-slot/tabs";
  create();
</script>
```

## Components and how to use them

### `@data-slot/navigation-menu`
- Use for desktop nav with dropdown/submenu behavior.
- Mark root/list/items/trigger/content with matching `data-slot` attributes.
- Ensure trigger and content are keyboard reachable and visibly focusable.

### `@data-slot/tabs`
- Use for tabbed content blocks where one panel is active at a time.
- Add `data-value` to each trigger/content pair.
- Optionally set `data-default-value` on root.

### `@data-slot/dialog`
- Use for modals requiring focus management and escape/overlay close.
- Include trigger, overlay, content, title, description, close controls.
- Keep a clear close action and focus-visible styles.

### `@data-slot/accordion`
- Use for collapsible FAQ/sections.
- Add item/trigger/content slots; support single or multiple expansion behavior as needed.
- Style open/closed states from data attributes, not hardcoded JS classes.

### `@data-slot/tooltip`
- Use for short hint text on hover/focus.
- Keep content concise and avoid replacing essential visible labels.
- Ensure focus/keyboard access, not hover-only behavior.

### `@data-slot/popover`
- Use for anchored floating panels (filters, profile menus, quick actions).
- Keep panel lightweight and close behavior clear.
- Manage stacking and collision styles with your CSS system.

### `@data-slot/collapsible`
- Use for simple show/hide sections without full accordion semantics.
- Good for "more details" disclosures inside cards/rows.
- Keep trigger text/state clear for accessibility.

### `@data-slot/core`
- Shared low-level helpers used by component packages.
- Generally installed transitively; use directly only for custom primitives.

## Styling pattern

- Use `data-state`, ARIA, and slot attributes as styling hooks.
- In Tailwind, prefer `data-[state=...]` and `aria-*` variants.
- In vanilla CSS, use attribute selectors to style interactive states.
- Keep one design system; do not split between competing token sets.

## Validation checklist

- Keyboard: Tab/Shift+Tab/Enter/Escape works as expected.
- Focus: visible focus styles on all actionable controls.
- ARIA/state: attributes update correctly during interaction.
- Motion: transitions do not hide state changes from assistive tech.
- Fallback: content remains understandable without JavaScript when possible.

## Guardrails

- Keep scripts small and page-scoped.
- Do not re-implement data-slot behavior manually unless required.
- Avoid broad global CSS when component/local styles are sufficient.
