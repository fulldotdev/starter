import { z, type SchemaContext } from "astro:content"

import { baseLayoutSchema } from "@/schemas/layouts/base"
import { contactMethodSchema, sectionIntroSchema } from "@/schemas/shared"

export const contactSchema = (ctx: SchemaContext) =>
  baseLayoutSchema(ctx).extend({
    intro: sectionIntroSchema,
    methods: z.array(contactMethodSchema).min(2),
    availability: z.array(z.string().min(1)).min(2),
  })

export type ContactSchema = z.infer<ReturnType<typeof contactSchema>>
