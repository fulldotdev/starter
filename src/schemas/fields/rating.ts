import { z } from "astro:content"

export const aggregateRatingSchema = z
  .object({
    ratingValue: z.number().min(0).max(5),
    reviewCount: z.number().int().min(0),
  })
  .partial()
  .strict()

export type AggregateRatingSchema = z.infer<typeof aggregateRatingSchema>
