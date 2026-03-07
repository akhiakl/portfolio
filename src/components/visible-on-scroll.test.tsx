import React from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import VisibleOnScroll from "./visible-on-scroll"

vi.mock("@/hooks/use-scroll-animation", () => ({
    useScrollAnimation: vi.fn(() => ({ ref: { current: null }, isVisible: true })),
}))

describe("VisibleOnScroll", () => {
    it("renders visible container with custom component", () => {
        render(
            <VisibleOnScroll as="section" data-testid="root" className="outer" containerClassName="inner">
                <p>Child</p>
            </VisibleOnScroll>,
        )

        const root = screen.getByTestId("root")
        expect(root.tagName).toBe("SECTION")
        expect(root.className).toContain("outer")
        expect(screen.getByText("Child").parentElement?.className).toContain("opacity-100")
        expect(screen.getByText("Child").parentElement?.className).toContain("inner")
    })

    it("renders hidden state class", async () => {
        const { useScrollAnimation } = await import("@/hooks/use-scroll-animation")
        vi.mocked(useScrollAnimation).mockReturnValueOnce({ ref: { current: null }, isVisible: false })

        render(<VisibleOnScroll><p>Hidden</p></VisibleOnScroll>)

        expect(screen.getByText("Hidden").parentElement?.className).toContain("opacity-0")
    })
})
