import { z, type SchemaContext } from "astro:content"

import { imageSchema } from "@/schemas/fields/image"

export const personSchema = (ctx: SchemaContext) =>
  z
    .object({
      type: z.literal("Person"),
      name: z.string(),
      description: z.string(),
      jobTitle: z.string(),
      image: imageSchema(ctx),
      email: z.string().email(),
      telephone: z.string(),
      sameAs: z.string().url().array(),
    })
    .partial()
    .strict()

export type PersonSchema = z.infer<ReturnType<typeof personSchema>>
