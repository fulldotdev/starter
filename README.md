# Fulldev Starter

Schema-first Astro starter for content-driven sites. The repo keeps page routing, layout rendering, globals, and CloudCannon configuration aligned so a new contributor can extend it without hidden conventions.

## What is included

- A dynamic page route at `src/pages/[...page].astro` that resolves content collection entries and picks a layout from a typed map.
- A shared `src/components/layouts/base.astro` that handles metadata and optional chrome for the page-specific layouts.
- Content collections in `src/content/pages` and `src/content/globals`.
- Zod schemas in `src/schemas` that define the real content contract, including a shared base schema at `src/schemas/layouts/base.ts`.
- A small set of example page types: `home`, `about`, `service`, `contact`, and `landing`.
- A CloudCannon config that only references the collections and fields that actually exist in the repo.

## How routes work

- Every Markdown file in `src/content/pages` becomes a route.
- By default the route matches the content entry id, so `src/content/pages/about.md` renders at `/about`.
- `src/content/pages/index.md` renders at `/`.
- If a page defines `slug`, the catch-all route uses that value instead of the file path. Use this only when you need a route override.
- The route file loads validated global content for the current locale and passes both `page` and `global` into the selected layout.

## Content collections

### `pages`

Use `src/content/pages` for routeable content. Shared fields come from `baseLayoutSchema` in `src/schemas/layouts/base.ts`:

- `name`
- `slug`
- `seo`

Each page type extends the base schema only with fields that belong to that layout:

- `home`: `hero`, `highlights`, `featuredLinks`
- `about`: `intro`, `principles`, `milestones`
- `service`: `summary`, `deliverables`, `process`
- `contact`: `intro`, `methods`, `availability`
- `landing`: `hero`, `proofPoints`, `faq`

### `globals`

Use `src/content/globals` for locale-specific site data. Each global entry validates:

- `locale`
- `siteName`
- `logo`
- `announcement`
- `navigation`
- `cta`
- `tagline`
- `contact`
- `social`
- `footerCta`

Layouts map that flat site data into header, footer, and other block props as needed.

## Add a new page type

1. Add a layout schema in `src/schemas/layouts`.
2. Add the new variant to the discriminated union in `src/schemas/page.ts`.
3. Add or reuse block components in `src/components/blocks` for the page sections.
4. Add a layout component in `src/components/layouts` that composes those blocks.
5. Reuse `src/components/layouts/base.astro` for shared page chrome and metadata.
6. Add at least one example page in `src/content/pages`.
7. Update `cloudcannon.config.yaml` so editors see the real fields.
8. Register the layout in `src/pages/[...page].astro`.

If you skip step 4, the route throws a hard error for the missing layout mapping in `src/pages/[...page].astro`.

## How globals work

- The page route resolves the global entry directly from `Astro.currentLocale`.
- Layouts and blocks receive global data through props.
- Do not fetch or read global content directly inside layout or block components.

## Layout primitives

- Use `Container` for horizontal width and padding consistency.
- Keep page section markup in dedicated block components under `src/components/blocks`.
- Keep layouts thin: they should mostly compose `BaseLayout`, `Container`, and blocks.
- Reach for `astro:assets` directly instead of adding thin image wrapper components.

## Checks

Run these before merging changes:

- `bun run check`
- `bun run build`

Use `bun run dev` during development.

## First customization points

- Replace the placeholder site settings in `astro.config.ts`.
- Update example content in `src/content/`.
- Adjust the shared site data in `src/content/globals`.
- Add or remove page types only after updating both schemas and CloudCannon config.
