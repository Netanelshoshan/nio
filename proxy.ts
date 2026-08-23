import { match } from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"
import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import {
  defaultLocale,
  hasLocale,
  locales,
  type Locale,
} from "@/lib/i18n/config"

const blockedSourcePath =
  /(?:^|\/)(?:\.env(?:\..*)?|\.git(?:\/|$))|(?:\.(?:map|ts|tsx|mts|cts))$/i

function getLocale(request: NextRequest): Locale {
  const headers = {
    "accept-language": request.headers.get("accept-language") ?? defaultLocale,
  }
  const languages = new Negotiator({ headers }).languages()

  try {
    const matched = match(languages, [...locales], defaultLocale)
    return hasLocale(matched) ? matched : defaultLocale
  } catch {
    return defaultLocale
  }
}

export default function proxy(request: NextRequest) {
  if (blockedSourcePath.test(request.nextUrl.pathname)) {
    return new NextResponse(null, {
      status: 404,
      headers: { "X-Content-Type-Options": "nosniff" },
    })
  }

  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) {
    return
  }

  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    "/((?!api|_next|_vercel|r(?:/|$)|.*\\..*).*)",
    "/:path*.map",
  ],
}
