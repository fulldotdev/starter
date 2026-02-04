import { defineCollection, z } from "astro:content"
import { glob } from "astro/loaders"

import { layoutEntrySchema } from "@/schemas/collections/layout"
import { pageEntrySchema } from "@/schemas/collections/page"

export const collections = {
  pages: defineCollection({
    loader: glob({
      pattern: "**/[^_]*.{md,mdx}",
      base: "src/content/pages",
    }),
    schema: pageEntrySchema,
  }),
  layouts: defineCollection({
    loader: glob({
      pattern: "**/[^_]*.{yaml,yml,json}",
      base: "src/content/layouts",
    }),
    schema: layoutEntrySchema,
  }),
  i18n: defineCollection({
    loader: glob({
      pattern: "**/[^_]*.{yaml,yml,json}",
      base: "src/content/i18n",
    }),
    schema: z.object({}).passthrough(),
  }),
}
