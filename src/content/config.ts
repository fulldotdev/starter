import { defineCollection } from 'astro:content'
import { block, page } from 'fulldev-blocks'

export const collections = {
  pages: defineCollection({
    type: 'content',
    schema: page,
  }),
  blocks: defineCollection({
    type: 'data',
    schema: block,
  }),
}
