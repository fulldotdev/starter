import type { SchemaContext } from "astro:content"
import { z } from "astro:content"

import { createBlockSchema } from "@/schemas/blocks/block"
import {
  allBlockNames,
  footerBlockNames,
  headerBlockNames,
  sectionBlockNames,
} from "@/schemas/blocks/registry"

const createBlockUnion = (ctx: SchemaContext, names: string[]) => {
  const schemas = names.map((name) => createBlockSchema(ctx, name))
  return z.discriminatedUnion(
    "block",
    schemas as [z.ZodTypeAny, ...z.ZodTypeAny[]]
  )
}

const headerBlockSchema = (ctx: SchemaContext) =>
  createBlockUnion(ctx, headerBlockNames)

const footerBlockSchema = (ctx: SchemaContext) =>
  createBlockUnion(ctx, footerBlockNames)

const sectionBlockSchema = (ctx: SchemaContext) =>
  createBlockUnion(ctx, sectionBlockNames)

const blockSchema = (ctx: SchemaContext) => createBlockUnion(ctx, allBlockNames)

export {
  blockSchema,
  footerBlockSchema,
  headerBlockSchema,
  sectionBlockSchema,
}

export type BlockSchema = z.infer<ReturnType<typeof blockSchema>>
