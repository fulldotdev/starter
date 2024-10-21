---

seo:
  title: Fulldev-starter | Astro Starter Template
  description: Supercharging content-driven website development with Fulldev-starter, an Astro starter template. Easily use blocks from fulldev-ui to build pages and content-driven websites.

title: Home

sections:
  - component: Hero
    badge:
      text: pnpm create astro@latest --template fulldotdev/starter
    heading: A starter to build entire website with fulldev-ui
    text: Start by editing `src/content/pages/index.md` or check out one of the other files that make usage of records to easily build anything content-related.
    buttons:
      - text: Get started
        href: 'https://github.com/fulldotdev/starter/blob/main/README.md'
    cards:
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

  - component: Content
    heading: What is Fulldev-starter?
    text: Fulldev-starter is an Astro starter template that supercharges content-driven website development. It allows you to easily use blocks from fulldev-ui to build pages and content-driven websites.
    image:  placeholder.webp
---