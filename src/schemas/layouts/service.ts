import { z, type SchemaContext } from "astro:content"

export const serviceSchema = ({ image }: SchemaContext) =>
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

export type ServiceSchema = z.infer<ReturnType<typeof serviceSchema>>
