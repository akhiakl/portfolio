import { personalInfo } from "./personal-info"

export const sectionTitles = {
    about: {
        number: "01",
        title: "About Me"
    },
    skills: {
        number: "02",
        title: "Skills & Technologies"
    },
    projects: {
        number: "03",
        title: "Featured Projects"
    },
    experience: {
        number: "04",
        title: "Experience"
    },
    contact: {
        number: "05",
        title: "Get In Touch"
    }
}

export const navigationLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Work", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
]

export const footerContent = {
    socialLinks: [
        {
            name: "GitHub",
            href: personalInfo.contact.github,
            icon: "Github",
            label: "GitHub"
        },
        {
            name: "LinkedIn",
            href: personalInfo.contact.linkedin,
            icon: "Linkedin",
            label: "LinkedIn"
        },
        {
            name: "Email",
            href: `mailto:${personalInfo.contact.email}`,
            icon: "Mail",
            label: "Email"
        }
    ],

    copyright: `Built with Next.js & Tailwind CSS`,
    builtBy: `Designed & Built by ${personalInfo.name}`
}

export type SectionTitles = typeof sectionTitles
export type NavigationLinks = typeof navigationLinks
export type FooterContent = typeof footerContent