import { z, type SchemaContext } from "astro:content"

import { imageSchema } from "@/schemas/fields/image"
import { seoSchema } from "@/schemas/fields/seo"

export const webPageSchema = (ctx: SchemaContext) =>
  z
    .object({
      // schema.org
      type: z.enum(["WebPage", "AboutPage", "ContactPage", "FAQPage"]),
      name: z.string(),
      description: z.string(),
      image: imageSchema(ctx),
      // seo
      seo: seoSchema(ctx),
    })
    .partial()
    .strict()

export type WebPageSchema = z.infer<ReturnType<typeof webPageSchema>>
