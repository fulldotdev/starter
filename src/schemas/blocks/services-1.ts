import { z, type SchemaContext } from "astro:content"

import { linkSchema } from "@/schemas/fields/link"

export const services1Schema = (ctx: SchemaContext) =>
  z
    .object({
      class: z.string(),
      id: z.string(),
      html: z.string(),
      links: linkSchema.array(),
    })
    .partial()
    .strict()

export type Services1Schema = z.infer<ReturnType<typeof services1Schema>>
