import type { NextConfig } from "next"
import path from "path"
import { fileURLToPath } from "url"

const projectRoot = path.dirname(fileURLToPath(import.meta.url))
const isDev = process.env.NODE_ENV !== "production"

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "X-DNS-Prefetch-Control", value: "off" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains",
  },
]

const registryCorsHeaders = [
  { key: "Access-Control-Allow-Origin", value: "*" },
  { key: "Access-Control-Allow-Methods", value: "GET, OPTIONS" },
  { key: "Access-Control-Allow-Headers", value: "Content-Type, Authorization" },
]

const nextConfig: NextConfig = {
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  enablePrerenderSourceMaps: false,
  reactProductionProfiling: false,
  compiler: {
    removeConsole: {
      exclude: ["error"],
    },
  },
  experimental: {
    serverSourceMaps: false,
    // Keep maps in `next dev` for the overlay; never emit them for production.
    turbopackSourceMaps: isDev,
    turbopackInputSourceMaps: isDev,
  },
  outputFileTracingIncludes: {
    "/r/**": [
      "./registry.json",
      "./components/**/*",
      "./hooks/**/*",
      "./lib/**/*",
      "./dictionaries/**/*",
      "./proxy.ts",
      "./app/**/*",
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        source: "/r/:path*",
        headers: [...securityHeaders, ...registryCorsHeaders],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: "/:path*.map",
        destination: "/404",
        permanent: false,
      },
    ]
  },
  turbopack: {
    root: projectRoot,
  },
}

export default nextConfig
