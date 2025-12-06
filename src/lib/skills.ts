export const skillCategories = [
    {
        title: "Languages & Frameworks",
        skills: [
            "JavaScript (ES6+)",
            "TypeScript",
            "React",
            "Next.js",
            "Remix",
            "Node.js",
            "NestJS",
            "Express"
        ],
    },
    {
        title: "Architecture & Performance",
        skills: [
            "Component Design Systems",
            "Micro-frontends",
            "Core Web Vitals",
            "Lighthouse",
            "Bundle Analysis",
            "SSR/ISR",
            "Lazy Loading",
            "Accessibility (WCAG 2.1)"
        ],
    },
    {
        title: "Tools & Infrastructure",
        skills: [
            "Docker",
            "AWS",
            "Contentful",
            "Algolia",
            "CI/CD (GitHub Actions)",
            "Vercel",
            "Storybook",
            "Figma",
            "Builder.io",
            "Salesforce Commerce Cloud"
        ],
    },
]

export type SkillCategory = typeof skillCategories[0]