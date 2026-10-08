import { describe, expect, it, vi } from "vitest"

vi.mock("./client", () => ({ fetchSiteData: vi.fn(async () => null) }))

import { fetchSiteData } from "./client"
import { getSiteContent } from "./get-site-content"
import { fallbackContent } from "./mappers"

describe("getSiteContent", () => {
    it("requests published data and falls back to local content", async () => {
        expect(await getSiteContent()).toBe(fallbackContent)
        expect(fetchSiteData).toHaveBeenCalledWith({ preview: false })
    })
})
