"use client"

import * as React from "react"
import type { Dictionary, Locale } from "@/lib/i18n/config"

type DictionaryContextValue = {
  dictionary: Dictionary
  locale: Locale
}

const DictionaryContext = React.createContext<DictionaryContextValue | null>(null)

export function DictionaryProvider({
  dictionary,
  locale,
  children,
}: {
  dictionary: Dictionary
  locale: Locale
  children: React.ReactNode
}) {
  const value = React.useMemo(
    () => ({ dictionary, locale }),
    [dictionary, locale]
  )

  return (
    <DictionaryContext.Provider value={value}>
      {children}
    </DictionaryContext.Provider>
  )
}

export function useDictionary() {
  const context = React.useContext(DictionaryContext)
  if (!context) {
    throw new Error("useDictionary must be used within a DictionaryProvider")
  }
  return context.dictionary
}

export function useLocale() {
  const context = React.useContext(DictionaryContext)
  if (!context) {
    throw new Error("useLocale must be used within a DictionaryProvider")
  }
  return context.locale
}
