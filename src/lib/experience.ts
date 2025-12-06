export const experiences = [
    {
        company: "Publicis Sapient",
        role: "Lead Experience Engineer",
        period: "Aug 2022 — Present",
        location: "Remote, India",
        note: "Joined through Corra, acquired by Publicis Sapient in June 2023",
        description: [
            "Architected a modular React + TypeScript foundation used across multiple enterprise stores; established CI pipelines and component scaffolding to accelerate delivery.",
            "Built 50+ accessible, themeable UI components and integrated Figma tokens, improving delivery predictability and visual consistency.",
            "Reduced perceived load (measured LCP/FCP/TTI) by 25–40% across client sites through targeted bundle-splitting, image strategy, SSR/ISR tuning and caching.",
            "Implemented performance gates in CI (automated Lighthouse checks) and introduced a bundle visualizer to prevent regressions in production.",
            "Mentored engineers and led code-review standards; championed TypeScript-first workflows and automated tests."
        ],
    },
    {
        company: "Corra",
        role: "Frontend Engineer",
        period: "Jan 2022 — July 2022",
        location: "Remote, India",
        description: [
            "Engineered key features across React-based storefronts, collaborating with design and backend teams to ship scalable, high-quality user experiences.",
            "Introduced reusable UI patterns and component abstractions that accelerated delivery velocity and improved consistency across multiple projects."
        ],
    },
    {
        company: "Bititude Technologies",
        role: "Full Stack Developer",
        period: "Aug 2017 — Dec 2021",
        location: "Kozhikode, India",
        description: [
            "Delivered multiple client-facing applications using React, Angular and Node.js; led a 5+ developer team for feature delivery and maintenance.",
            "Designed modular Redux/TS architectures and migrated legacy codebases to modern React stacks with code-splitting and lazy loading.",
            "Built REST APIs, integrated databases (Postgres, MongoDB) and improved query performance for high-throughput endpoints."
        ],
    },
]

export type Experience = typeof experiences[0]