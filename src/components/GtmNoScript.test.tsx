import { describe, expect, it } from "vitest"
import GtmNoScript from "./GtmNoScript"

describe("GtmNoScript", () => {
    it("renders noscript iframe with GTM id", () => {
        const element = GtmNoScript({ gtmId: "GTM-ABC123" })
        expect(element.type).toBe("noscript")

        const iframe = element.props.children
        expect(iframe.type).toBe("iframe")
        expect(iframe.props.src).toContain("GTM-ABC123")
        expect(iframe.props.height).toBe("0")
        expect(iframe.props.width).toBe("0")
    })
})
