"use client"

import { Monitor, Moon, Sun } from "lucide-react"
import { useTranslations } from "next-intl"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
  const t = useTranslations("Theme")
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon-sm" disabled aria-label={t("label")}>
        <Sun />
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon-sm"
          className="relative"
          aria-label={t("label")}
        >
          <Sun className="scale-100 rotate-0 opacity-100 transition-[transform,opacity] duration-(--duration-ui-fast) ease-(--ease-ui-out) dark:scale-[0.95] dark:-rotate-45 dark:opacity-0 motion-reduce:transition-opacity motion-reduce:dark:scale-100 motion-reduce:dark:rotate-0" />
          <Moon className="absolute scale-[0.95] rotate-45 opacity-0 transition-[transform,opacity] duration-(--duration-ui-fast) ease-(--ease-ui-out) dark:scale-100 dark:rotate-0 dark:opacity-100 motion-reduce:scale-100 motion-reduce:rotate-0 motion-reduce:transition-opacity" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuGroup>
          <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
            <DropdownMenuRadioItem value="light">
              <Sun />
              {t("light")}
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="dark">
              <Moon />
              {t("dark")}
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="system">
              <Monitor />
              {t("system")}
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
