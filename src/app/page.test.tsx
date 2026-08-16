import { render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

vi.mock("@/components/navigation", () => ({ Navigation: () => <div>NavigationMock</div> }))
vi.mock("@/components/hero-section", () => ({ HeroSection: () => <div>HeroMock</div> }))
vi.mock("@/components/about-section", () => ({ AboutSection: () => <div>AboutMock</div> }))
vi.mock("@/components/skills-section", () => ({ SkillsSection: () => <div>SkillsMock</div> }))
vi.mock("@/components/projects-section", () => ({ ProjectsSection: () => <div>ProjectsMock</div> }))
vi.mock("@/components/currently-building-section", () => ({ CurrentlyBuildingSection: () => <div>CurrentlyBuildingMock</div> }))
vi.mock("@/components/experience-section", () => ({ ExperienceSection: () => <div>ExperienceMock</div> }))
vi.mock("@/components/contact-section", () => ({ ContactSection: () => <div>ContactMock</div> }))
vi.mock("@/components/footer", () => ({ Footer: () => <div>FooterMock</div> }))

import Home from "./page"

describe("app/page", () => {
    it("renders all home sections", () => {
        render(<Home />)

        expect(screen.getByText("NavigationMock")).toBeTruthy()
        expect(screen.getByText("HeroMock")).toBeTruthy()
        expect(screen.getByText("AboutMock")).toBeTruthy()
        expect(screen.getByText("SkillsMock")).toBeTruthy()
        expect(screen.getByText("ProjectsMock")).toBeTruthy()
        expect(screen.getByText("CurrentlyBuildingMock")).toBeTruthy()
        expect(screen.getByText("ExperienceMock")).toBeTruthy()
        expect(screen.getByText("ContactMock")).toBeTruthy()
        expect(screen.getByText("FooterMock")).toBeTruthy()
    })
})
