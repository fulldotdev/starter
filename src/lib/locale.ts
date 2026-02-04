export function splitLocaleFromId(
  id: string,
  locales: string[],
  defaultLocale: string
) {
  const segments = id.split("/")
  const maybeLocale = segments[0]
  const hasLocale = locales.includes(maybeLocale)
  const locale = hasLocale ? maybeLocale : defaultLocale
  const slug = hasLocale ? segments.slice(1).join("/") : id

  return {
    locale,
    slug,
  }
}

export function toLocalizedRoute(
  slug: string,
  locale: string,
  defaultLocale: string
) {
  const normalizedSlug = slug === "index" ? "" : slug
  if (!normalizedSlug) {
    return locale === defaultLocale ? "" : locale
  }

  return locale === defaultLocale
    ? normalizedSlug
    : `${locale}/${normalizedSlug}`
}

export function routeFromEntryId(
  id: string,
  locales: string[],
  defaultLocale: string
) {
  const { locale, slug } = splitLocaleFromId(id, locales, defaultLocale)
  return toLocalizedRoute(slug, locale, defaultLocale)
}

export function normalizeGlobPath(
  value: string,
  locale: string,
  locales: string[]
) {
  const trimmed = value.replace(/^\/+/, "")
  const fallbackLocale = locales[0] || "en"
  const safeLocale = locale || fallbackLocale
  if (!trimmed) return locale

  const hasLocalePrefix = locales.some(
    (item) => trimmed === item || trimmed.startsWith(`${item}/`)
  )

  return hasLocalePrefix ? trimmed : `${safeLocale}/${trimmed}`
}
