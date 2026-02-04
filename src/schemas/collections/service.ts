import type { SchemaContext } from "astro:content"
import { z } from "astro:content"

import { sectionBlockSchema } from "@/schemas/blocks/blocks"
import { seoSchema } from "@/schemas/fields/seo"

const serviceEntrySchema = (ctx: SchemaContext) =>
  z
    .object({
      type: z.literal("service"),
      serviceSummary: z.string(),
      sections: sectionBlockSchema(ctx).array().optional(),
      seo: seoSchema(ctx).optional(),
    })
    .strict()

export { serviceEntrySchema }
