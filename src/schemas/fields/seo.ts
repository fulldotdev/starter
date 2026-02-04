import { z, type SchemaContext } from "astro:content"

import { imageSchema } from "@/schemas/fields/image"

export const seoSchema = (ctx: SchemaContext) =>
  z
    .object({
      title: z.string(),
      description: z.string(),
      image: imageSchema(ctx),
      noindex: z.boolean(),
      nofollow: z.boolean(),
      canonical: z.string(),
    })
    .partial()
    .strict()
