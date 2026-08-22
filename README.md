# Next.js Template

A clean Next.js App Router starter with shadcn/ui, Tailwind CSS v4, dark mode, and Hebrew/English locale switching with full RTL support.

## Stack

- Next.js App Router
- shadcn/ui (Radix + Base UI primitives) + Tailwind CSS v4
- `next-intl` for locale routing — Hebrew (default, RTL) and English (LTR), `dir`/`lang` switch automatically per locale
- Light/dark theme via `next-themes`

## App shell

- Collapsible sidebar + header, wired up in `app/[locale]/layout.tsx`
- Routes: `/` (home), `/components` (full shadcn/ui component gallery) — both under the `[locale]` segment (`/en`, `/en/components`, and unprefixed for the default `he` locale)
- Add new pages under `app/[locale]/` and a matching entry to `navItems` in `components/app-sidebar.tsx`
- Sidebar physically mirrors side based on locale direction (`components/app-sidebar.tsx`)

## Internationalization

- Translation strings live in `messages/en.json` and `messages/he.json`
- Routing config: `i18n/routing.ts` (locales, default locale, prefix strategy), `i18n/navigation.ts` (locale-aware `Link`/`router`/`usePathname`), `i18n/request.ts` (message loading)
- `proxy.ts` (Next.js 16's renamed `middleware.ts`) handles locale detection/redirects
- `components/locale-switcher.tsx` lets users switch locale from the header, preserving the current route
- To add a locale: add it to `routing.ts`'s `locales` array, add a `messages/<locale>.json` file, and add it to `rtlLocales` if it's RTL

## Component gallery

`/components` showcases every installed shadcn/ui component (buttons, forms, overlays, navigation, data display, feedback, chat primitives, layout), grouped by category and fully localized.

## CI/CD

- `.github/workflows/ci.yml` — lint, typecheck, build, and `npm audit` on every push/PR
- `.github/workflows/dependency-review.yml` — blocks PRs that introduce known-vulnerable dependencies
- `.github/dependabot.yml` — weekly dependency + GitHub Actions version bumps, grouped by patch/minor
- `.github/workflows/dependabot-auto-merge.yml` — auto-merges Dependabot patch/minor PRs once CI passes; major bumps always wait for manual review

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run typecheck
```
