import type { SchemaContext } from "astro:content"
import { z } from "astro:content"

import { sectionBlockSchema } from "@/schemas/blocks/blocks"
import { imageSchema } from "@/schemas/fields/image"
import { seoSchema } from "@/schemas/fields/seo"

const serviceEntrySchema = (ctx: SchemaContext) =>
  z
    .object({
      title: z.string(),
      description: z.string(),
      summary: z.string(),
      image: imageSchema(ctx),
      sections: sectionBlockSchema(ctx).array(),
      seo: seoSchema(ctx),
    })
    .partial()
    .strict()

export { serviceEntrySchema }
