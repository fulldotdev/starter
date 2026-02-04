import { z, type SchemaContext } from "astro:content"

export const imageSchema = ({ image }: SchemaContext) =>
  z
    .object({
      src: image(), // local relative: ../../assets/image.webp; remote: full URL
      alt: z.string(),
    })
    .partial()
    .strict()
