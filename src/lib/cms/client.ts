import "server-only"
import { CONTENTFUL_LOCALE, CONTENTFUL_TAG } from "./config"
import { SITE_CONTENT_QUERY } from "./query"
import type { RawSiteData } from "./types"

const REVALIDATE_SECONDS = 3600

/**
 * Fetches all site content from the Contentful GraphQL API.
 * Returns null when Contentful is not configured or the request fails, so callers fall back to local content.
 * Preview requests use the Content Preview token and are never cached.
 */
export async function fetchSiteData({ preview }: { preview: boolean }): Promise<RawSiteData | null> {
  const space = process.env.CONTENTFUL_SPACE_ID
  const environment = process.env.CONTENTFUL_ENVIRONMENT ?? "master"
  const token = preview ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN : process.env.CONTENTFUL_ACCESS_TOKEN
  if (!space || !token) return null

  try {
    const res = await fetch(`https://graphql.contentful.com/content/v1/spaces/${space}/environments/${environment}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ query: SITE_CONTENT_QUERY, variables: { preview, locale: CONTENTFUL_LOCALE } }),
      ...(preview ? { cache: "no-store" as const } : { next: { revalidate: REVALIDATE_SECONDS, tags: [CONTENTFUL_TAG] } }),
    })
    if (!res.ok) {
      console.error(`Contentful request failed: ${res.status} ${res.statusText}`)
      return null
    }
    const json = (await res.json()) as { data?: RawSiteData | null; errors?: { message: string }[] }
    if (json.errors?.length) {
      console.error("Contentful GraphQL errors:", json.errors.map((e) => e.message).join("; "))
    }
    return json.data ?? null
  } catch (error) {
    console.error("Contentful request threw:", error)
    return null
  }
}
