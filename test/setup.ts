import React from "react"
import { cleanup } from "@testing-library/react"
import { vi } from "vitest"
import { afterEach } from "vitest"

afterEach(() => {
    cleanup()
})

vi.mock("next/image", () => ({
    default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
        const { alt = "", ...rest } = props
        return React.createElement("img", { alt, ...rest })
    },
}))

vi.mock("@vercel/analytics/next", () => ({
    Analytics: () => React.createElement("div", { "data-testid": "analytics" }),
}))

vi.mock("@next/third-parties/google", () => ({
    GoogleTagManager: ({ gtmId }: { gtmId: string }) => React.createElement("div", { "data-testid": "gtm", "data-gtm-id": gtmId }),
}))

class NoopIntersectionObserver {
    observe() { }
    unobserve() { }
    disconnect() { }
}

vi.stubGlobal("IntersectionObserver", NoopIntersectionObserver)
