import { z, type SchemaContext } from "astro:content"

import { blockSchema } from "@/schemas/blocks"
import { imageSchema } from "@/schemas/fields/image"
import { seoSchema } from "@/schemas/fields/seo"

export const pageSchema = (ctx: SchemaContext) =>
  z
    .object({
      // schema.org
      type: z
        .enum(["WebPage", "AboutPage", "ContactPage", "FAQPage"])
        .default("WebPage"),
      name: z.string(),
      description: z.string(),
      image: imageSchema(ctx),
      // ui
      sections: blockSchema(ctx).array(),
      // seo
      seo: seoSchema(ctx),
    })
    .partial()
    .strict()

export type PageSchema = z.infer<ReturnType<typeof pageSchema>>
