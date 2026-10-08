import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { fetchSiteData } from "./client"

const fetchMock = vi.fn()

describe("fetchSiteData", () => {
    beforeEach(() => {
        vi.stubGlobal("fetch", fetchMock)
        vi.spyOn(console, "error").mockImplementation(() => {})
        process.env.CONTENTFUL_SPACE_ID = "space"
        process.env.CONTENTFUL_ACCESS_TOKEN = "delivery"
        process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN = "preview"
    })

    afterEach(() => {
        fetchMock.mockReset()
        vi.restoreAllMocks()
        delete process.env.CONTENTFUL_SPACE_ID
        delete process.env.CONTENTFUL_ACCESS_TOKEN
        delete process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
        delete process.env.CONTENTFUL_ENVIRONMENT
    })

    it("returns null without configuration", async () => {
        delete process.env.CONTENTFUL_SPACE_ID
        expect(await fetchSiteData({ preview: false })).toBeNull()
        expect(fetchMock).not.toHaveBeenCalled()
    })

    it("fetches published content with cache tags", async () => {
        fetchMock.mockResolvedValue(new Response(JSON.stringify({ data: { projectCollection: { items: [] } } })))
        const data = await fetchSiteData({ preview: false })
        expect(data).toEqual({ projectCollection: { items: [] } })
        const [url, init] = fetchMock.mock.calls[0]
        expect(url).toBe("https://graphql.contentful.com/content/v1/spaces/space/environments/master")
        expect(init.headers.Authorization).toBe("Bearer delivery")
        expect(init.next).toEqual({ revalidate: 3600, tags: ["contentful"] })
        expect(JSON.parse(init.body).variables).toEqual({ preview: false, locale: "en-US" })
    })

    it("fetches preview content uncached with the preview token", async () => {
        process.env.CONTENTFUL_ENVIRONMENT = "staging"
        fetchMock.mockResolvedValue(new Response(JSON.stringify({ data: null, errors: [{ message: "boom" }] })))
        expect(await fetchSiteData({ preview: true })).toBeNull()
        const [url, init] = fetchMock.mock.calls[0]
        expect(url).toContain("/environments/staging")
        expect(init.headers.Authorization).toBe("Bearer preview")
        expect(init.cache).toBe("no-store")
        expect(console.error).toHaveBeenCalledWith("Contentful GraphQL errors:", "boom")
    })

    it("returns null on HTTP errors and network failures", async () => {
        fetchMock.mockResolvedValueOnce(new Response("nope", { status: 500, statusText: "Server Error" }))
        expect(await fetchSiteData({ preview: false })).toBeNull()
        fetchMock.mockRejectedValueOnce(new Error("offline"))
        expect(await fetchSiteData({ preview: false })).toBeNull()
    })
})
