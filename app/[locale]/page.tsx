import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { AppPage } from "@/components/app-page"
import { Badge } from "@/components/ui/badge"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  const t = useTranslations("Home")

  const metrics = [
    { title: t("metrics.activeUsers"), value: "1,204" },
    { title: t("metrics.ordersThisMonth"), value: "312" },
    { title: t("metrics.avgLoadTime"), value: "0.8s" },
    { title: t("metrics.satisfaction"), value: "97%" },
  ]

  return (
    <AppPage>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-semibold tracking-tight">{t("title")}</h1>
          <Badge variant="secondary">{t("badge")}</Badge>
        </div>
        <p className="max-w-2xl text-sm text-muted-foreground">{t("description")}</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <Card key={metric.title} className="shadow-(--shadow-card)">
            <CardHeader className="gap-2">
              <CardDescription>{metric.title}</CardDescription>
              <CardTitle className="text-2xl tabular-nums">{metric.value}</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <Link
          href="/components"
          className="rounded-lg outline-none transition-transform duration-(--duration-ui-press) ease-(--ease-ui-out) active:scale-[0.98]"
        >
          <Card className="h-full border border-border/60 hover-fine:bg-muted/40">
            <CardHeader>
              <CardTitle>{t("componentsCard.title")}</CardTitle>
              <CardDescription>{t("componentsCard.description")}</CardDescription>
            </CardHeader>
          </Card>
        </Link>
        <Card className="h-full border border-dashed border-border/60">
          <CardHeader>
            <CardTitle>{t("addPageCard.title")}</CardTitle>
            <CardDescription>{t("addPageCard.description")}</CardDescription>
          </CardHeader>
        </Card>
        <Card className="h-full border border-dashed border-border/60">
          <CardHeader>
            <CardTitle>{t("apiCard.title")}</CardTitle>
            <CardDescription>{t("apiCard.description")}</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </AppPage>
  )
}
