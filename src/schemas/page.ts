import { z, type SchemaContext } from "astro:content"

import { article1Schema } from "@/schemas/blocks/article-1"
import { seoSchema } from "@/schemas/fields/seo"
import { footerSchema } from "@/schemas/footer"
import { headerSchema } from "@/schemas/header"
import { sectionSchema } from "@/schemas/section"

export const pageSchema = (ctx: SchemaContext) =>
  z
    .discriminatedUnion("type", [
      z.object({
        type: z.literal(undefined),
      }),
      article1Schema(ctx).extend({
        type: z.literal("article-1"),
      }),
    ])
    .and(
      z.object({
        headers: headerSchema(ctx).array().optional(),
        sections: sectionSchema(ctx).array().optional(),
        footers: footerSchema(ctx).array().optional(),
        seo: seoSchema(ctx).optional(),
      })
    )

export type PageSchema = z.infer<ReturnType<typeof pageSchema>>
