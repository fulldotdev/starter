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

## Architecture

- **Layouts are standalone.** Each layout in `src/components/layouts/` is self-contained with its own imports and structure. There is no base layout to extend. This allows layouts like `landing.astro` to omit header/footer entirely.
- **Layout props use schema types directly.** Always `type Props = HomeSchema`, never custom type extensions. All data shaping belongs in schemas.
- **Use `const page = Astro.props` in layouts**, not destructuring. This keeps blank-slate defaults flexible — the AI can access any field without updating destructuring.
- **Header/Footer are smart components.** They access `Astro.locals.global` internally and fetch their own dynamic data (e.g., nav items via `getCollection`). Layouts render them without props: `<Header />`.
- **Layout schemas inline shared fields.** Each schema in `src/schemas/layouts/` includes `slug`, `name`, and `seo` directly. This keeps types self-contained and avoids intersection issues.
- **The global schema is extensible.** `src/schemas/global.ts` defines global content (header config, footer config, etc.). Expand it freely as the site grows.
- **Adding a new page type** requires: a layout schema in `src/schemas/layouts/`, a layout component in `src/components/layouts/`, and a new entry in the discriminated union in `src/schemas/page.ts`.

## Guidelines

- Use `pnpm` as the package manager.
- Compose page layouts directly with HTML and Tailwind classes.
- Use the `frontend-design` skill for all visual and UI work.
- UI primitives in `src/components/ui/` are flexible building blocks (buttons, forms, icons, etc.), not layout constraints.
- Fonts, colors, and animations are the agent's creative responsibility per the design skill.

## Learned Corrections

When the user points out a mistake, **immediately** append it to this section as a new bullet point. Write it as a concise, actionable rule. This turns corrections into persistent guidance so the same mistake is never repeated.

<!-- Add learned corrections below this line -->

- Never define custom `type Props` in layout files by extending schema types. Always use the inferred schema types directly (e.g., `type Props = HomeSchema`). All data shaping belongs in schemas, not in component type declarations.
- Always include `const global = Astro.locals.global` in layouts, even if not immediately used. It signals to the AI that global data is available for use in the layout.
