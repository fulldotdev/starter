import { z, type SchemaContext } from "astro:content"

const navItemSchema = z
  .object({
    text: z.string(),
    href: z.string(),
    icon: z.string(),
    target: z.string(),
    children: z
      .array(
        z
          .object({
            text: z.string(),
            href: z.string(),
            icon: z.string(),
            target: z.string(),
          })
          .partial()
      )
      .optional(),
  })
  .partial()

const footerColumnSchema = z.object({
  title: z.string(),
  links: z.array(
    z.object({
      text: z.string(),
      href: z.string(),
      icon: z.string().optional(),
      target: z.string().optional(),
    })
  ),
})

const socialLinkSchema = z
  .object({
    platform: z.string(),
    href: z.string(),
    icon: z.string(),
  })
  .partial()

export const globalSchema = ({ image }: SchemaContext) =>
  z.object({
    buttons: z
      .object({
        submit: z.string(),
        cancel: z.string(),
        get_started: z.string(),
        learn_more: z.string(),
        contact_us: z.string(),
        read_more: z.string(),
        view_all: z.string(),
        back: z.string(),
      })
      .partial()
      .optional(),
    labels: z
      .object({
        email: z.string(),
        password: z.string(),
        name: z.string(),
        phone: z.string(),
        message: z.string(),
        company: z.string(),
      })
      .partial()
      .optional(),
    errors: z
      .object({
        required: z.string(),
        invalid_email: z.string(),
        too_short: z.string(),
        too_long: z.string(),
        generic: z.string(),
      })
      .partial()
      .optional(),
    success: z
      .object({
        form_submitted: z.string(),
        message_sent: z.string(),
        subscribed: z.string(),
      })
      .partial()
      .optional(),
    header: z
      .object({
        logo: z
          .object({
            src: image(),
            alt: z.string(),
            text: z.string(),
            href: z.string(),
          })
          .partial(),
        nav: z.array(navItemSchema),
      })
      .partial()
      .optional(),
    footer: z
      .object({
        logo: z
          .object({
            src: image(),
            alt: z.string(),
            text: z.string(),
            href: z.string(),
          })
          .partial(),
        description: z.string(),
        columns: z.array(footerColumnSchema),
        socials: z.array(socialLinkSchema),
        bottomText: z.string(),
      })
      .partial()
      .optional(),
  })

export type GlobalSchema = z.infer<ReturnType<typeof globalSchema>>
