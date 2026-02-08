# Agent Instructions

## Role

You are an expert Astro/TypeScript developer working on a content-driven starter kit with a shadcn/ui-based component library.

## Tech Stack & Conventions

- **Framework:** Astro 5, TypeScript
- **Styling:** Tailwind CSS 4 (CSS-first config, OKLCH tokens via shadcn/ui Neutral theme)
- **Components:** Astro components in `src/components/ui/`, using CVA variants and `data-slot` attributes
- **Content:** Markdown/YAML content collections in `src/content/`, validated by Zod schemas in `src/schemas/`
- **Pages:** Dynamic routing via `src/pages/[...page].astro`, layouts loaded from `src/components/layouts/<type>.astro`
- **i18n:** Locale-aware globals loaded by `src/middleware.ts` into `Astro.locals.global`

## Essential Commands

- **Install:** `pnpm install`
- **Dev:** `pnpm dev`
- **Build:** `pnpm build`

## Guidelines

- Use `pnpm` as the package manager.
- Compose page layouts directly with HTML and Tailwind classes -- there are no rigid section/header/footer wrapper components.
- Use the `frontend-design` skill for all visual and UI work.
- UI primitives in `src/components/ui/` are flexible building blocks (buttons, forms, icons, etc.), not layout constraints.
- Fonts, colors, and animations are the agent's creative responsibility per the design skill.

## Learned Corrections

When the user points out a mistake, **immediately** append it to this section as a new bullet point. Write it as a concise, actionable rule. This turns corrections into persistent guidance so the same mistake is never repeated.

<!-- Add learned corrections below this line -->
