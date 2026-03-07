import React from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import {
    AnimatedElement,
    ScrollAnimationSection,
    useScrollVisibility,
} from "./scroll-animation-section"

vi.mock("@/hooks/use-scroll-animation", () => ({
    useScrollAnimation: vi.fn(() => ({ ref: { current: null }, isVisible: true })),
}))

function VisibilityProbe() {
    const visible = useScrollVisibility()
    return <span data-testid="visible">{String(visible)}</span>
}

describe("ScrollAnimationSection", () => {
    it("renders visible state classes", () => {
        render(
            <ScrollAnimationSection as="section" data-testid="section" className="custom">
                <VisibilityProbe />
                <AnimatedElement delay={120} className="item">Hello</AnimatedElement>
            </ScrollAnimationSection>,
        )

        const section = screen.getByTestId("section")
        expect(section.className).toContain("opacity-100")
        expect(section.className).toContain("custom")
        expect(screen.getByTestId("visible").textContent).toBe("true")

        const item = screen.getByText("Hello")
        expect(item.className).toContain("opacity-100")
        expect(item.getAttribute("style")).toContain("120ms")
    })

    it("renders hidden state classes", async () => {
        const { useScrollAnimation } = await import("@/hooks/use-scroll-animation")
        vi.mocked(useScrollAnimation).mockReturnValueOnce({ ref: { current: null }, isVisible: false })

        render(
            <ScrollAnimationSection data-testid="hidden-root">
                <AnimatedElement>World</AnimatedElement>
            </ScrollAnimationSection>,
        )

        expect(screen.getByTestId("hidden-root").className).toContain("opacity-0")
        expect(screen.getByText("World").className).toContain("opacity-0")
    })
})
