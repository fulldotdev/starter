import { reference, z, type SchemaContext } from "astro:content"

import { imageSchema } from "@/schemas/fields/image"

export const articleSchema = (ctx: SchemaContext) =>
  z
    .object({
      type: z.enum(["Article", "BlogPosting", "NewsArticle"]),
      headline: z.string(),
      description: z.string(),
      image: imageSchema(ctx),
      author: z
        .union([reference("persons"), reference("organizations")])
        .array(),
      datePublished: z.string().datetime(),
      dateModified: z.string().datetime(),
    })
    .partial()
    .strict()

export type ArticleSchema = z.infer<ReturnType<typeof articleSchema>>
