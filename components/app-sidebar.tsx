"use client"

import { useLocale, useTranslations } from "next-intl"
import { useMemo } from "react"
import { Blocks, LayoutDashboard } from "lucide-react"
import { BrandMark } from "@/components/brand-mark"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Link, usePathname } from "@/i18n/navigation"
import { getDirection, type Locale } from "@/i18n/routing"

function resolveSelectedHref(pathname: string, items: { href: string }[]): string | null {
  const active = items.find((item) => {
    if (item.href === "/") return pathname === item.href
    return pathname === item.href || pathname.startsWith(`${item.href}/`)
  })
  return active?.href ?? null
}

export function AppSidebar() {
  const t = useTranslations("Nav")
  const tUser = useTranslations("User")
  const pathname = usePathname()
  const locale = useLocale() as Locale
  const side = getDirection(locale) === "rtl" ? "right" : "left"

  const navItems: Array<{
    href: string
    label: string
    icon: typeof LayoutDashboard
  }> = [
    { href: "/", label: t("home"), icon: LayoutDashboard },
    { href: "/components", label: t("components"), icon: Blocks },
  ]

  const selectedHref = useMemo(
    () => resolveSelectedHref(pathname ?? "/", navItems),
    [pathname, navItems]
  )

  return (
    <Sidebar side={side} collapsible="icon" variant="sidebar" className="border-s-0">
      <SidebarHeader className="mt-[calc(0.5rem+1px)] h-14 justify-center border-b border-border p-0 px-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" className="h-10 justify-center" asChild>
              <Link href="/">
                <BrandMark />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>{t("menu")}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = selectedHref === item.href
                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton asChild isActive={isActive} tooltip={item.label}>
                      <Link href={item.href}>
                        <Icon />
                        <span>{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t border-border">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" tooltip={tUser("tooltip")}>
              <Avatar size="sm">
                <AvatarFallback>{tUser("guest").slice(0, 2)}</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 leading-tight">
                <span className="truncate font-medium">{tUser("guest")}</span>
                <span className="truncate text-xs text-muted-foreground">guest@example.com</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
