import { z, type SchemaContext } from "astro:content"

import { imageSchema } from "@/schemas/fields/image"
import { logoSchema } from "@/schemas/fields/logo"

export const baseSchema = (ctx: SchemaContext) =>
  z.object({
    title: z.string(),
    description: z.string(),
    image: imageSchema(ctx),
    logo: logoSchema(ctx),
    url: z.string(),
    date: z.string(),
    author: z.string(),
    tags: z.string().array(),
    categories: z.string().array(),
    published: z.boolean(),
    updated: z.string(),
    created: z.string(),
    publishedAt: z.string(),
    updatedAt: z.string(),
    createdAt: z.string(),
  })
