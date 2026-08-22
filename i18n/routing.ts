import { defineRouting } from "next-intl/routing"

export const locales = ["he", "en"] as const

export type Locale = (typeof locales)[number]

export const rtlLocales: readonly Locale[] = ["he"]

export function getDirection(locale: Locale): "ltr" | "rtl" {
  return rtlLocales.includes(locale) ? "rtl" : "ltr"
}

export const routing = defineRouting({
  locales,
  defaultLocale: "he",
  localePrefix: "as-needed",
})
