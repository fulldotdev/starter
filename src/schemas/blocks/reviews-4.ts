import { z, type SchemaContext } from "astro:content"

import { linkSchema } from "@/schemas/fields/link"

export const reviews4Schema = (ctx: SchemaContext) =>
  z
    .object({
      class: z.string(),
      id: z.string(),
      html: z.string(),
      items: z
        .object({
          icon: z.string(),
          title: z.string(),
          description: z.string(),
        })
        .partial()
        .strict()
        .array(),
      links: linkSchema.array(),
    })
    .partial()
    .strict()

export type Reviews4Schema = z.infer<ReturnType<typeof reviews4Schema>>
