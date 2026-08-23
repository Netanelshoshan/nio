import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import createMiddleware from "next-intl/middleware"
import { routing } from "@/i18n/routing"

const intlMiddleware = createMiddleware(routing)

const blockedSourcePath =
  /(?:^|\/)(?:\.env(?:\..*)?|\.git(?:\/|$))|(?:\.(?:map|ts|tsx|mts|cts))$/i

export default function proxy(request: NextRequest) {
  if (blockedSourcePath.test(request.nextUrl.pathname)) {
    return new NextResponse(null, {
      status: 404,
      headers: { "X-Content-Type-Options": "nosniff" },
    })
  }

  return intlMiddleware(request)
}

export const config = {
  matcher: [
    "/((?!api|_next|_vercel|.*\\..*).*)",
    // Locale matcher skips dotted paths; still intercept source maps under /_next.
    "/:path*.map",
  ],
}
