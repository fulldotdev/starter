import { z, type SchemaContext } from "astro:content"

import { linkSchema } from "@/schemas/fields/link"

export const pricings1Schema = (ctx: SchemaContext) =>
  z
    .object({
      class: z.string(),
      id: z.string(),
      html: z.string(),
      items: z
        .object({
          title: z.string(),
          description: z.string(),
          price: z.string(),
          unit: z.string(),
          list: z.string().array(),
          links: linkSchema.array(),
        })
        .partial()
        .strict()
        .array(),
    })
    .partial()
    .strict()

export type Pricings1Schema = z.infer<ReturnType<typeof pricings1Schema>>
