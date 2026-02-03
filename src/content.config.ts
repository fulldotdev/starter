import { defineCollection } from "astro:content"
import { glob } from "astro/loaders"

import { articleSchema } from "@/schemas/collections/article"
import { layoutSchema } from "@/schemas/collections/layout"
import { organizationSchema } from "@/schemas/collections/organization"
import { pageSchema } from "@/schemas/collections/page"
import { personSchema } from "@/schemas/collections/person"
import { reviewSchema } from "@/schemas/collections/review"
import { serviceSchema } from "@/schemas/collections/service"
import { settingsSchema } from "@/schemas/collections/settings"

export const collections = {
  layouts: defineCollection({
    loader: glob({
      pattern: "**/[^_]*.{yaml,yml,json}",
      base: "src/content/layouts",
    }),
    schema: layoutSchema,
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
  settings: defineCollection({
    loader: glob({
      pattern: "**/[^_]*.{yaml,yml,json}",
      base: "src/content/settings",
    }),
    schema: settingsSchema,
  }),
  pages: defineCollection({
    loader: glob({
      pattern: "**/[^_]*.{md,mdx}",
      base: "src/content/pages",
    }),
    schema: pageSchema,
  }),
}
