import { reference, z, type SchemaContext } from "astro:content"

import { imageSchema } from "@/schemas/fields/image"

export const serviceSchema = (ctx: SchemaContext) =>
  z
    .object({
      type: z.literal("Service"),
      name: z.string(),
      description: z.string(),
      provider: z
        .union([reference("organizations"), reference("persons")])
        .array(),
      image: imageSchema(ctx),
    })
    .partial()
    .strict()

export type ServiceSchema = z.infer<ReturnType<typeof serviceSchema>>
