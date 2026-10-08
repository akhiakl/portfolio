import "server-only"
import { cache } from "react"
import { fetchSiteData } from "./client"
import { buildSiteContent, type SiteContent } from "./mappers"

/** Published site content, deduplicated per request. Falls back to content.ts section by section. */
export const getSiteContent = cache(async (): Promise<SiteContent> => {
  return buildSiteContent(await fetchSiteData({ preview: false }))
})
