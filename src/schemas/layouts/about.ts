import { z, type SchemaContext } from "astro:content"

import { imageSchema } from "@/schemas/fields/image"
import { logoSchema } from "@/schemas/fields/logo"

export const aboutSchema = (ctx: SchemaContext) =>
  z.object({
    title: z.string(),
    description: z.string(),
    image: imageSchema(ctx),
    logo: logoSchema(ctx),
  })
