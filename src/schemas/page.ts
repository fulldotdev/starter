import { z } from 'astro:content'

export const pageSchema = z
  .object({
    head: z
      .object({
        title: z.string(),
        description: z.string(),
        image: z.string().optional(),
      })
      .partial(),
  })
  .partial()
  .catchall(z.any())

export type Page = z.infer<typeof pageSchema>
