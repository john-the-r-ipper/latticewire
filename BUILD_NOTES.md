# Latticewire — Build Notes

**Blog:** Latticewire
**Theme:** Messaging commerce, chat-order operations, multi-channel customer communications (Messenger / WhatsApp / Instagram), SMB automation
**Stack:** Astro 5 + @astrojs/sitemap + @astrojs/rss (static output)
**Site URL (default):** https://latticewire.example (overridable via `SITE_URL`)
**Base path:** `/` (overridable via `BASE_PATH`)

## Articles (6, all published 2026)

| # | Title | Category | Date |
|---|-------|----------|------|
| 1 | Taking Orders Where the Conversation Is: Why Chat Commerce Works for SMBs | Strategy | 2026-02-10 |
| 2 | The Three-Channel Balancing Act: Messenger, WhatsApp, and Instagram for Small Sellers | Multi-channel | 2026-03-18 |
| 3 | How Messenger and WhatsApp Became Storefronts in Bangladesh | Regional | 2026-05-06 |
| 4 | A Field Guide to Chat-Order Operations | Operations | 2026-06-24 |
| 5 | Agentic Browsing and What It Means for the Way We Shop | Trends | 2026-08-12 |
| 6 | Auto-Replies That Don't Sound Like a Bot | Product | 2026-09-30 |

## Compliance notes

- **About page** (`/about`) honestly discloses the blog is operated by OnlyOrders (https://onlyorders.tech) for educational/SEO content; no independent-journalism claim.
- **OnlyOrders mentions** are sparse and natural: one in an article (three-channel post), one in the site footer attribution, plus the required About-page disclosure.
- **Sourced facts only.** Posts use the shared Research Facts (SMB AI messaging automation, Bangladesh Messenger/WhatsApp commerce + bKash/Nagad, Gemini agentic browsing, open-weight/efficiency discourse) and clearly mark opinion/analysis without invented stats, quotes, or benchmarks.
- **robots.txt** generated at `/robots.txt` allowing crawl with sitemap link.
- **sitemap-index.xml** generated; includes all public routes.
- No secrets / no `.env` committed. `node_modules/`, `dist/`, `.env` are gitignored.
- No affiliate fraud; no medical/legal claims.

## Build status

```
$ npm install
added 295 packages, audited 296 packages (3 vulnerabilities reported by npm audit — none in runtime paths we use)

$ npm run build
[astro] ✓ 8 page(s) built in 1.30s
✓ Completed — sitemap-index.xml created; build succeeds.
```

**Status: BUILD PASSES** (`npm install && npm run build` confirmed).

## Generated output (dist/)

- `/` (home, article grid)
- `/blog/{slug}/` × 6 articles
- `/about/`
- `/robots.txt`
- `/rss.xml`
- `/sitemap-index.xml` (+ `/sitemap-0.xml`)

## GitHub Pages deployment

- **Repo:** https://github.com/john-the-r-ipper/latticewire (public)
- **Pages URL:** https://john-the-r-ipper.github.io/latticewire/
- **Workflow:** `.github/workflows/pages.yml` (build + upload-pages-artifact + deploy-pages) on push to `main`
- **Build parity:** `SITE_URL=https://john-the-r-ipper.github.io BASE_PATH=/latticewire/ npm run build` → 8 pages built green
- **Deploy status:** workflow run succeeded (build + deploy jobs green); root and `/about/` return HTTP 200
- **Pages config:** `build_type=workflow`, source branch `main`, path `/`
- **Secret scan:** clean — no keys, no `sk_`, no `ghp_`, no `.env` in tree
- **Disclosure:** `/about` discloses operation by OnlyOrders (https://onlyorders.tech); no "Oryxa" references anywhere

## Vercel deployment

- **Preview URL:** https://latticewire-8uy2htztw-john-the-r-ippers-projects.vercel.app (deployment protection enabled)
- **Production URL:** https://latticewire.vercel.app
- **Project:** `latticewire` under `john-the-r-ippers-projects` scope
- **Deploy:** `npx vercel deploy --prod --name latticewire` (Astro static output, `dist`); preview deployed first, then production
- **Build env:** `SITE_URL` set to production URL (`https://latticewire.vercel.app`) for production and preview; sitemap/RSS reference it
- **Verify:** production root, `/about/`, and `/sitemap-index.xml` return HTTP 200

## Post-deploy SEO checks (2026-10-23)

- **GSC placeholder:** `public/google-site-verification-PLACEHOLDER.html` committed containing `google-site-verification: google-PLACEHOLDER.html`; README documents replacing with real `googleXXXX.html`. Build env `GSC_VERIFICATION` optionally emits the `<meta name="google-site-verification">` tag (omitted when empty).
- **robots.txt:** allows all (`User-agent: *` / `Allow: /`), no Disallow; `Sitemap:` URL now includes BASE_PATH and resolves on both deploys:
  - Pages: `https://john-the-r-ipper.github.io/latticewire/robots.txt` → sitemap `.../latticewire/sitemap-index.xml`
  - Vercel: `https://latticewire.vercel.app/robots.txt` → sitemap `.../sitemap-index.xml`
- **noindex:** none in source or built output.
- **Playwright checks:** `npm run check:live` (`BASE_URL=<target>`), chromium installed locally (not committed); home, /about/, all 6 post URLs, robots.txt, sitemap-index reachable HTTP 200; no noindex meta on any page.

### Live results

| Target | Result |
|--------|--------|
| GitHub Pages `https://john-the-r-ipper.github.io/latticewire/` | 5/5 passed |
| Vercel prod `https://latticewire.vercel.app/` | 5/5 passed |

CHECKS_PAGES=pass CHECKS_VERCEL=pass
