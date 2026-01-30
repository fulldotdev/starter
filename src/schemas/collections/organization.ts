import { z, type SchemaContext } from "astro:content"

import { addressSchema } from "@/schemas/fields/address"
import { imageSchema } from "@/schemas/fields/image"
import { openingHoursSpecSchema } from "@/schemas/fields/opening-hours"
import { seoSchema } from "@/schemas/fields/seo"

export const organizationSchema = (ctx: SchemaContext) =>
  z
    .object({
      // schema.org
      type: z.literal("Organization"),
      name: z.string(),
      description: z.string(),
      logo: imageSchema(ctx),
      image: imageSchema(ctx),
      telephone: z.string(),
      email: z.string().email(),
      address: addressSchema,
      openingHours: openingHoursSpecSchema.array(),
      sameAs: z.string().url().array(),
      // seo
      seo: seoSchema(ctx),
    })
    .partial()
    .strict()

export type OrganizationSchema = z.infer<ReturnType<typeof organizationSchema>>
