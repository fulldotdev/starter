import { z } from "astro:content"

export const formSchema = z
  .object({
    action: z.string(),
    submit: z.string(), // submit button label
    inbox: z.string(), // CloudCannon inbox key
    fields: z.array(
      z
        .object({
          type: z
            .enum([
              "text",
              "email",
              "textarea",
              "tel",
              "checkbox",
              "radio-group",
              "select",
            ])
            .default("text"),
          name: z.string(),
          label: z.string(),
          placeholder: z.string(),
          required: z.boolean(),
          value: z.string(),
          options: z.array(z.string()),
        })
        .partial()
        .strict()
    ),
  })
  .partial()
  .strict()
