import { useTranslations } from "next-intl"
import { cn } from "@/lib/utils"

type BrandMarkProps = {
  className?: string
}

export function BrandMark({ className }: BrandMarkProps) {
  const t = useTranslations("Brand")

  return (
    <span
      className={cn(
        "truncate text-sm font-semibold tracking-tight",
        className
      )}
    >
      {t("name")}
    </span>
  )
}
