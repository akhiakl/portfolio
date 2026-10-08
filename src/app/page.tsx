import { draftMode } from "next/headers"
import { SiteSections } from "@/components/site-sections"
import { LivePreviewSections } from "@/components/preview/live-preview-sections"
import { PreviewBanner } from "@/components/preview/preview-banner"
import { fetchSiteData } from "@/lib/cms/client"
import { getSiteContent } from "@/lib/cms/get-site-content"

export default async function Home() {
  const { isEnabled: preview } = await draftMode()

  if (preview) {
    const initialData = await fetchSiteData({ preview: true })
    return (
      <main className="min-h-screen">
        <LivePreviewSections initialData={initialData} />
        <PreviewBanner />
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <SiteSections content={await getSiteContent()} />
    </main>
  )
}
