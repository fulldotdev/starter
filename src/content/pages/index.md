---
seo:
  title: Fulldev-starter | Astro Starter Template
  description: Supercharging content-driven website development with Fulldev-starter, an Astro starter template. Easily use blocks from fulldev-ui to build pages and content-driven websites.

sections:
  hero:
    _bookshop_name: Hero # You can use any name for the section as long as the block exist on 'https://ui.full.dev/blocks' or in 'src/blocks/'
    badge: Website generated with `pnpm create astro@latest --template fulldotdev/starter`
    heading: Supercharging content-driven website development
    text: Start by editing `src/content/pages/index.md` or check out one of the other files that make usage of records to easily build anything content-related.
    buttons:
      - text: Get Started
        href: 'https://github.com/fulldotdev/starter/blob/main/README.md'
      - text: UI/Blocks Library
        href: 'https://ui.full.dev/blocks'
    align: start
    frame: panel
    structure: grid
    cards:
      - icon: layout-grid
        heading: Blocks
        text: Reusable block components for building pages using our fulldev-ui, easily overwritable.
        href: 'https://ui.full.dev/blocks'
      - icon: files
        heading: Content
        text: Stores content-related files for pages, records, and settings
      - icon: layout
        heading: Layouts
        text: "Layout components used to structure pages that can be easily used in the content files"
      - icon: world
        heading: i18n
        text: Internationalization support for multiple languages out of the box
      - icon: brush
        heading: Theming
        text: Customizable theming using our fulldev-ui Astro integration
      - icon: file-type-css
        heading: Customizable
        text: Want custom styles? Add them to the global CSS files

  cta:
    _bookshop_name: Cta
    heading: Ready to get started?
    text: Start by editing `src/content/pages/index.md` or check out one of the other files that make usage of records to easily build anything content-related.
    color: brand
    buttons:
      - text: Read Guide
        href: 'https://github.com/fulldotdev/starter/blob/main/README.md'
---