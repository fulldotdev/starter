import { reference, z, type SchemaContext } from "astro:content"

import { imageSchema } from "@/schemas/fields/image"

export const reviewSchema = (ctx: SchemaContext) =>
  z
    .object({
      type: z.literal("Review"),
      name: z.string(),
      reviewBody: z.string(),
      rating: z.number().min(0).max(5),
      author: z
        .object({
          name: z.string(),
          description: z.string(),
          image: imageSchema(ctx),
        })
        .partial()
        .strict(),
      itemReviewed: z.union([
        reference("services"),
        reference("organizations"),
      ]),
      datePublished: z.string().datetime(),
    })
    .partial()
    .strict()

export type ReviewSchema = z.infer<ReturnType<typeof reviewSchema>>
