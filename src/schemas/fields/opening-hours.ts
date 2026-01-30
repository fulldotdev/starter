import { z } from "astro:content"

export const openingHoursSpecSchema = z
  .object({
    dayOfWeek: z.union([z.string(), z.string().array()]),
    opens: z.string(),
    closes: z.string(),
  })
  .partial()
  .strict()

export type OpeningHoursSpecSchema = z.infer<typeof openingHoursSpecSchema>
