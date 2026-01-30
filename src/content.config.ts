import { defineCollection } from "astro:content"
import { glob } from "astro/loaders"

import { page } from "@/lib/schemas"
import { articleSchema } from "@/schemas/collections/article"
import { organizationSchema } from "@/schemas/collections/organization"
import { personSchema } from "@/schemas/collections/person"
import { reviewSchema } from "@/schemas/collections/review"
import { serviceSchema } from "@/schemas/collections/service"
import { webPageSchema } from "@/schemas/collections/page"
import { webSiteSchema } from "@/schemas/collections/website"

export const collections = {
  website: defineCollection({
    loader: glob({
      pattern: "**/[^_]*.{yaml,yml,json}",
      base: "src/content/website",
    }),
    schema: webSiteSchema,
  }),
  organizations: defineCollection({
    loader: glob({
      pattern: "**/[^_]*.{yaml,yml,json}",
      base: "src/content/organizations",
    }),
    schema: organizationSchema,
  }),
  persons: defineCollection({
    loader: glob({
      pattern: "**/[^_]*.{yaml,yml,json}",
      base: "src/content/persons",
    }),
    schema: personSchema,
  }),
  services: defineCollection({
    loader: glob({
      pattern: "**/[^_]*.{yaml,yml,json}",
      base: "src/content/services",
    }),
    schema: serviceSchema,
  }),
  articles: defineCollection({
    loader: glob({
      pattern: "**/[^_]*.{md,mdx}",
      base: "src/content/articles",
    }),
    schema: articleSchema,
  }),
  reviews: defineCollection({
    loader: glob({
      pattern: "**/[^_]*.{yaml,yml,json}",
      base: "src/content/reviews",
    }),
    schema: reviewSchema,
  }),
  policies: defineCollection({
    loader: glob({
      pattern: "**/[^_]*.{md,mdx}",
      base: "src/content/policies",
    }),
    schema: webPageSchema,
  }),
  pages: defineCollection({
    loader: glob({
      pattern: "**/[^_]*.{md,mdx}",
      base: "src/content/pages",
    }),
    schema: page,
  }),
  layouts: defineCollection({
    loader: glob({
      pattern: "**/[^_]*.{yaml,yml,json}",
      base: "src/content/layouts",
    }),
    schema: page,
  }),
}
