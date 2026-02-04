import { z, type SchemaContext } from "astro:content"

import { imageSchema } from "@/schemas/fields/image"
import { linkSchema } from "@/schemas/fields/link"

export const content1Schema = (ctx: SchemaContext) =>
  z
    .object({
      class: z.string(),
      id: z.string(),
      html: z.string(),
      list: z.string().array(),
      links: linkSchema.array(),
      image: imageSchema(ctx),
    })
    .partial()
    .strict()

export type Content1Schema = z.infer<ReturnType<typeof content1Schema>>
