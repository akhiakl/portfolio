import { render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

vi.mock("@contentful/live-preview/react", () => ({
    useContentfulLiveUpdates: <T,>(data: T) => data,
    ContentfulLivePreviewProvider: ({ children, locale }: { children: React.ReactNode; locale: string }) => (
        <div data-testid="provider" data-locale={locale}>{children}</div>
    ),
}))

import { LivePreviewProvider } from "./live-preview-provider"
import { LivePreviewSections } from "./live-preview-sections"
import { PreviewBanner } from "./preview-banner"

describe("live preview components", () => {
    it("wraps children in the Contentful provider", () => {
        render(<LivePreviewProvider><span>Inner</span></LivePreviewProvider>)
        expect(screen.getByTestId("provider").getAttribute("data-locale")).toBe("en-US")
        expect(screen.getByText("Inner")).toBeTruthy()
    })

    it("renders live data with inspector tags", () => {
        render(
            <LivePreviewSections
                initialData={{
                    projectCollection: { items: [{ __typename: "Project", sys: { id: "p1" }, title: "Live Project", role: "Creator", description: "Draft copy" }] },
                }}
            />,
        )
        const title = screen.getByText("Live Project").closest("h3")
        expect(title?.getAttribute("data-contentful-entry-id")).toBe("p1")
        expect(title?.getAttribute("data-contentful-field-id")).toBe("title")
        expect(screen.getByText("Akhil K.")).toBeTruthy()
    })

    it("renders fallback content when preview data is missing", () => {
        render(<LivePreviewSections initialData={null} />)
        expect(screen.getByText("Tickd")).toBeTruthy()
    })

    it("renders the exit link", () => {
        render(<PreviewBanner />)
        expect(screen.getByRole("link", { name: "Exit preview" })).toBeTruthy()
    })
})
