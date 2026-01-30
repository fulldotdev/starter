import { z, type SchemaContext } from "astro:content"

import { imageSchema } from "@/schemas/fields/image"

export const webPageSchema = (ctx: SchemaContext) =>
  z
    .object({
      type: z.enum(["WebPage", "AboutPage", "ContactPage", "FAQPage"]),
      name: z.string(),
      description: z.string(),
      image: imageSchema(ctx),
    })
    .partial()
    .strict()

export type WebPageSchema = z.infer<ReturnType<typeof webPageSchema>>
