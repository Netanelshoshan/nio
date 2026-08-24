"use client"

import { usePathname } from "next/navigation"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { useLocale } from "@/components/dictionary-provider"
import { LocaleSwitcher } from "@/components/locale-switcher"
import { ThemeToggle } from "@/components/theme-toggle"
import { useTranslations } from "@/hooks/use-translations"
import { stripLocalePrefix } from "@/lib/i18n/config"

export function AppHeader() {
  const t = useTranslations("Nav")
  const locale = useLocale()
  const pathname = stripLocalePrefix(usePathname(), locale)

  const routeLabels: Record<string, string> = {
    "/": t("home"),
    "/components": t("components"),
  }

  const matched = Object.keys(routeLabels)
    .filter((key) => key !== "/" && pathname.startsWith(key))
    .sort((a, b) => b.length - a.length)[0]
  const pageLabel = matched ? routeLabels[matched] : routeLabels["/"]

  return (
    <header className="ui-material sticky top-0 z-20 flex h-14 shrink-0 items-center gap-2 border-b border-border/60 px-4">
      <SidebarTrigger className="-ms-1" />
      <Separator orientation="vertical" className="me-2" />
      <Breadcrumb className="min-w-0 flex-1">
        <BreadcrumbList>
          <BreadcrumbItem className="min-w-0">
            <BreadcrumbPage className="truncate">{pageLabel}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <LocaleSwitcher />
      <ThemeToggle />
    </header>
  )
}
