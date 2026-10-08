import { afterEach, describe, expect, it, vi } from "vitest"

const revalidateTag = vi.hoisted(() => vi.fn())
vi.mock("next/cache", () => ({ revalidateTag }))

import { POST } from "./route"

const request = (secret?: string) =>
    new Request("https://site.test/api/revalidate", { method: "POST", headers: secret ? { "x-revalidate-secret": secret } : {} })

describe("POST /api/revalidate", () => {
    afterEach(() => {
        delete process.env.CONTENTFUL_REVALIDATE_SECRET
        revalidateTag.mockReset()
    })

    it("rejects missing or wrong secrets", async () => {
        expect((await POST(request("x"))).status).toBe(401)
        process.env.CONTENTFUL_REVALIDATE_SECRET = "hook"
        expect((await POST(request())).status).toBe(401)
        expect(revalidateTag).not.toHaveBeenCalled()
    })

    it("expires the contentful tag", async () => {
        process.env.CONTENTFUL_REVALIDATE_SECRET = "hook"
        const res = await POST(request("hook"))
        expect(res.status).toBe(200)
        expect(await res.json()).toMatchObject({ revalidated: true })
        expect(revalidateTag).toHaveBeenCalledWith("contentful", { expire: 0 })
    })
})
