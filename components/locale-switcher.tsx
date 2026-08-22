"use client"

import { Languages } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"
import { useTransition } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { usePathname, useRouter } from "@/i18n/navigation"
import { locales, type Locale } from "@/i18n/routing"

export function LocaleSwitcher() {
  const t = useTranslations("Locale")
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  function onChange(nextLocale: string) {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale as Locale })
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
