import { z, type SchemaContext } from "astro:content"

import { baseLayoutSchema } from "@/schemas/layouts/base"
import { ctaPanelSchema, heroSchema, highlightSchema } from "@/schemas/shared"

export const homeSchema = (ctx: SchemaContext) =>
  baseLayoutSchema(ctx).extend({
    hero: heroSchema(ctx),
    features: z.array(highlightSchema).min(3),
    ctaPanel: ctaPanelSchema,
  })

export type HomeSchema = z.infer<ReturnType<typeof homeSchema>>
