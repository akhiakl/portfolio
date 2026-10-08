import { describe, expect, it } from "vitest"
import { inspectorProps } from "./inspector"

describe("inspectorProps", () => {
    it("tags fields only when an entry id exists", () => {
        expect(inspectorProps(undefined, "title")).toEqual({})
        expect(inspectorProps("abc", "title")).toEqual({ "data-contentful-entry-id": "abc", "data-contentful-field-id": "title" })
    })
})
