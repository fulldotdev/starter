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
  reviews: defineCollection({
    type: 'content',
    schema: card,
  }),
  globals: defineCollection({
    type: 'data',
    schema: block,
  }),
}
