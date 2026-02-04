import { z, type SchemaContext } from "astro:content"

import { imageSchema } from "@/schemas/fields/image"
import { linkSchema } from "@/schemas/fields/link"

export const hero1Schema = (ctx: SchemaContext) =>
  z
    .object({
      class: z.string(),
      id: z.string(),
      html: z.string(),
      links: linkSchema.array(),
      images: imageSchema(ctx).array(),
    })
    .partial()
    .strict()

export type Hero1Schema = z.infer<ReturnType<typeof hero1Schema>>
