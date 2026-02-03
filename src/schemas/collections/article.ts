import { reference, z, type SchemaContext } from "astro:content"

import { blockSchema } from "@/schemas/blocks"
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
      datePublished: z.coerce.date(),
      dateModified: z.coerce.date(),
      // ui
      sections: blockSchema(ctx).array(),
      // seo
      seo: seoSchema(ctx),
    })
    .partial()
    .strict()

export type ArticleSchema = z.infer<ReturnType<typeof articleSchema>>
