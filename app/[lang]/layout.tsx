import type { Metadata } from "next"
import { lang } from "next/root-params"
import { notFound } from "next/navigation"
import { Rubik } from "next/font/google"
import { AppHeader } from "@/components/app-header"
import { AppSidebar } from "@/components/app-sidebar"
import { DictionaryProvider } from "@/components/dictionary-provider"
import { ThemeProvider } from "@/components/theme-provider"
import { DirectionProvider } from "@/components/ui/direction"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { getDictionary } from "@/app/[lang]/dictionaries"
import { getDirection, hasLocale, locales } from "@/lib/i18n/config"
import { cn } from "@/lib/utils"
import "./globals.css"

const rubik = Rubik({
  subsets: ["latin", "hebrew"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-app-rubik",
  display: "swap",
})

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata(): Promise<Metadata> {
  const dictionary = await getDictionary()
  const locale = await lang()

  return {
    title: {
      default: dictionary.Metadata.title,
      template: dictionary.Metadata.titleTemplate,
    },
    description: dictionary.Metadata.description,
    openGraph: {
      type: "website",
      locale: locale === "he" ? "he_IL" : "en_US",
      siteName: dictionary.Metadata.siteName,
    },
  }
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params

  if (!hasLocale(lang)) {
    notFound()
  }

  const dictionary = await getDictionary()
  const dir = getDirection(lang)

  return (
    <html
      lang={lang}
      dir={dir}
      className={cn("font-sans", rubik.variable)}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <DictionaryProvider dictionary={dictionary} locale={lang}>
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
        </DictionaryProvider>
      </body>
    </html>
  )
}
