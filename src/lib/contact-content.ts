import { personalInfo } from "./personal-info"

export const contactContent = {
    sectionNumber: "05",
    preTitle: "What's Next?",
    title: "Get In Touch",

    description: "I'm currently open to new opportunities and interesting projects. Whether you have a question, want to collaborate, or just want to say hi, feel free to reach out.",

    primaryCta: {
        text: "Say Hello",
        href: `mailto:${personalInfo.contact.email}`,
        icon: "Mail"
    },

    socialLinks: [
        {
            name: "Email",
            href: `mailto:${personalInfo.contact.email}`,
            icon: "Mail",
            label: "Email"
        },
        {
            name: "LinkedIn",
            href: personalInfo.contact.linkedin,
            icon: "Linkedin",
            label: "LinkedIn",
            external: true
        },
        {
            name: "GitHub",
            href: personalInfo.contact.github,
            icon: "Github",
            label: "GitHub",
            external: true
        }
    ]
}

export type ContactContent = typeof contactContent