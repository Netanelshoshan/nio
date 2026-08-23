"use client"

import { Languages } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import { useTransition } from "react"
import { useLocale } from "@/components/dictionary-provider"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTranslations } from "@/hooks/use-translations"
import {
  hasLocale,
  localizeHref,
  locales,
  stripLocalePrefix,
} from "@/lib/i18n/config"

export function LocaleSwitcher() {
  const t = useTranslations("Locale")
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  function onChange(nextLocale: string) {
    if (!hasLocale(nextLocale)) {
      return
    }

    const href = localizeHref(nextLocale, stripLocalePrefix(pathname, locale))
    startTransition(() => {
      router.replace(href)
    })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon-sm"
          disabled={isPending}
          aria-label={t("label")}
        >
          <Languages />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuGroup>
          <DropdownMenuRadioGroup value={locale} onValueChange={onChange}>
            {locales.map((item) => (
              <DropdownMenuRadioItem key={item} value={item}>
                {t(item)}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
