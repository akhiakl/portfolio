"use client"

import { ContentfulLivePreviewProvider } from "@contentful/live-preview/react"
import type { ReactNode } from "react"
import { CONTENTFUL_LOCALE } from "@/lib/cms/config"

// Mounted only while Draft Mode is on, so the SDK never loads for regular visitors.
export function LivePreviewProvider({ children }: { children: ReactNode }) {
  return (
    <ContentfulLivePreviewProvider locale={CONTENTFUL_LOCALE} enableInspectorMode enableLiveUpdates>
      {children}
    </ContentfulLivePreviewProvider>
  )
}
