import { describe, expect, it, vi } from "vitest"

const disable = vi.hoisted(() => vi.fn())
vi.mock("next/headers", () => ({ draftMode: async () => ({ disable }) }))
vi.mock("next/navigation", () => ({
    redirect: (path: string) => {
        throw new Error(`REDIRECT:${path}`)
    },
}))

import { GET } from "./route"

describe("GET /api/draft/disable", () => {
    it("disables draft mode and goes home", async () => {
        await expect(GET()).rejects.toThrow("REDIRECT:/")
        expect(disable).toHaveBeenCalled()
    })
})
