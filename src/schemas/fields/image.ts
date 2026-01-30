import { z, type SchemaContext } from "astro:content"

export const imageSchema = (ctx: SchemaContext) =>
  z
    .object({
      src: ctx.image(),
      alt: z.string(),
    })
    .partial()
    .strict()

export type ImageSchema = z.infer<ReturnType<typeof imageSchema>>
