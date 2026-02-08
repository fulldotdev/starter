import { z, type SchemaContext } from "astro:content"

export const serviceSchema = ({ image }: SchemaContext) =>
  z.object({
    title: z.string(),
    description: z.string(),
    hero: z.object({
      title: z.string(),
      description: z.string(),
      links: z.array(
        z.object({
          text: z.string(),
          href: z.string(),
          icon: z.string().optional(),
        })
      ),
      image: z
        .object({
          src: image(),
          alt: z.string(),
        })
        .optional(),
    }),
    benefits: z.object({
      title: z.string(),
      description: z.string(),
      items: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
          icon: z.string().optional(),
          image: z
            .object({
              src: image(),
              alt: z.string(),
            })
            .optional(),
        })
      ),
    }),
    process: z.object({
      title: z.string(),
      description: z.string(),
      items: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
          icon: z.string().optional(),
          image: z
            .object({
              src: image(),
              alt: z.string(),
            })
            .optional(),
        })
      ),
    }),
    cta: z.object({
      title: z.string(),
      description: z.string(),
      links: z.array(
        z.object({
          text: z.string(),
          href: z.string(),
          icon: z.string().optional(),
        })
      ),
    }),
  })

export type ServiceSchema = z.infer<ReturnType<typeof serviceSchema>>
