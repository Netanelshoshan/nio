"use client"

import * as React from "react"
import NextLink from "next/link"
import { useLocale } from "@/components/dictionary-provider"
import { localizeHref } from "@/lib/i18n/config"

export function Link({
  href,
  ...props
}: React.ComponentProps<typeof NextLink>) {
  const lang = useLocale()
  const localizedHref =
    typeof href === "string" ? localizeHref(lang, href) : href

  return <NextLink href={localizedHref} {...props} />
}
