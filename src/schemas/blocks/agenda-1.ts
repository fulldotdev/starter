import { z, type SchemaContext } from "astro:content"

export const agenda1Schema = (ctx: SchemaContext) =>
  z
    .object({
      class: z.string(),
      id: z.string(),
      html: z.string(),
      embedUrl: z.string(),
    })
    .partial()
    .strict()

export type Agenda1Schema = z.infer<ReturnType<typeof agenda1Schema>>
