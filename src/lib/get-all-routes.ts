import { getCollection, type CollectionKey } from "astro:content"
import { getLocaleByPath, pathHasLocale } from "astro:i18n"

import { getCollectionSlug } from "@/lib/routing"

const stripLocaleFromId = (entryId: string, locale: string) => {
  if (!locale) {
    return entryId
  }

  const prefix = `${locale}/`
  return entryId.startsWith(prefix) ? entryId.slice(prefix.length) : entryId
}

export const getAllRoutes = async () => {
  const collections = await Promise.all(
    (["pages", "articles", "organizations", "persons", "reviews", "services"] as const).map(
      async (key) => {
        const collection = await getCollection(key)
        return collection.map((entry) => {
          const hasLocale = pathHasLocale(entry.id)
          const locale = hasLocale ? getLocaleByPath(entry.id) : ""
          const collectionSlug = getCollectionSlug(entry.collection, locale)
          const entryId = stripLocaleFromId(entry.id, locale)
          const segments = [locale, collectionSlug, entryId].filter(Boolean)
          return {
            collection: key,
            route: `/${segments.join("/")}/`,
          }
        })
      }
    )
  )

  return collections.flat()
}
