import { z, type SchemaContext } from "astro:content"

import { imageSchema } from "@/schemas/fields/image"
import { linkSchema } from "@/schemas/fields/link"

export const cta1Schema = (ctx: SchemaContext) =>
  z
    .object({
      class: z.string(),
      id: z.string(),
      links: linkSchema.array(),
      item: z
        .object({
          images: imageSchema(ctx).array(),
          rating: z.number().min(0).max(5),
          description: z.string(),
        })
        .partial()
        .strict(),
    })
    .partial()
    .strict()

export type Cta1Schema = z.infer<ReturnType<typeof cta1Schema>>
