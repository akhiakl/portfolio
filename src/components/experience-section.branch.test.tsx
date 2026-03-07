import { render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

vi.mock("@/lib/content", () => ({
    sectionTitles: {
        experience: { number: "04", title: "Experience" },
    },
    experiences: [
        {
            company: "Mock Co",
            roles: [
                {
                    role: "Engineer",
                    period: "2024",
                    description: ["Did work"],
                },
                {
                    role: "Senior Engineer",
                    period: "2025",
                    description: ["Did more work"],
                    note: "Leadership track",
                    location: "Remote",
                },
            ],
        },
    ],
}))

vi.mock("./visible-on-scroll", () => ({
    default: ({ children }: { children: React.ReactNode }) => <section>{children}</section>,
}))

import { ExperienceSection } from "./experience-section"

describe("ExperienceSection branch coverage", () => {
    it("renders role without location or note", () => {
        render(<ExperienceSection />)

        expect(screen.getByText("Engineer")).toBeTruthy()
        expect(screen.getByText("Did work")).toBeTruthy()
        expect(screen.getByText("Senior Engineer")).toBeTruthy()
        expect(screen.getByText("Leadership track")).toBeTruthy()
    })
})
