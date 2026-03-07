import React from "react"
import { act, render } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import { useScrollAnimation } from "./use-scroll-animation"

type EntryLike = { isIntersecting: boolean }

class MockIntersectionObserver {
    static instances: MockIntersectionObserver[] = []
    callback: (entries: EntryLike[]) => void
    observe = vi.fn()
    unobserve = vi.fn()
    disconnect = vi.fn()

    constructor(callback: (entries: EntryLike[]) => void) {
        this.callback = callback
        MockIntersectionObserver.instances.push(this)
    }

    trigger(entries: EntryLike[]) {
        this.callback(entries)
    }
}

function HookProbe({ triggerOnce = true }: { triggerOnce?: boolean }) {
    const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ triggerOnce })
    return <div data-testid="target" ref={ref} data-visible={String(isVisible)} />
}

function NoRefHookProbe() {
    useScrollAnimation<HTMLDivElement>()
    return <div data-testid="no-ref" />
}

describe("useScrollAnimation", () => {
    it("sets visible and unobserves when triggerOnce is true", () => {
        vi.stubGlobal("IntersectionObserver", MockIntersectionObserver as unknown as typeof IntersectionObserver)

        const { getByTestId } = render(<HookProbe />)
        const target = getByTestId("target")
        const instance = MockIntersectionObserver.instances.at(-1)

        expect(instance?.observe).toHaveBeenCalledWith(target)

        act(() => {
            instance?.trigger([{ isIntersecting: true }])
        })

        expect(getByTestId("target").getAttribute("data-visible")).toBe("true")
        expect(instance?.unobserve).toHaveBeenCalledWith(target)
    })

    it("toggles visible false when triggerOnce is false", () => {
        vi.stubGlobal("IntersectionObserver", MockIntersectionObserver as unknown as typeof IntersectionObserver)

        const { getByTestId } = render(<HookProbe triggerOnce={false} />)
        const instance = MockIntersectionObserver.instances.at(-1)

        act(() => {
            instance?.trigger([{ isIntersecting: true }])
        })
        expect(getByTestId("target").getAttribute("data-visible")).toBe("true")

        act(() => {
            instance?.trigger([{ isIntersecting: false }])
        })
        expect(getByTestId("target").getAttribute("data-visible")).toBe("false")
    })

    it("handles non-intersecting entries with triggerOnce default and missing ref", () => {
        vi.stubGlobal("IntersectionObserver", MockIntersectionObserver as unknown as typeof IntersectionObserver)

        const { getByTestId } = render(<HookProbe />)
        const instance = MockIntersectionObserver.instances.at(-1)

        act(() => {
            instance?.trigger([{ isIntersecting: false }])
        })

        expect(getByTestId("target").getAttribute("data-visible")).toBe("false")

        const before = MockIntersectionObserver.instances.length
        render(<NoRefHookProbe />)
        expect(MockIntersectionObserver.instances.length).toBe(before)
    })
})
