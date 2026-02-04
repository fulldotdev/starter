import { z, type SchemaContext } from "astro:content"

import { footer1Schema } from "@/schemas/blocks/footer-1"

export const footerSchema = (ctx: SchemaContext) =>
  z.discriminatedUnion("type", [
    footer1Schema(ctx).extend({
      type: z.literal("footer-1"),
    }),
  ])
