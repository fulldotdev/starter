import { z, type SchemaContext } from "astro:content"

import { baseLayoutSchema } from "@/schemas/layouts/base"
import { highlightSchema, sectionIntroSchema } from "@/schemas/shared"

export const aboutSchema = (ctx: SchemaContext) =>
  baseLayoutSchema(ctx).extend({
    intro: sectionIntroSchema,
    principles: z.array(z.string().min(1)).min(2),
    milestones: z.array(highlightSchema).min(2),
  })

export type AboutSchema = z.infer<ReturnType<typeof aboutSchema>>
