import { z, type SchemaContext } from "astro:content"

import { baseLayoutSchema } from "@/schemas/layouts/base"
import { highlightSchema, sectionIntroSchema } from "@/schemas/shared"

export const serviceSchema = (ctx: SchemaContext) =>
  baseLayoutSchema(ctx).extend({
    summary: sectionIntroSchema,
    deliverables: z.array(z.string().min(1)).min(2),
    process: z.array(highlightSchema).min(2),
  })

export type ServiceSchema = z.infer<ReturnType<typeof serviceSchema>>
