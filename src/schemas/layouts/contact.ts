import { z, type SchemaContext } from "astro:content"

export const contactSchema = ({}: SchemaContext) =>
  z.object({
    title: z.string(),
    description: z.string(),
    info: z.object({
      title: z.string(),
      items: z.array(
        z.object({
          label: z.string(),
          value: z.string(),
          icon: z.string().optional(),
          href: z.string().optional(),
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

export type ContactSchema = z.infer<ReturnType<typeof contactSchema>>
