import { z, type SchemaContext } from "astro:content"

import { linkSchema } from "@/schemas/fields/link"

export const cta3Schema = (ctx: SchemaContext) =>
  z
    .object({
      class: z.string(),
      id: z.string(),
      html: z.string(),
      links: linkSchema.array(),
    })
    .partial()
    .strict()

export type Cta3Schema = z.infer<ReturnType<typeof cta3Schema>>
