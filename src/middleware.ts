import { i18n } from "astro:config/server"
import { getEntry } from "astro:content"
import { defineMiddleware } from "astro:middleware"

// Middleware to set the global data in Astro.locals
export const onRequest = defineMiddleware(async (context, next) => {
  const locale = context.currentLocale
  const defaultLocale = i18n?.defaultLocale
  const globalId = !locale || locale === defaultLocale ? "index" : locale
  const global = await getEntry("globals", globalId)
  if (!global) {
    throw new Error(`Global data not found for locale: ${locale}`)
  }
  context.locals.global = global.data
  return next()
})
