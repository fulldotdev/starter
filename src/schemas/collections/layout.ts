import { z, type SchemaContext } from "astro:content"

import { blockSchema } from "@/schemas/blocks"

export const layoutSchema = (ctx: SchemaContext) =>
  z
    .object({
      // ui
      headers: blockSchema(ctx).array(),
      sections: blockSchema(ctx).array(),
      footers: blockSchema(ctx).array(),
    })
    .partial()
    .strict()

export type LayoutSchema = z.infer<ReturnType<typeof layoutSchema>>
