import { reference, z, type SchemaContext } from "astro:content"

import { imageSchema } from "@/schemas/fields/image"
import { seoSchema } from "@/schemas/fields/seo"

export const articleSchema = (ctx: SchemaContext) =>
  z
    .object({
      // schema.org
      type: z.enum(["Article", "BlogPosting", "NewsArticle"]),
      headline: z.string(),
      description: z.string(),
      image: imageSchema(ctx),
      author: z
        .union([reference("persons"), reference("organizations")])
        .array(),
      datePublished: z.string().datetime(),
      dateModified: z.string().datetime(),
      // seo
      seo: seoSchema(ctx),
    })
    .partial()
    .strict()

export type ArticleSchema = z.infer<ReturnType<typeof articleSchema>>
