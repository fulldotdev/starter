import { z, type SchemaContext } from "astro:content"

import { header1Schema } from "@/schemas/blocks/header-1"

export const headerSchema = (ctx: SchemaContext) =>
  z.discriminatedUnion("type", [
    header1Schema(ctx).extend({
      type: z.literal("header-1"),
    }),
  ])
