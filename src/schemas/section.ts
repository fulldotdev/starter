import { z, type SchemaContext } from "astro:content"

import { agenda1Schema } from "@/schemas/blocks/agenda-1"
import { article1Schema } from "@/schemas/blocks/article-1"
import { contact1Schema } from "@/schemas/blocks/contact-1"
import { contact2Schema } from "@/schemas/blocks/contact-2"
import { content1Schema } from "@/schemas/blocks/content-1"
import { content2Schema } from "@/schemas/blocks/content-2"
import { cta1Schema } from "@/schemas/blocks/cta-1"
import { cta3Schema } from "@/schemas/blocks/cta-3"
import { features1Schema } from "@/schemas/blocks/features-1"
import { hero1Schema } from "@/schemas/blocks/hero-1"
import { hero2Schema } from "@/schemas/blocks/hero-2"
import { message1Schema } from "@/schemas/blocks/message-1"
import { pricings1Schema } from "@/schemas/blocks/pricings-1"
import { pricings2Schema } from "@/schemas/blocks/pricings-2"
import { pricingsEmbed1Schema } from "@/schemas/blocks/pricings-embed-1"
import { reviews1Schema } from "@/schemas/blocks/reviews-1"
import { reviews4Schema } from "@/schemas/blocks/reviews-4"
import { services1Schema } from "@/schemas/blocks/services-1"
import { trainers1Schema } from "@/schemas/blocks/trainers-1"

export const sectionSchema = (ctx: SchemaContext) =>
  z.discriminatedUnion("type", [
    agenda1Schema(ctx).extend({
      type: z.literal("agenda-1"),
    }),
    article1Schema(ctx).extend({
      type: z.literal("article-1"),
    }),
    contact1Schema(ctx).extend({
      type: z.literal("contact-1"),
    }),
    contact2Schema(ctx).extend({
      type: z.literal("contact-2"),
    }),
    content1Schema(ctx).extend({
      type: z.literal("content-1"),
    }),
    content2Schema(ctx).extend({
      type: z.literal("content-2"),
    }),
    cta1Schema(ctx).extend({
      type: z.literal("cta-1"),
    }),
    cta3Schema(ctx).extend({
      type: z.literal("cta-3"),
    }),
    features1Schema(ctx).extend({
      type: z.literal("features-1"),
    }),
    hero1Schema(ctx).extend({
      type: z.literal("hero-1"),
    }),
    hero2Schema(ctx).extend({
      type: z.literal("hero-2"),
    }),
    message1Schema(ctx).extend({
      type: z.literal("message-1"),
    }),
    pricings1Schema(ctx).extend({
      type: z.literal("pricings-1"),
    }),
    pricings2Schema(ctx).extend({
      type: z.literal("pricings-2"),
    }),
    pricingsEmbed1Schema(ctx).extend({
      type: z.literal("pricings-embed-1"),
    }),
    reviews1Schema(ctx).extend({
      type: z.literal("reviews-1"),
    }),
    reviews4Schema(ctx).extend({
      type: z.literal("reviews-4"),
    }),
    services1Schema(ctx).extend({
      type: z.literal("services-1"),
    }),
    trainers1Schema(ctx).extend({
      type: z.literal("trainers-1"),
    }),
  ])
