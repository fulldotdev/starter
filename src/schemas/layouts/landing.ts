import { z, type SchemaContext } from "astro:content"

import { baseLayoutSchema } from "@/schemas/layouts/base"
import { heroSchema, highlightSchema } from "@/schemas/shared"

export const landingSchema = (ctx: SchemaContext) =>
  baseLayoutSchema(ctx).extend({
    hero: heroSchema(ctx),
    proofPoints: z.array(z.string().min(1)).min(3),
    faq: z.array(highlightSchema).min(2),
  })

export type LandingSchema = z.infer<ReturnType<typeof landingSchema>>
