import { z, type SchemaContext } from "astro:content"

import { imageSchema } from "@/schemas/fields/image"

export const contactSchema = (ctx: SchemaContext) =>
  z.object({
    title: z.string(),
    description: z.string(),
    image: imageSchema(ctx),
  })
