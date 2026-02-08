import { z, type SchemaContext } from "astro:content"

export const homeSchema = ({ image }: SchemaContext) =>
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
    features: z.object({
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
    testimonials: z.object({
      title: z.string(),
      description: z.string(),
      items: z.array(
        z.object({
          quote: z.string(),
          author: z.string(),
          role: z.string().optional(),
          company: z.string().optional(),
          avatar: z
            .object({
              src: image(),
              alt: z.string(),
            })
            .optional(),
          rating: z.number().min(0).max(5).optional(),
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

export type HomeSchema = z.infer<ReturnType<typeof homeSchema>>
