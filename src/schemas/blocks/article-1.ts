import { z, type SchemaContext } from "astro:content"

export const article1Schema = (ctx: SchemaContext) =>
  z
    .object({
      class: z.string(),
      id: z.string(),
      title: z.string(),
      description: z.string(),
      html: z.string(),
    })
    .partial()
    .strict()

export type Article1Schema = z.infer<ReturnType<typeof article1Schema>>
