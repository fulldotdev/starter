import { z } from "astro:content"

export const ratingSchema = z.number().min(0).max(5)
