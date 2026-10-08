import { render, screen } from "@testing-library/react"
import { beforeEach, describe, expect, it, vi } from "vitest"
import { fallbackContent } from "@/lib/cms/mappers"

const draft = vi.hoisted(() => ({ isEnabled: false }))
const fetchSiteData = vi.hoisted(() => vi.fn())
vi.mock("next/headers", () => ({ draftMode: async () => draft }))
vi.mock("@/lib/cms/client", () => ({ fetchSiteData }))
vi.mock("@/lib/cms/get-site-content", () => ({ getSiteContent: async () => fallbackContent }))
vi.mock("@/components/site-sections", () => ({
    SiteSections: ({ content }: { content: typeof fallbackContent }) => <div>Sections:{content.personalInfo.name}</div>,
}))
vi.mock("@/components/preview/live-preview-sections", () => ({
    LivePreviewSections: ({ initialData }: { initialData: unknown }) => <div>Live:{JSON.stringify(initialData)}</div>,
}))

import Home from "./page"

describe("app/page", () => {
    beforeEach(() => {
        draft.isEnabled = false
        fetchSiteData.mockReset()
    })

    it("renders published content", async () => {
        render(await Home())
        expect(screen.getByText("Sections:Akhil K")).toBeTruthy()
        expect(screen.queryByText(/Preview mode/)).toBeNull()
        expect(fetchSiteData).not.toHaveBeenCalled()
    })

    it("renders live preview with preview data in draft mode", async () => {
        draft.isEnabled = true
        fetchSiteData.mockResolvedValue({ projectCollection: null })
        render(await Home())
        expect(fetchSiteData).toHaveBeenCalledWith({ preview: true })
        expect(screen.getByText('Live:{"projectCollection":null}')).toBeTruthy()
        expect(screen.getByRole("link", { name: "Exit preview" }).getAttribute("href")).toBe("/api/draft/disable")
    })
})
