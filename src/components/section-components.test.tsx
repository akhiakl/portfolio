import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { AboutSection } from "./about-section"
import { ContactSection } from "./contact-section"
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
        expect(screen.getByText("AKHIL_K.")).toBeTruthy()
        expect(screen.getByText("Architecting Digital Infrastructures")).toBeTruthy()
        expect(screen.getByRole("link", { name: "VIEW_WORKS" })).toBeTruthy()
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

    it("renders projects and experience with tab switching", () => {
        render(
            <>
                <ProjectsSection />
                <ExperienceSection />
            </>,
        )

        expect(screen.getByText("Featured Projects")).toBeTruthy()
        expect(screen.getByText("SvgIn-React Library")).toBeTruthy()
        expect(screen.getAllByText("Experience").length).toBeGreaterThan(0)
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
        expect(screen.getByText("©2026 AKHIL_K // EXECUTING_SUCCESS")).toBeTruthy()
    })
})
