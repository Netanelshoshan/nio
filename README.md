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

- `.github/workflows/ci.yml` — lint, typecheck, registry validate, build, and `npm audit` on every push/PR
- `.github/workflows/dependency-review.yml` — blocks PRs that introduce known-vulnerable dependencies
- `.github/dependabot.yml` — weekly dependency + GitHub Actions version bumps, grouped by patch/minor
- `.github/workflows/dependabot-auto-merge.yml` — auto-merges Dependabot patch/minor PRs once CI passes; major bumps always wait for manual review

## Registry

This repo is a [shadcn registry](https://ui.shadcn.com/docs/registry). The catalog lives in `registry.json` and is served at `/r/{name}.json`.

### Install from GitHub

```bash
npx shadcn@latest add Netanelshoshan/nextjs-template/i18n
npx shadcn@latest add Netanelshoshan/nextjs-template/theme
npx shadcn@latest add Netanelshoshan/nextjs-template/app-shell
```

### Install from `@netanelio`

After `registry.netanel.io` is live, consumers add the registry once:

```bash
npx shadcn@latest registry add @netanelio=https://registry.netanel.io/r/{name}.json
npx shadcn@latest add @netanelio/i18n
```

Locally, point the namespace at the dev server:

```bash
npx shadcn@latest registry add @netanelio=http://localhost:3000/r/{name}.json
npx shadcn@latest list @netanelio
```

### Items

| Item | What it installs |
| --- | --- |
| `i18n` | Locale routing, dictionaries, RTL helpers, language switcher |
| `theme` | `ThemeProvider` and light/dark/system toggle |
| `app-shell` | Sidebar, header, page wrapper, brand mark |

```bash
npm run registry:validate
npm run registry:build
npm run registry:deploy
```

The registry is a Firebase Hosting site (`registry-netanelio`) on the `netanelio` project, same pattern as Kash and Bspace. `registry:deploy` builds static JSON into `public/r` and deploys it. Attach the custom domain `registry.netanel.io` in the Firebase console.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run typecheck
npm run registry:validate
npm run registry:build
npm run registry:deploy
```
