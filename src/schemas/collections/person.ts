import { z, type SchemaContext } from "astro:content"

import { imageSchema } from "@/schemas/fields/image"
import { seoSchema } from "@/schemas/fields/seo"

export const personSchema = (ctx: SchemaContext) =>
  z
    .object({
      // schema.org
      type: z.literal("Person"),
      name: z.string(),
      description: z.string(),
      jobTitle: z.string(),
      image: imageSchema(ctx),
      email: z.string().email(),
      telephone: z.string(),
      sameAs: z.string().url().array(),
      // seo
      seo: seoSchema(ctx),
    })
    .partial()
    .strict()

export type PersonSchema = z.infer<ReturnType<typeof personSchema>>
