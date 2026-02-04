import { z, type SchemaContext } from "astro:content"

import { formSchema } from "@/schemas/fields/form"

export const contact2Schema = (ctx: SchemaContext) =>
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
          href: z.string(),
        })
        .partial()
        .strict()
        .array(),
      form: formSchema,
    })
    .partial()
    .strict()

export type Contact2Schema = z.infer<ReturnType<typeof contact2Schema>>
