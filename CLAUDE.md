# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A premium, SEO-first **calculator platform** — Apple-level polish, dark-mode-first, hundreds of calculators planned. MVP launches ~50 calculators across 10 categories; each is a statically-generated page with formula, worked example, FAQs and related tools. Business/design strategy lives in three source docs in the owner's Downloads (Phase 1 strategy, Phase 2 keyword/product map, Phase 3 technical spec) plus two design-law briefs pasted into the project instructions. The design law is the source of truth for visuals.

## Commands

```bash
npm run dev          # Dev server on :3000 (Turbopack off; uses eval → CSP allows 'unsafe-eval' in dev only)
npm run build        # Production build — statically generates every calculator + category page
npm start            # Serve the production build
npm run lint         # next lint (ESLint). Build also runs lint + typecheck and FAILS on unused vars.
npm test             # Vitest run (engine unit tests)
npm run test:watch   # Vitest watch mode
npx vitest run lib/engines/engines.test.ts   # Run one test file
```

Notes:
- **Stop the dev server before `npm run build`** — both use `.next/`; a running dev server causes `EPERM: .next/trace` on Windows. `rm -rf .next` if a build is interrupted.
- Node 20+, npm 10+. Next.js 15 (App Router, React 19), TypeScript strict, Tailwind v3. Note: in Next 15 route `params` are async (`await params`) — see the dynamic pages.

## Architecture — one engine, many calculators

The core principle: **never build a calculator as a one-off page.** A calculator is a data definition + a pure function, rendered by a shared shell.

- **Definitions** (`lib/calculators/<category>.ts`): each exports an array of `CalculatorDefinition` (content + SEO metadata + field/result specs). Grouped one file per category. Pure serializable data — **no functions here**, so definitions can be passed server→client as props.
- **Engines** (`lib/engines/index.ts`): pure compute functions keyed in the `engines` map. **Keyed by calculator `id`** (e.g. `"mortgage"`), NOT slug (`"mortgage-calculator"`). Engines do math only — no formatting, no display. Invalid/impossible inputs return `NaN` (rendered as `—`).
- **Registry** (`lib/registry.ts`): aggregates all definitions; `getCalculatorBySlug`, `getCalculatorsByCategory`, `getRelatedCalculators` (silently skips slugs not yet built), etc. Used by pages/build.
- **Types** (`lib/types.ts`): `CalculatorDefinition`, `CalculatorField`, `CalculatorResult`, `ComputeFn`, `Category`. `ComputeFn = (inputs: Record<string,string>) => Record<string, number|string>` — raw string inputs in, raw values out, keyed by result id.
- **Formatting** (`lib/utils.ts`): `formatResult(value, resultDef)` is the single display layer (currency/percentage/duration/number). Also `num`, `round`, `cn` (clsx+tailwind-merge), `splitResultDisplay` (peels trailing unit off a number for big/small rendering).

**Client/server split that keeps JS lean:** the interactive `CalculatorShell` (client) receives the `definition` as a prop and looks up its engine via `getEngine(definition.id)`. Only the tiny `engines` map ships to the client; heavy definition content (explanations, FAQs) is server-rendered by the page and never enters the client bundle. Results compute **live via `useMemo`** as the user types — there is no "Calculate" button and no fake loading spinner (client math is instant).

### Adding a calculator
1. Add the pure function to `lib/engines/index.ts` and register it in the `engines` map under the calculator `id`.
2. Add a `CalculatorDefinition` to the matching `lib/calculators/<category>.ts` array (`id` MUST match the engine key; `slug` is the URL).
3. Add a Vitest case in `lib/engines/engines.test.ts` (normal + zero + negative/invalid at minimum).
4. It now auto-appears in routing, category hub, sitemap, search — no page wiring needed.

### Routing (all SSG, `dynamicParams = false`)
- `app/[category]/[calculator]/page.tsx` — calculator page. `generateStaticParams` from the registry; `generateMetadata` from the definition; renders `CalculatorShell` + server-rendered `FormulaPanel`/`ExamplePanel`/`FAQSection`/`RelatedCalculators`; emits `WebApplication` + breadcrumb + FAQ JSON-LD.
- `app/[category]/page.tsx` — category hub (params from `lib/categories.ts`).
- `app/page.tsx` — homepage (hero + mesh gradient, category grid with 3D tilt, popular, trust).
- `app/calculators/page.tsx`, `app/sitemap.ts`, `app/robots.ts`, `app/not-found.tsx`.

## Design system

Tokens live in `app/globals.css` as CSS custom properties; `tailwind.config.ts` maps utilities onto them. **Never hardcode a color/spacing/radius/shadow — always a token.** No inline styles (the only JS-set styles are the tilt `--rx/--ry` CSS variables in `TiltCard`).

- **Two token vocabularies coexist deliberately:** the law's `--color-*` set is the source of truth; a block of **compatibility aliases** (`--brand`, `--surface`, `--text-primary`, `--border`, `--shadow-*`, `--font-sans`, …) maps onto them so Tailwind utilities and component classNames share one system. Change values in the `--color-*` / alias layer, not scattered in components.
- **Accent is `#0EA5E9` (electric sky), ground is `#080808`** — deliberately not Apple blue. Dark is default; light theme via `[data-theme="light"]` and `prefers-color-scheme`. Theme is set pre-paint by an inline script in `app/layout.tsx` and toggled by `components/ThemeToggle.tsx` (persists to `localStorage`).
- **Four font families** (self-hosted via `next/font/google`): Syne (display/headings — applied to `h1/h2/h3` in base CSS), DM Sans (body), JetBrains Mono (all numeric output/results), DM Mono (`.util` uppercase labels).
- **Icons are hand-crafted SVG** in `components/Icon.tsx` — a name→geometry map behind `<Icon name="..." />`. **Zero external icon libraries** (no lucide). Add new icons to the `PATHS` map.
- **Animation:** `.reveal`/`.stagger` (via `components/animations/ScrollReveal.tsx` + IntersectionObserver), `.tilt` (`TiltCard`, pointer-only, writes CSS vars), `.mesh` (`MeshGradient`, CSS-only hero background), and `useCountUp` for result numbers. All degrade under `prefers-reduced-motion`.

## Security & performance

- Security headers + CSP in `next.config.mjs` via `headers()` (HSTS, X-Frame-Options DENY, nosniff, Referrer-Policy, Permissions-Policy, strict CSP). **`'unsafe-eval'` is added to `script-src` in development only** (Next/webpack HMR needs it); production stays strict. Fonts are self-hosted so the CSP needs no remote font hosts.
- The site is **fully static (SSG)** — chosen over `output: 'export'` specifically so `next.config` `headers()` still emit (static export has no server for headers). On Vercel this is the correct combination.
- JS budget: calculator First Load ≈ 111 kB, home ≈ 108 kB (target < 150 kB). Keep the client `engines` map tiny and content server-rendered.

## Conventions / gotchas

- **`id` vs `slug`:** engines and `CalculatorShell` key off `id`; URLs and the registry key off `slug`. A new calculator whose `id` ≠ its engine key silently returns `—` (engine lookup miss). This exact mismatch was a bug once — keep them aligned.
- **`useCountUp` falls back to the exact target** if it hasn't produced a finite frame (e.g. rAF paused in a background tab), so results are never stuck at `—` when inputs are valid.
- Sensitive calculators set `sensitivity: "health" | "finance" | "tax"` → the shell shows a disclaimer and `FormulaPanel` shows `formulaSource` (+ `sourceUrl` link) + `formulaExplanation` + last-reviewed date. Always cite the formula source for health/finance/tax.
- **Content contract** (enforced by `lib/content.test.ts`): every calculator has a 150+ word `explanation`, a `formulaExplanation`, exactly 5 FAQs (45+ word answers), and a `formulaSource`; health/finance calculators with a real authority carry a `sourceUrl`. Each category in `lib/categories.ts` has a ~250-word `about` + 3 `faqs` rendered on its hub. Keep new calculators to this bar.
- **OG images** are generated at build by `app/og/[category]/route.tsx` (`next/og` ImageResponse, statically prerendered per category — NOT edge, since edge + `generateStaticParams` conflict). Satori gotcha: any `<div>` with more than one child needs explicit `display:flex`; keep interpolated headlines as a single precomputed string.
- **Schema** lives in `lib/schema.ts`: calculator pages emit WebApplication + Article; hubs emit CollectionPage; FAQPage + BreadcrumbList come from the FAQSection/Breadcrumb components. Author/publisher is the org (no fabricated "editorial team").
- Deviations from the brief, made deliberately: definitions grouped per-category (not one JSON file each) for type safety; live compute instead of a Calculate button; SSG instead of `output:'export'`; Syne instead of Clash Display (not on an allowed font host).

## Status & open items

- **All 50 MVP calculators are built** (`lib/calculators/*` incl. `*-extra.ts`; engines in `lib/engines/index.ts` + `extended.ts`), each with 71 total passing unit tests. 68 static pages build clean.
- **Brand name is a placeholder** (`Calcvora` in `lib/site.ts`) — not chosen by the owner. Also set `NEXT_PUBLIC_SITE_URL` for correct canonicals/sitemap.
- **`npm audit` still reports highs** — now only Next 15's own build-time transitive `postcss`/`sharp`. No runtime path on this static, no-`next/image` site; clearing them entirely needs Next 16 (owner chose to stay on 15).
- **Production discovery/UX layer (Phase 1) is live:** `CalculatorFinder` (floating bot, `components/finder/`, intent index auto-built by `getSearchIndex()` in `lib/registry.ts` — no manual map to maintain); analytics events (`lib/analytics.ts`, fired from the shell + finder); calculator-page share/print bar + "How to use" 3-step + `aria-live` results; homepage intent cards; expanded footer + `/about` `/privacy` `/terms`; `app/error.tsx`; skip-to-content link; print styles.
- **Roadmap — calculator scale (Waves 2–5, tools 51–600+):** run wave-by-wave with the parallel-agent method (one agent per category, edits its own `lib/calculators/*` file), each gated by `npm run build` + `npm run test`/content tests, then re-run `getSearchIndex` is automatic. Watch for **duplicates** across waves (cash-flow, profit, markup, break-even, roas, ecommerce-profit, running-pace, etc. already exist) — merge, never create id/slug collisions. Wave specs live in the owner's Downloads (`wave2–5buildprompt.md`, `MASTERPRODUCTIONPROMPT.md`).
- **Not yet done:** calculator-page sticky sidebar; header mega-menu + category-hub subcategory filters; Playwright E2E; a real Lighthouse run.
