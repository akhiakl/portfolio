import { render, screen } from "@testing-library/react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { fallbackContent } from "@/lib/cms/mappers"

const draft = vi.hoisted(() => ({ isEnabled: false }))
vi.mock("next/headers", () => ({ draftMode: async () => draft }))
vi.mock("@/lib/cms/get-site-content", () => ({ getSiteContent: async () => fallbackContent }))
vi.mock("@/components/preview/live-preview-provider", () => ({
    LivePreviewProvider: ({ children }: { children: React.ReactNode }) => <div data-testid="live-preview">{children}</div>,
}))

async function renderLayout() {
    const { default: RootLayout } = await import("./layout")
    render(await RootLayout({ children: <div>Child</div> }))
}

describe("app/layout", () => {
    beforeEach(() => {
        draft.isEnabled = false
    })

    afterEach(() => {
        vi.resetModules()
        delete process.env.NEXT_PUBLIC_GTM_ID
    })

    it("builds metadata from site content", async () => {
        const { generateMetadata } = await import("./layout")
        const metadata = await generateMetadata()
        expect(metadata.title).toContain("Akhil K")
        expect(metadata.description).toContain("Lead Frontend Engineer")
        expect(metadata.openGraph).toBeTruthy()
    })

    it("renders layout without GTM or preview provider by default", async () => {
        await renderLayout()
        expect(screen.getByText("Child")).toBeTruthy()
        expect(screen.getByTestId("analytics")).toBeTruthy()
        expect(screen.queryByTestId("gtm")).toBeNull()
        expect(screen.queryByTestId("live-preview")).toBeNull()
    })

    it("renders GTM when env is present", async () => {
        process.env.NEXT_PUBLIC_GTM_ID = "GTM-TEST123"
        await renderLayout()
        expect(screen.getByTestId("gtm").getAttribute("data-gtm-id")).toBe("GTM-TEST123")
    })

    it("wraps children in the live preview provider in draft mode", async () => {
        draft.isEnabled = true
        await renderLayout()
        expect(screen.getByTestId("live-preview").textContent).toBe("Child")
    })
})
