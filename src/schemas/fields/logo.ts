import { z, type SchemaContext } from "astro:content"

export const logoSchema = ({ image }: SchemaContext) =>
  z
    .object({
      src: image(), // local relative: ../../assets/image.webp; remote: full URL
      alt: z.string(),
      text: z.string(),
      href: z.string(),
    })
    .partial()
    .strict()
