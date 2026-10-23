# Latticewire

Latticewire is a static Astro blog about messaging commerce and chat-order operations.

Operated by [OnlyOrders](https://onlyorders.tech) for educational / SEO content (see `/about`).

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
SITE_URL=https://john-the-r-ipper.github.io BASE_PATH=/latticewire/ npm run build
```

GitHub Pages deploys via `.github/workflows/pages.yml` on push to `main`.

## Google Search Console

A placeholder verification file `public/google-site-verification-PLACEHOLDER.html` is committed.
When a real verification token is supplied, replace it with the token file `googleXXXX.html`
(named per Google's instructions) in `public/`. Optionally set the build env `GSC_VERIFICATION`
to the token value to emit a `<meta name="google-site-verification">` tag (omitted when empty).
