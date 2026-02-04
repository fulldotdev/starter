import type { SchemaContext } from "astro:content"
import { z } from "astro:content"

import { sectionBlockSchema } from "@/schemas/blocks/blocks"
import { seoSchema } from "@/schemas/fields/seo"
import { serviceEntrySchema } from "./service"

const pageSchema = (ctx: SchemaContext) =>
  z
    .object({
      sections: sectionBlockSchema(ctx).array(),
      seo: seoSchema(ctx),
    })
    .partial()
    .strict()

const pageEntrySchema = (ctx: SchemaContext) =>
  z.union([pageSchema(ctx), serviceEntrySchema(ctx)])

export { pageEntrySchema, pageSchema }

export type PageSchema = z.infer<ReturnType<typeof pageEntrySchema>>
