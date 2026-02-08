import { z, type SchemaContext } from "astro:content"

export const landingSchema = ({ image }: SchemaContext) =>
  z.object({
    slug: z.string().optional(),
    name: z.string(),
    seo: z.object({
      title: z.string(),
      description: z.string(),
      image: z.object({
        src: image(),
        alt: z.string(),
      }).optional(),
    }),
  })

export type LandingSchema = z.infer<ReturnType<typeof landingSchema>>
