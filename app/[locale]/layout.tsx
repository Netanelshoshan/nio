import type { Metadata } from "next"
import { hasLocale } from "next-intl"
import { NextIntlClientProvider } from "next-intl"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"
import { Rubik } from "next/font/google"
import { AppHeader } from "@/components/app-header"
import { AppSidebar } from "@/components/app-sidebar"
import { ThemeProvider } from "@/components/theme-provider"
import { DirectionProvider } from "@/components/ui/direction"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { getDirection, routing, type Locale } from "@/i18n/routing"
import "./globals.css"

const rubik = Rubik({
  subsets: ["latin", "hebrew"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-app-rubik",
  display: "swap",
})

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "Metadata" })

  return {
    title: { default: t("title"), template: t("titleTemplate") },
    description: t("description"),
    openGraph: {
      type: "website",
      locale: locale === "he" ? "he_IL" : "en_US",
      siteName: t("siteName"),
    },
  }
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)
  const dir = getDirection(locale as Locale)

  return (
    <html
      lang={locale}
      dir={dir}
      className={cn("font-sans", rubik.variable)}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <NextIntlClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <DirectionProvider direction={dir}>
              <TooltipProvider>
                <SidebarProvider className="h-svh bg-sidebar">
                  <AppSidebar />
                  <SidebarInset className="m-2 flex min-h-0 flex-1 flex-col overflow-hidden rounded-lg border border-border/60 bg-background shadow-(--shadow-card)">
                    <AppHeader />
                    <main className="flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto overscroll-y-contain bg-background p-4 pb-8 md:p-6 md:pb-6">
                      {children}
                    </main>
                  </SidebarInset>
                </SidebarProvider>
                <Toaster position="top-center" />
              </TooltipProvider>
            </DirectionProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
