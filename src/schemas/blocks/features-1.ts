import { z, type SchemaContext } from "astro:content"

export const features1Schema = (ctx: SchemaContext) =>
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
    })
    .partial()
    .strict()

export type Features1Schema = z.infer<ReturnType<typeof features1Schema>>
