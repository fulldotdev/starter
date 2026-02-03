import { z, type SchemaContext } from "astro:content"

import { cta1Schema } from "@/schemas/blocks/cta-1"
import { hero1Schema } from "@/schemas/blocks/hero-1"

export const blockSchema = (ctx: SchemaContext) =>
  z.discriminatedUnion("type", [
    cta1Schema(ctx).extend({ type: z.literal("cta-1") }),
    hero1Schema(ctx).extend({ type: z.literal("hero-1") }),
  ])

export type BlockSchema = z.infer<ReturnType<typeof blockSchema>>
