import type { SchemaContext } from "astro:content"
import { z } from "astro:content"

import {
  footerBlockSchema,
  headerBlockSchema,
  sectionBlockSchema,
} from "@/schemas/blocks/blocks"
import { imageSchema } from "@/schemas/fields/image"

const layoutEntrySchema = (ctx: SchemaContext) =>
  z
    .object({
      title: z.string(),
      description: z.string(),
      image: imageSchema(ctx),
      headers: headerBlockSchema(ctx).array(),
      sections: sectionBlockSchema(ctx).array(),
      footers: footerBlockSchema(ctx).array(),
      head: z.string(),
      body: z.string(),
    })
    .partial()
    .strict()

export { layoutEntrySchema }
