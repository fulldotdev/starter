---
type: about
name: About
seo:
  title: About Fulldev Starter
  description: How Fulldev Starter keeps page data, globals, and editorial configuration aligned.
intro:
  eyebrow: About
  title: Fulldev Starter prefers explicit rules over ambient magic.
  description: The repo stays intentionally small so teams can understand the full content pipeline before they add more collections or bespoke integrations.
principles:
  - Treat schemas as the source of truth for both code and editor configuration.
  - Keep locale handling in the page route and pass content data through props.
  - Prefer small, documented primitives over starter-specific abstractions.
milestones:
  - title: Routing stays predictable
    description: The catch-all route resolves a page entry, loads the correct layout from a typed map, and throws immediately when a type has no layout.
  - title: Globals are validated content
    description: Header, footer, navigation, contact data, and CTA definitions all live in a real schema with sample content for each locale.
---

## Working style

Fulldev Starter is meant for teams that want a clean hand-off between content modeling and layout implementation. A developer should be able to trace any rendered field back to a schema and a content file in a few minutes.
