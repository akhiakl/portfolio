import { render, screen } from "@testing-library/react"
import { afterEach, describe, expect, it, vi } from "vitest"

describe("app/layout", () => {
    afterEach(() => {
        vi.resetModules()
        delete process.env.NEXT_PUBLIC_GTM_ID
    })

    it("exports metadata based on content", async () => {
        const mod = await import("./layout")
        expect(mod.metadata.title).toContain("Akhil K")
        expect(mod.metadata.description).toContain("Senior frontend engineer")
        expect(mod.metadata.openGraph).toBeTruthy()
    })

    it("renders layout without GTM when env is absent", async () => {
        const mod = await import("./layout")
        const RootLayout = mod.default

        render(
            <RootLayout>
                <div>Child</div>
            </RootLayout>,
        )

        expect(screen.getByText("Child")).toBeTruthy()
        expect(screen.getByTestId("analytics")).toBeTruthy()
        expect(screen.queryByTestId("gtm")).toBeNull()
    })

    it("renders GTM when env is present", async () => {
        process.env.NEXT_PUBLIC_GTM_ID = "GTM-TEST123"
        const mod = await import("./layout")
        const RootLayout = mod.default

        render(
            <RootLayout>
                <div>Child</div>
            </RootLayout>,
        )

        expect(screen.getByTestId("gtm").getAttribute("data-gtm-id")).toBe("GTM-TEST123")
    })
})
