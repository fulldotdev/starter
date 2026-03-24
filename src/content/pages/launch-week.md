---
type: landing
name: Launch Week
seo:
  title: Launch Week landing page
  description: Example focused landing page without shared site chrome.
hero:
  eyebrow: Landing
  title: Use a focused layout when the page should drop the global navigation.
  description: The landing layout exists for campaign-style pages where the content benefits from a tighter, distraction-free frame.
  primaryCta:
    label: Start from this layout
    href: /contact
    variant: default
  secondaryCta:
    label: Compare with the home page
    href: /
    variant: outline
proofPoints:
  - The page type keeps a dedicated schema instead of overloading the shared home layout.
  - Editors still work with the same collections and validation pipeline as the rest of the site.
  - The body content can stay in Markdown even when the layout is visually minimal.
faq:
  - title: Why no header or footer?
    description: Campaign-style pages often perform better when the primary action has fewer competing navigation paths.
  - title: Can this layout use globals later?
    description: Yes. The layout already receives the validated global object, but it is free to render only the parts that support the page goal.
---

## Focused by design

Not every page should inherit the same structure. The important part is that the rule is explicit, typed, and documented rather than being a side effect of ambient data access.
