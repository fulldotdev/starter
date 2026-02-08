import { defineCollection } from "astro:content"
import { glob } from "astro/loaders"

import { globalSchema } from "@/schemas/global"
import { pageSchema } from "@/schemas/page"

export const collections = {
  // Pages that are rendered as routes
  pages: defineCollection({
    loader: glob({
      pattern: "**/[^_]*.{md,mdx}",
      base: "src/content/pages",
    }),
    schema: pageSchema,
  }),
  // Localized global data available on all routes
  globals: defineCollection({
    loader: glob({
      pattern: "**/[^_]*.{yaml,yml,json}",
      base: "src/content/globals",
    }),
    schema: globalSchema,
  }),
}
