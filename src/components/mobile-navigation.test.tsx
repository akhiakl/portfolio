import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { MobileNavigation } from "./mobile-navigation"

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
]

describe("MobileNavigation", () => {
    it("toggles menu and closes on link click", () => {
        render(<MobileNavigation navLinks={navLinks} />)

        const toggle = screen.getByRole("button", { name: "Toggle menu" })
        expect(toggle.getAttribute("aria-expanded")).toBe("false")

        fireEvent.click(toggle)
        expect(toggle.getAttribute("aria-expanded")).toBe("true")
        expect(document.body.style.overflow).toBe("hidden")

        fireEvent.click(screen.getByRole("link", { name: /About/i }))
        expect(toggle.getAttribute("aria-expanded")).toBe("false")
        expect(document.body.style.overflow).toBe("")
    })

    it("closes on Escape key", () => {
        render(<MobileNavigation navLinks={navLinks} />)

        const toggle = screen.getByRole("button", { name: "Toggle menu" })
        fireEvent.click(toggle)
        fireEvent.keyDown(window, { key: "Enter" })
        expect(toggle.getAttribute("aria-expanded")).toBe("true")

        fireEvent.keyDown(window, { key: "Escape" })

        expect(toggle.getAttribute("aria-expanded")).toBe("false")

        fireEvent.click(toggle)
        fireEvent.click(screen.getAllByRole("link", { name: /Resume/i })[0])
        expect(toggle.getAttribute("aria-expanded")).toBe("false")
    })
})
