export const achievements = [
    {
        title: "Performance Leadership",
        description: "Delivered measurable Core Web Vitals improvements and integrated automated performance checks into CI for enterprise clients.",
        metrics: "25-40% reduction in perceived load times"
    },
    {
        title: "Engineering Culture",
        description: "Standardized TypeScript-first patterns and testing practices across multiple teams, reducing onboarding time and regressions.",
        metrics: "Reduced team onboarding time"
    },
    {
        title: "Accessibility Champion",
        description: "Introduced automated accessibility checks and improved keyboard/contrast compliance across critical user flows.",
        metrics: "WCAG 2.1 compliance across enterprise products"
    },
    {
        title: "Architecture & Scalability",
        description: "Architected modular React + TypeScript foundations used across multiple enterprise stores with established CI pipelines.",
        metrics: "50+ reusable components built"
    }
]

export const education = {
    degree: "B.Tech, Computer Science and Engineering",
    institution: "Cochin University of Science and Technology",
    location: "Kerala, India"
}

export const certifications = [
    {
        name: "Adobe Experience Manager Edge Delivery Services",
        level: "Developer Professional",
        issuer: "Adobe"
    },
    {
        name: "DGDI – Diploma in Game Design and Integration",
        issuer: "Game Design Institute"
    }
]

export const languages = [
    {
        language: "English",
        proficiency: "Professional"
    },
    {
        language: "Malayalam",
        proficiency: "Native"
    }
]

export type Achievement = typeof achievements[0]
export type Education = typeof education
export type Certification = typeof certifications[0]
export type Language = typeof languages[0]