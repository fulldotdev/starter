import { z } from "astro:content"

export const linkSchema = z
  .object({
    text: z.string(),
    href: z.string(), // internal: trailing slash; external: full URL
    icon: z.string(),
    target: z.string(), // _blank for external
  })
  .partial()
  .strict()
