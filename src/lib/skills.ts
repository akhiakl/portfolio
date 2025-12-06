export const skillCategories = [
    {
        title: "Frontend",
        skills: [
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Styled Components",
            "shadcn/ui",
            "Webpack",
            "Vite",
            "Storybook",
        ],
    },
    {
        title: "Backend",
        skills: ["Node.js", "Express", "NestJS", "PostgreSQL", "MongoDB", "GraphQL", "REST APIs"],
    },
    {
        title: "Tools & DevOps",
        skills: ["Git", "Docker", "AWS", "Vercel", "CI/CD", "Jest", "React Testing Library"],
    },
]

export type SkillCategory = typeof skillCategories[0]