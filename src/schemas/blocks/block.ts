import type { SchemaContext } from "astro:content"
import { z } from "astro:content"

import { formSchema } from "@/schemas/fields/form"
import { menuSchema } from "@/schemas/fields/menu"
import { itemSchema } from "@/schemas/blocks/item"

const refSchema = z.string() // path: "/src/content/pages/services/my-service.md"
const globSchema = z.string() // page folder: "services/"

const baseBlockSchema = (ctx: SchemaContext) =>
  itemSchema(ctx)
    .extend({
      id: z.string(),
      class: z.string(),
      menus: menuSchema.array(),
      form: formSchema,
      item: itemSchema(ctx),
      ref: refSchema,
      items: itemSchema(ctx)
        .extend({
          item: itemSchema(ctx),
          ref: refSchema,
          items: itemSchema(ctx).array(),
          refs: refSchema.array(),
          glob: globSchema,
        })
        .partial()
        .strict()
        .array(),
      refs: refSchema.array(),
      glob: globSchema,
    })
    .partial()
    .strict()

const createBlockSchema = (ctx: SchemaContext, blockName: string) =>
  baseBlockSchema(ctx)
    .extend({
      block: z.literal(blockName),
    })
    .strict()

export { baseBlockSchema, createBlockSchema }
