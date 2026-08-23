import { lang } from "next/root-params"
import { notFound } from "next/navigation"
import { hasLocale, type Dictionary, type Locale } from "@/lib/i18n/config"

const dictionaries = {
  en: () => import("../../dictionaries/en.json").then((module) => module.default),
  he: () => import("../../dictionaries/he.json").then((module) => module.default),
} satisfies Record<Locale, () => Promise<Dictionary>>

export type { Dictionary, Locale }

export { hasLocale }

export const getDictionary = async () => {
  const locale = await lang()
  if (!locale || !hasLocale(locale)) {
    notFound()
  }
  return dictionaries[locale]()
}
