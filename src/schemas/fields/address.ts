import { z } from "astro:content"

export const addressSchema = z
  .object({
    streetAddress: z.string(),
    addressLocality: z.string(),
    addressRegion: z.string(),
    postalCode: z.string(),
    addressCountry: z.string(),
  })
  .partial()
  .strict()

export type AddressSchema = z.infer<typeof addressSchema>
