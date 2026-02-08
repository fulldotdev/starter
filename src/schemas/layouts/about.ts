import { z, type SchemaContext } from "astro:content"

export const aboutSchema = ({ image }: SchemaContext) =>
  z.object({
    title: z.string(),
    description: z.string(),
    story: z.object({
      title: z.string(),
      description: z.string(),
      content: z.string(),
      image: z
        .object({
          src: image(),
          alt: z.string(),
        })
        .optional(),
    }),
    values: z.object({
      title: z.string(),
      description: z.string(),
      items: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
          icon: z.string().optional(),
        })
      ),
    }),
    team: z.object({
      title: z.string(),
      description: z.string(),
      members: z.array(
        z.object({
          name: z.string(),
          role: z.string(),
          description: z.string(),
          image: z
            .object({
              src: image(),
              alt: z.string(),
            })
            .optional(),
          socials: z
            .array(
              z.object({
                text: z.string(),
                href: z.string(),
                icon: z.string().optional(),
              })
            )
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

export type AboutSchema = z.infer<ReturnType<typeof aboutSchema>>
