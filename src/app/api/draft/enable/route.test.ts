import { NextRequest } from "next/server"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

const enable = vi.hoisted(() => vi.fn())
const set = vi.hoisted(() => vi.fn())
const bypass = vi.hoisted(() => ({ value: { name: "__prerender_bypass", value: "token" } as { name: string; value: string } | undefined }))
vi.mock("next/headers", () => ({
    draftMode: async () => ({ enable }),
    cookies: async () => ({ get: () => bypass.value, set }),
}))
vi.mock("next/navigation", () => ({
    redirect: (path: string) => {
        throw new Error(`REDIRECT:${path}`)
    },
}))

import { GET } from "./route"

const request = (query: string) => new NextRequest(`https://site.test/api/draft/enable${query}`)

describe("GET /api/draft/enable", () => {
    beforeEach(() => {
        process.env.CONTENTFUL_PREVIEW_SECRET = "s3cret"
        bypass.value = { name: "__prerender_bypass", value: "token" }
    })

    afterEach(() => {
        delete process.env.CONTENTFUL_PREVIEW_SECRET
        enable.mockReset()
        set.mockReset()
    })

    it("rejects a wrong or unconfigured secret", async () => {
        expect((await GET(request("?secret=nope"))).status).toBe(401)
        delete process.env.CONTENTFUL_PREVIEW_SECRET
        expect((await GET(request("?secret="))).status).toBe(401)
        expect(enable).not.toHaveBeenCalled()
    })

    it("rejects paths that would redirect off-site", async () => {
        for (const path of ["https://evil.test", "//evil.test", "/\\evil.test"]) {
            expect((await GET(request(`?secret=s3cret&path=${encodeURIComponent(path)}`))).status).toBe(400)
        }
    })

    it("enables draft mode, makes the cookie iframe-safe and redirects", async () => {
        await expect(GET(request("?secret=s3cret&path=/"))).rejects.toThrow("REDIRECT:/")
        expect(enable).toHaveBeenCalled()
        expect(set).toHaveBeenCalledWith(expect.objectContaining({ name: "__prerender_bypass", value: "token", sameSite: "none", secure: true, partitioned: true }))
    })

    it("defaults to the home page and skips the cookie rewrite when absent", async () => {
        bypass.value = undefined
        await expect(GET(request("?secret=s3cret"))).rejects.toThrow("REDIRECT:/")
        expect(set).not.toHaveBeenCalled()
    })
})
