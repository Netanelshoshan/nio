export type Dictionary = typeof import("../../dictionaries/en.json")

export const locales = ["he", "en"] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "he"

export const rtlLocales: readonly Locale[] = ["he"]

export function hasLocale(locale: string): locale is Locale {
  return (locales as readonly string[]).includes(locale)
}

export function getDirection(locale: Locale): "ltr" | "rtl" {
  switch (locale) {
    case "he":
      return "rtl"
    case "en":
      return "ltr"
    default: {
      const exhaustive: never = locale
      return exhaustive
    }
  }
}

export function localizeHref(lang: Locale, href: string): string {
  if (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("#")
  ) {
    return href
  }

  const path = href === "/" ? "" : href
  return `/${lang}${path}`
}

export function stripLocalePrefix(pathname: string, lang: Locale): string {
  const prefix = `/${lang}`
  if (pathname === prefix) {
    return "/"
  }
  if (pathname.startsWith(`${prefix}/`)) {
    return pathname.slice(prefix.length)
  }
  return pathname
}
