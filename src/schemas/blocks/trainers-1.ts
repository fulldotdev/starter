import { z, type SchemaContext } from "astro:content"

import { linkSchema } from "@/schemas/fields/link"

export const trainers1Schema = (ctx: SchemaContext) =>
  z
    .object({
      class: z.string(),
      id: z.string(),
      html: z.string(),
      links: linkSchema.array(),
    })
    .partial()
    .strict()

export type Trainers1Schema = z.infer<ReturnType<typeof trainers1Schema>>
