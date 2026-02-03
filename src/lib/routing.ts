import settings from "@/content/settings/settings.json"

type LocaleSlugMap = Record<string, string>
type CollectionSlug = string | LocaleSlugMap

const collectionSlugs =
  settings.routing?.collectionSlugs ?? ({} as Record<string, CollectionSlug>)

export const getCollectionSlug = (
  collection: string,
  locale = settings.i18n.defaultLocale
) => {
  const slugConfig = collectionSlugs[collection]

  if (!slugConfig) {
    return collection
  }

  if (typeof slugConfig === "string") {
    return slugConfig
  }

  return (
    slugConfig[locale] ?? slugConfig[settings.i18n.defaultLocale] ?? collection
  )
}
