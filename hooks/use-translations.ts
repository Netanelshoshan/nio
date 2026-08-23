"use client"

import { useDictionary } from "@/components/dictionary-provider"

function getPath(source: unknown, path: string): unknown {
  return path.split(".").reduce<unknown>((current, key) => {
    if (current && typeof current === "object" && key in current) {
      return (current as Record<string, unknown>)[key]
    }
    return undefined
  }, source)
}

export function useTranslations(namespace: string) {
  const dictionary = useDictionary()
  const scoped = getPath(dictionary, namespace)

  return (key: string) => {
    const value = getPath(scoped, key)
    return typeof value === "string" ? value : key
  }
}
