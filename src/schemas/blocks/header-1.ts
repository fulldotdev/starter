import { z, type SchemaContext } from "astro:content"

import { linkSchema } from "@/schemas/fields/link"
import { logoSchema } from "@/schemas/fields/logo"
import { menuSchema } from "@/schemas/fields/menu"

export const header1Schema = (ctx: SchemaContext) =>
  z
    .object({
      class: z.string(),
      id: z.string(),
      html: z.string(),
      logo: logoSchema(ctx),
      menus: menuSchema.array(),
      links: linkSchema.array(),
      socials: z.string().array(),
    })
    .partial()
    .strict()

export type Header1Schema = z.infer<ReturnType<typeof header1Schema>>
