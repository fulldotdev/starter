import { z } from "astro:content"

import { linkSchema } from "@/schemas/fields/link"

export const menuSchema = z
  .object({
    text: z.string(),
    href: z.string(),
    target: z.string(),
    links: linkSchema.array(),
  })
  .partial()
  .strict()
