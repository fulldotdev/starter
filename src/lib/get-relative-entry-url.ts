import type { CollectionEntry, CollectionKey } from "astro:content"
import { getLocaleByPath, pathHasLocale } from "astro:i18n"

import { getCollectionSlug } from "@/lib/routing"

const stripLocaleFromId = (entryId: string, locale: string) => {
  if (!locale) {
    return entryId
  }

  const prefix = `${locale}/`
  return entryId.startsWith(prefix) ? entryId.slice(prefix.length) : entryId
}

export const getRelativeEntryUrl = (
  entry: CollectionEntry<CollectionKey>
) => {
  const hasLocale = pathHasLocale(entry.id)
  const locale = hasLocale ? getLocaleByPath(entry.id) : ""
  const collectionSlug = getCollectionSlug(entry.collection, locale)
  const entryId = stripLocaleFromId(entry.id, locale)
  const segments = [locale, collectionSlug, entryId].filter(Boolean)
  return `/${segments.join("/")}/`
}
