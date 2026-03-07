import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { GameLoader } from "./game-loader"

describe("GameLoader", () => {
    it("shows CTA before load", () => {
        render(<GameLoader />)

        expect(screen.getByRole("button", { name: "Click to play Space Invaders game" })).toBeTruthy()
        expect(screen.getByText("play game")).toBeTruthy()
    })

    it("loads game after click", async () => {
        const { container } = render(<GameLoader />)
        fireEvent.click(screen.getByRole("button", { name: "Click to play Space Invaders game" }))

        await waitFor(() => {
            expect(container.querySelector("canvas")).toBeTruthy()
        })
    })
})
