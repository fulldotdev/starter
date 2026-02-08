import { z, type SchemaContext } from "astro:content"

export const globalSchema = ({}: SchemaContext) =>
  z.object({
    header: z.object({
      // Write the header schema here
    }),
    footer: z.object({
      // Write the footer schema here
    }),
  })

export type GlobalSchema = z.infer<ReturnType<typeof globalSchema>>
