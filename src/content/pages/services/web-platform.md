---
type: service
name: Web Platform
slug: services/web-platform
seo:
  title: Web platform service
  description: Example service page that shows how a typed service layout is modeled.
summary:
  eyebrow: Service
  title: Turn a content model into a maintainable production website.
  description: Use the service layout when you need a clearer structure than a generic Markdown page, but still want the data shape to remain obvious in content files.
deliverables:
  - Route and layout wiring for a new page type.
  - Typed frontmatter for repeatable service content.
  - Matching editor inputs in CloudCannon.
process:
  - title: Model
    description: Add the fields in `src/schemas/` before changing layout markup or editor config.
  - title: Render
    description: Update the matching layout so the new fields are visible and the page body still renders as Markdown.
---

## When to create a new page type

Create a new type when content keeps repeating with the same structure across multiple pages. If the content is a one-off, prefer keeping it in Markdown body content instead of expanding the starter unnecessarily.
