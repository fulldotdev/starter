import { z, type SchemaContext } from "astro:content"

import { aboutSchema } from "@/schemas/layouts/about"

export const entrySchema = (ctx: SchemaContext) =>
  z.discriminatedUnion("type", [
    aboutSchema(ctx)
      .extend({
        type: z.literal("base"),
      })
      .and(
        z.object({
          headers: headerSchema(ctx).array().optional(),
          sections: sectionSchema(ctx).array().optional(),
          footers: footerSchema(ctx).array().optional(),
          seo: seoSchema(ctx).optional(),
        })
      ),
  ])

export type EntrySchema = z.infer<ReturnType<typeof entrySchema>>
