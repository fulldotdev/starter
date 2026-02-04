import { z, type SchemaContext } from "astro:content"

import { imageSchema } from "@/schemas/fields/image"
import { linkSchema } from "@/schemas/fields/link"

export const hero2Schema = (ctx: SchemaContext) =>
  z
    .object({
      class: z.string(),
      id: z.string(),
      html: z.string(),
      title: z.string(),
      description: z.string(),
      links: linkSchema.array(),
      image: imageSchema(ctx),
    })
    .partial()
    .strict()

export type Hero2Schema = z.infer<ReturnType<typeof hero2Schema>>
