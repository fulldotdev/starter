import { z, type SchemaContext } from "astro:content"

import { linkSchema } from "@/schemas/fields/link"
import { logoSchema } from "@/schemas/fields/logo"
import { menuSchema } from "@/schemas/fields/menu"

export const footer1Schema = (ctx: SchemaContext) =>
  z
    .object({
      class: z.string(),
      id: z.string(),
      html: z.string(),
      logo: logoSchema(ctx),
      description: z.string(),
      menus: menuSchema.array(),
      links: linkSchema.array(),
      socials: z.string().array(),
      copyright: z.string(),
      policies: linkSchema.array(),
    })
    .partial()
    .strict()

export type Footer1Schema = z.infer<ReturnType<typeof footer1Schema>>
