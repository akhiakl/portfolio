# Portfolio

Personal portfolio built with Next.js 16, React 19 and Tailwind CSS 4. All content is managed in [Contentful](https://www.contentful.com), with `src/lib/content.ts` as the built-in fallback.

## Getting started

```bash
pnpm install
cp .env.example .env.local   # optional: without Contentful env vars the site renders content.ts
pnpm dev
```

| Command | Purpose |
| --- | --- |
| `pnpm dev` / `pnpm build` / `pnpm start` | Next.js |
| `pnpm test` / `pnpm coverage` | Vitest |
| `pnpm lint` | ESLint |
| `pnpm cms:setup` | Create the Contentful content model and seed it from `content.ts` |

## Content (Contentful)

- **Delivery**: `src/lib/cms/` fetches everything in one GraphQL query (`query.ts`), cached with `revalidate: 3600` and the `contentful` cache tag.
- **Fallback**: `buildSiteContent` (`mappers.ts`) falls back to `content.ts` per section, so missing env vars, an outage, or an empty content type never break the page.
- **Content model**: `siteSettings` (single entry: hero, about, SEO, contact), `skillCategory`, `experience` -> `experienceRole`, `project`, `currentProject`. List types are sorted by their `order` field. Section titles and navigation stay in code.

### First-time setup

1. In Contentful, create API keys (Settings -> API keys) and a CMA token (Settings -> CMA tokens).
2. Fill `.env.local` from `.env.example`.
3. Run `pnpm cms:setup`. It is idempotent: existing types, entries and assets are skipped.
4. Add the same env vars (except `CONTENTFUL_MANAGEMENT_TOKEN`) to Vercel.

### Live preview

Draft Mode + [Contentful Live Preview](https://github.com/contentful/live-preview) (live updates and inspector mode):

1. Contentful -> Settings -> Content preview -> add a platform with preview URL
   `https://<your-domain>/api/draft/enable?secret=<CONTENTFUL_PREVIEW_SECRET>&path=/`
   and enable it for every content type.
2. Open any entry and use the Live preview tab. Edits appear as you type; click an outlined field on the page to jump to it.
3. Leave preview with the "Exit preview" link (`/api/draft/disable`).

How it works: `/api/draft/enable` checks the secret, enables Draft Mode and re-issues the bypass cookie as `SameSite=None; Secure; Partitioned` so it survives the Contentful iframe. In Draft Mode the page fetches from the Preview API (uncached) and renders `LivePreviewSections`, which feeds the raw response through `useContentfulLiveUpdates`. Inspector mode uses manual `data-contentful-*` tags (`src/lib/cms/inspector.ts`); they are only emitted in preview. `next.config.ts` sends `frame-ancestors` for `app.contentful.com` and `app.eu.contentful.com`.

### Publishing webhook

Contentful -> Settings -> Webhooks -> add `POST https://<your-domain>/api/revalidate` with header `x-revalidate-secret: <CONTENTFUL_REVALIDATE_SECRET>`, triggered on Entry/Asset publish and unpublish. Without it, published changes appear within an hour.
