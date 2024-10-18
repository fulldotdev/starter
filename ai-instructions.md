# Instructions for Creating Pages Using Full.dev UI blocks

Do not use/create custom styling, blocks or components unless specifically asked for.

## Page Structure

- Pages are created as Markdown files in the `src/content/pages/` directory.
- Each page can use a combination of frontmatter and Markdown content.

## Frontmatter

- Use YAML frontmatter at the top of each Markdown file to define page metadata and sections.
- Common frontmatter fields include:
  - `title`: Page title
  - `description`: Page description (used for SEO)
  - `seo`: Object for SEO-specific metadata
  - `sections`: Object containing block definitions

## Blocks

- Blocks are defined in the `sections` frontmatter.
- Each block is identified by a unique key (e.g., `hero`, `cta`, `posts`).
- The `component` property specifies the block type from Full.dev UI Blocks.
- Additional properties configure the block's content and appearance.

## Block Types

- Use blocks from [Full.dev UI](https://ui.full.dev/blocks) or custom blocks in `src/blocks/`.
- Common block types include:
  - Hero
  - Content
  - Cta (Call to Action)
  - Features
  - Intro
  - Posts
  - Prices
  - Products
  - Reviews
  - Contact
  - Banner

## Content Collections

- Use content collections for blog posts, products, and other repeatable content types.
- Store collection items in appropriate subdirectories (e.g., `src/content/pages/blog/` for blog posts).

## Records

- Use records for reusable content pieces like reviews.
- Store records in `src/content/records/` directory, organized by type.

## Layouts

- Specify custom layouts using the `component` frontmatter property (e.g., `component: ProductLayout`).

## Internationalization (i18n)

- Create language-specific folders in `src/content/` (e.g., `en`, `es`, `fr`).
- Translate content and create language-specific versions of `base.yml`.

## Global Configuration

- Use `src/content/settings/base.yml` for global website configuration.
- Define header and footer content, navigation links, and other site-wide elements.

## Theming

- Configure theme colors in `astro.config.ts` using the fulldev integration.
- Customize CSS by modifying `/src/css/custom.css`.

## Special Pages

- Create a `404.md` page for custom "Not Found" errors.

---

## Example Page Structure

```markdown
---Begin example page structure:---

---
seo:
  title: Meta Title
  description: Meta Description
  image: /path/to/image.jpg # og:image

title: Page Title
description: Page description for SEO
sections:
  - component: Hero
    heading: Main Heading
    text: Subtext or description
    buttons:
      - text: Button Text
        href: /link

  - component: LocalBlock
    # Additional block-specific properties
---

# Optional Markdown content

Regular page content goes here, if needed.
```

---end of example---

Remember to refer to the Full.dev UI Blocks documentation [blocks](https://ui.full.dev/blocks) for specific block properties and options. Customize the appearance using the theming options in astro.config.ts and additional CSS in custom.css as needed
