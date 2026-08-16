import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { AboutSection } from "./about-section"
import { ContactSection } from "./contact-section"
import { CurrentlyBuildingSection } from "./currently-building-section"
import { ExperienceSection } from "./experience-section"
import { Footer } from "./footer"
import { HeroSection } from "./hero-section"
import { Navigation } from "./navigation"
import { ProjectsSection } from "./projects-section"
import { SkillsSection } from "./skills-section"

describe("main site components", () => {
    it("renders navigation and hero content", () => {
        render(
            <>
                <Navigation />
                <HeroSection />
            </>,
        )

        expect(screen.getAllByRole("link", { name: /Resume/i }).length).toBeGreaterThan(0)
        expect(screen.getByText("Akhil K.")).toBeTruthy()
        expect(screen.getByRole("link", { name: "View Work" })).toBeTruthy()
    })

    it("renders about and skills sections", () => {
        render(
            <>
                <AboutSection />
                <SkillsSection />
            </>,
        )

        expect(screen.getByText("About Me")).toBeTruthy()
        expect(screen.getByText("Skills & Technologies")).toBeTruthy()
    })

    it("renders projects, currently building, and experience with tab switching", () => {
        render(
            <>
                <ProjectsSection />
                <CurrentlyBuildingSection />
                <ExperienceSection />
            </>,
        )

        expect(screen.getByText("Featured Projects")).toBeTruthy()
        expect(screen.getByText("SvgIn-React Library")).toBeTruthy()
        expect(screen.getByText("Currently Building")).toBeTruthy()
        expect(screen.getByText("Grand Tour")).toBeTruthy()
        expect(screen.getAllByText("Experience").length).toBeGreaterThan(0)

        const corraTab = screen.getByRole("button", { name: "Corra" })
        fireEvent.click(corraTab)
        expect(screen.getByText("Frontend Lead")).toBeTruthy()
    })

    it("renders contact and footer links", () => {
        render(
            <>
                <ContactSection />
                <Footer />
            </>,
        )

        expect(screen.getByText("Get In Touch")).toBeTruthy()
        expect(screen.getAllByRole("link", { name: "Email" }).length).toBeGreaterThan(0)
        expect(screen.getByText("Built with Next.js & Tailwind CSS")).toBeTruthy()
    })
})
