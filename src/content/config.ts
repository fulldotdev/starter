import { defineCollection } from 'astro:content'
import { block, card, page } from 'fulldev-blocks'

export const collections = {
  pages: defineCollection({
    type: 'content',
    schema: page,
  }),
  posts: defineCollection({
    type: 'content',
    schema: page,
  }),
  products: defineCollection({
    type: 'content',
    schema: page,
  }),
  categories: defineCollection({
    type: 'content',
    schema: page,
  }),
  cards: defineCollection({
    type: 'data',
    schema: card,
  }),
  blocks: defineCollection({
    type: 'data',
    schema: block,
  }),
}
