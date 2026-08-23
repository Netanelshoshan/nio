# Next.js Template

A clean Next.js App Router starter with shadcn/ui, Tailwind CSS v4, dark mode, and Hebrew/English locale switching with full RTL support.

## Stack

- Next.js App Router
- shadcn/ui (Radix + Base UI primitives) + Tailwind CSS v4
- Native Next.js i18n: `app/[lang]` routing, `Accept-Language` negotiation in `proxy.ts`, dictionaries for translations
- Light/dark theme via `next-themes`

## App shell

- Collapsible sidebar + header, wired up in `app/[lang]/layout.tsx`
- Routes: `/he` and `/en` (home), `/he/components` and `/en/components` (component gallery)
- Visiting `/` or `/components` redirects to the best matching locale from the `Accept-Language` header (Hebrew by default)
- Add new pages under `app/[lang]/` and a matching entry to `navItems` in `components/app-sidebar.tsx`
- Sidebar physically mirrors side based on locale direction (`components/app-sidebar.tsx`)

## Internationalization

- Translation strings live in `dictionaries/en.json` and `dictionaries/he.json`
- `app/[lang]/dictionaries.ts` loads the active dictionary via `next/root-params`
- `lib/i18n/config.ts` holds supported locales, the default locale (`he`), and RTL direction
- `proxy.ts` negotiates locale with `@formatjs/intl-localematcher` + `negotiator`, then redirects unprefixed paths
- `components/locale-switcher.tsx` switches language by changing the `/[lang]` prefix, preserving the current route
- To add a locale: add it to `locales` in `lib/i18n/config.ts`, add `dictionaries/<locale>.json`, import it from `dictionaries.ts`, and add it to `rtlLocales` if it's RTL

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
