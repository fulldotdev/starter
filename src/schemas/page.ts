import { z, type SchemaContext } from "astro:content"

import { aboutSchema } from "@/schemas/layouts/about"
import { contactSchema } from "@/schemas/layouts/contact"
import { homeSchema } from "@/schemas/layouts/home"
import { serviceSchema } from "@/schemas/layouts/service"

// Discriminated union of all page types.
// Each page schema defines the full content for that page type.
export const pageSchema = (ctx: SchemaContext) =>
  z.discriminatedUnion("type", [
    homeSchema(ctx).extend({ type: z.literal("home") }),
    serviceSchema(ctx).extend({ type: z.literal("service") }),
    aboutSchema(ctx).extend({ type: z.literal("about") }),
    contactSchema(ctx).extend({ type: z.literal("contact") }),
  ])

export type PageSchema = z.infer<ReturnType<typeof pageSchema>>
