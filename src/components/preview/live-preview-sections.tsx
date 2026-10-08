"use client"

import { useContentfulLiveUpdates } from "@contentful/live-preview/react"
import { buildSiteContent } from "@/lib/cms/mappers"
import type { RawSiteData } from "@/lib/cms/types"
import { SiteSections } from "../site-sections"

// Re-renders the page as editors type in Contentful, using the raw (untransformed) preview response.
export function LivePreviewSections({ initialData }: { initialData: RawSiteData | null }) {
  const data = useContentfulLiveUpdates(initialData)
  return <SiteSections content={buildSiteContent(data, { withEntryIds: true })} />
}
