import { reference, z } from "astro:content"

export const webSiteSchema = z
  .object({
    type: z.literal("WebSite"),
    name: z.string(),
    description: z.string(),
    publisher: z.union([reference("organizations"), reference("persons")]),
  })
  .partial()
  .strict()

export type WebSiteSchema = z.infer<typeof webSiteSchema>
