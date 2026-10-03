// ============================================================================
// PORTFOLIO CONTENT - SINGLE SOURCE OF TRUTH
// ============================================================================
// All website content consolidated in one place for easy editing
// Last updated from resume: March 2026

// ============================================================================
// PERSONAL INFORMATION
// ============================================================================

export const personalInfo = {
    name: "Akhil K",
    title: "Lead Frontend Engineer | Frontend Architecture",
    tagline: "Architecting scalable web platforms, design systems, and distributed commerce architectures.",
    description: "Lead Frontend Engineer with 8+ years of experience designing multi-team web platforms, headless commerce solutions, and resilient frontend systems. Based in India, collaborating regularly with distributed teams across European and global time zones (GMT / CET overlap).",

    // Contact information  
    contact: {
        email: "akhilk4k@gmail.com",
        phone: "+91-9567706055",
        location: "Malappuram, Kerala, India",
        github: "https://github.com/akhiakl",
        linkedin: "https://www.linkedin.com/in/akhiakl/",
    },

    // SEO Meta
    seo: {
        title: "Akhil K | Lead Frontend Engineer | Frontend Architecture",
        description: "Lead Frontend Engineer with 8+ years designing multi-team web platforms, design systems, and headless commerce architectures with React, Next.js, TypeScript, and Node.js. Working with distributed teams across European and global time zones.",
        keywords: [
            "Akhil K",
            "Lead Frontend Engineer",
            "Frontend Architect",
            "Frontend Architecture",
            "React Developer",
            "Next.js Developer",
            "TypeScript",
            "JavaScript",
            "Full Stack Developer",
            "Shopify Developer",
            "Commerce Platforms",
            "Design Systems",
            "Headless Commerce",
            "Accessibility",
            "Remote Frontend Engineer",
            "Frontend Portfolio",
            "System Design"
        ],
        author: "Akhil K",
        url: "https://akhiakl.in",
        siteName: "Akhil K Portfolio",
        twitterHandle: "@akhiakl",
        locale: "en_US"
    },

    // Hero section content
    hero: {
        greeting: "Hi, my name is",
        name: "Akhil K.",
        role: "Lead Frontend Engineer | Frontend Architecture",
        tagline: "Architecting scalable web platforms, design systems, and distributed commerce architectures.",
        description: "Lead Frontend Engineer with 8+ years of experience designing multi-team web platforms, headless commerce solutions, and resilient frontend systems. Based in India, collaborating regularly with distributed teams across European and global time zones (GMT / CET overlap).",
        primaryCta: {
            text: "View Architecture & Work",
            href: "#projects"
        },
        secondaryCta: {
            text: "Get in Touch",
            href: "#contact"
        },
        image: {
            src: "/images/akhil-portrait.webp",
            alt: "Akhil K - Lead Frontend Engineer"
        }
    }
}

// ============================================================================
// ABOUT SECTION
// ============================================================================

export const aboutContent = {
    sectionNumber: "01",
    title: "About Me",

    paragraphs: [
        {
            text: "I am a ",
            highlight: "Lead Frontend Engineer",
            continuation: " specializing in frontend architecture, design systems, and enterprise web platforms using React, Next.js, TypeScript, and Node.js."
        },
        {
            text: "Over the past 8+ years, I have led technical architecture for multi-team platforms, established shared component ecosystems, and designed ",
            highlight: "Backend-for-Frontend (BFF) layers",
            continuation: " that bridge complex microservices. My work focuses on building sustainable frontend foundations, prioritizing performance, strict accessibility (WCAG 2.1 compliance), automated testing, and developer velocity across distributed engineering teams."
        }
    ],

    technologies: {
        title: "Focus Areas",
        items: [
            "Frontend Architecture",
            "Design Systems",
            "BFF & API Design",
            "Headless Commerce",
            "Accessibility (WCAG 2.1)",
            "Automated Testing"
        ]
    },
}

// ============================================================================
// SKILLS SECTION
// ============================================================================

export const skillCategories = [
    {
        title: "Architecture & System Design",
        skills: [
            "Frontend Architecture",
            "Product Architecture",
            "System Design",
            "BFF Patterns",
            "Microfrontends",
            "API Design (REST/GraphQL)",
            "Design Systems",
            "Multi-brand Theming"
        ],
    },
    {
        title: "Frontend Core",
        skills: [
            "React",
            "Next.js (App Router, SSR/ISR)",
            "TypeScript",
            "JavaScript (ES6+)",
            "State Management (Redux, MobX, Context)"
        ],
    },
    {
        title: "Backend & Integrations",
        skills: [
            "Node.js",
            "NestJS",
            "Express",
            "GraphQL",
            "REST APIs",
            "Webhooks",
            "PostgreSQL",
            "AWS (SQS, S3, EC2)",
            "Redis"
        ],
    },
    {
        title: "Commerce & CMS",
        skills: [
            "Shopify (Storefront & Admin APIs, Custom Apps)",
            "Adobe Commerce (Magento)",
            "Salesforce Commerce",
            "Contentful",
            "Builder.io",
            "Algolia",
            "Adyen",
            "Stripe"
        ],
    },
    {
        title: "Quality & Reliability",
        skills: [
            "Playwright (E2E)",
            "Vitest",
            "Jest",
            "Testing Library",
            "axe-core",
            "WCAG 2.1 Accessibility Compliance",
            "CI/CD (GitHub Actions)",
            "Lint-staged",
            "Husky"
        ],
    },
]

// ============================================================================
// EXPERIENCE SECTION
// ============================================================================

export type Experience = {
    company: string;
    roles: {
        role: string;
        period: string;
        location: string;
        note?: string;
        description: string[];
    }[];
}

export const experiences: Experience[] = [
    {
        company: "Publicis Sapient",
        roles: [
            {
                role: "Lead Experience Engineer",
                period: "Jun 2023 — Present",
                location: "Remote, India",
                note: "Joined through Corra, acquired by Publicis Sapient in June 2023",
                description: [
                    "Lead frontend architecture for a multi-storefront headless commerce ecosystem for a Fortune 50 global automotive enterprise, supporting 5+ parallel engineering teams across React, Next.js, TypeScript, and Shopify Storefront APIs.",
                    "Architected a custom Node.js middleware layer orchestrating catalog, pricing, and inventory synchronization across distributed microservices and AWS SQS event streams.",
                    "Spearheaded enterprise commerce modernization from legacy HCL Commerce to Shopify for a leading national telecommunications provider in the Middle East.",
                    "Formulated shared component library and design system governance, cutting UI duplication across independent team deployments.",
                    "Conduct architecture RFCs, set automated quality and accessibility benchmarks, and mentor 4+ frontend engineers."
                ],
            }
        ]
    },
    {
        company: "Corra",
        roles: [
            {
                role: "Frontend Lead",
                period: "Jan 2022 — May 2023",
                location: "Remote, India",
                description: [
                    "Led frontend architecture across multi-brand enterprise commerce engagements.",
                    "Designed a Backend-for-Frontend (BFF) architecture and multi-tenant theming system for a global luxury watch brand group, integrating Salesforce Commerce, Algolia Search, Adyen, and Builder.io.",
                    "Established API contract standards and CI/CD deployment workflows in close coordination with backend and DevOps teams."
                ],
            }
        ]
    },
    {
        company: "Bititude Technologies",
        roles: [{
            role: "Full Stack Developer",
            period: "Aug 2017 — Dec 2021",
            location: "Kochi, India",
            description: [
                "Built full stack web applications for healthcare, SaaS, and operations products using React, Angular, Node.js, and Express.",
                "Developed REST APIs and backend services supporting data-heavy dashboards and operational platforms.",
                "Designed database schemas across PostgreSQL, MySQL, and MongoDB for product-level features.",
                "Implemented modular frontend architectures focused on reusability and long-term maintainability.",
                "Worked end-to-end across frontend, backend, and infrastructure layers to ship product features independently."
            ],
        }]
    }
]

// ============================================================================
// PROJECTS SECTION
// ============================================================================

export const featuredProjects = [
    {
        index: "01",
        title: "Shopify Middleware Layer",
        description: "Designed a Node.js microservice layer that abstracts all Shopify API interaction — storefront queries, cart logic, and order management — from the frontend. Enabled frontend and backend teams to evolve independently without breaking integrations.",
        responsibilities: [
            "Architected microservice-based middleware in Node.js",
            "Abstracted Shopify Storefront & Admin APIs",
            "Enabled independent team evolution",
            "Implemented cart and order management logic"
        ],
        tech: ["Node.js", "Shopify APIs", "GraphQL", "REST", "Microservices"],
        github: "#",
        live: "#",
        featured: true,
        type: "Architecture"
    },
    {
        index: "02",
        title: "Multi-brand Theming System",
        description: "Architected a shared React platform supporting multiple storefronts with distinct branding. Isolated brand-specific config at the theme layer while keeping core logic shared — reduced duplication across 4+ storefronts.",
        responsibilities: [
            "Designed multi-brand architecture",
            "Implemented theme isolation system",
            "Built shared component library",
            "Reduced code duplication across storefronts"
        ],
        tech: ["React", "Next.js", "TypeScript", "Design Systems", "Theming"],
        github: "#",
        live: "#",
        featured: true,
        type: "Architecture"
    },
    {
        index: "03",
        title: "Design System & Component Library",
        description: "Established a shared component library and visual design system for a large engineering team. Reduced inconsistency across UIs and shortened time-to-ship for new features. Built with Storybook and integrated Figma tokens.",
        responsibilities: [
            "Built 50+ accessible, themeable UI components",
            "Integrated Figma design tokens",
            "Created comprehensive Storybook documentation",
            "Established component architecture patterns"
        ],
        tech: ["React", "TypeScript", "Storybook", "Figma", "Design Tokens"],
        github: "#",
        live: "#",
        featured: true,
        type: "Design System"
    },
    {
        index: "04",
        title: "BFF Pattern for Legacy Modernisation",
        description: "Built a Backend-for-Frontend layer to simplify data flow between a React SPA and fragmented legacy APIs, improving frontend developer experience and reducing coupling.",
        responsibilities: [
            "Designed BFF architecture pattern",
            "Simplified frontend-backend communication",
            "Reduced coupling with legacy systems",
            "Improved developer experience"
        ],
        tech: ["Node.js", "Express", "REST APIs", "BFF Pattern", "React"],
        github: "#",
        live: "#",
        featured: true,
        type: "Architecture"
    }
]

export type ShowcaseProject = {
    title: string;
    role: string;
    description: string;
    responsibilities: string[];
    tech: string[];
    image?: string;
    live?: string;
    github?: string;
    flagship?: boolean;
}

export const projects: ShowcaseProject[] = [
    {
        title: "Tickd",
        role: "Creator & Full Stack Engineer",
        description: "A shared daily challenge platform. Conceived, architected, and built a dedicated full-stack web application to solve coordination friction in daily peer challenges. Features group dynamics, real-time checklist tracking, standings, and optimistic updates.",
        responsibilities: [
            "Implemented secure server actions, authenticated route handlers, and Drizzle ORM data pipelines with PostgreSQL.",
            "Built automated quality gates: Vitest unit/integration tests, cross-browser Playwright E2E tests, and WCAG accessibility audits via axe-core.",
            "Configured strict GitOps pipelines with GitHub Actions, Commitlint, and Husky."
        ],
        tech: ["Next.js 16", "React 19", "TypeScript", "PostgreSQL", "Drizzle ORM", "Playwright", "Vitest", "axe-core", "Tailwind CSS"],
        image: "/images/tickd.webp",
        live: "https://tickd.akhiakl.in",
        github: "https://github.com/akhiakl/tickd",
        flagship: true,
    },
    {
        title: "SvgIn-React",
        role: "Creator & Maintainer",
        description: "An open-source React/TypeScript library built to securely fetch, sanitize, and inline untrusted SVGs across client, server, and React Server Components (RSC).",
        responsibilities: [
            "Designed a lazy-loaded sanitization pipeline leveraging DOMPurify to eliminate XSS vectors.",
            "Architected modular entry points (client, server, core) ensuring tree-shakability and minimal bundle overhead.",
            "Engineered built-in memory caching and preloading APIs to eliminate redundant network requests."
        ],
        tech: ["React", "TypeScript", "Node.js", "DOMPurify", "tsup", "npm"],
        image: "/images/npm.webp",
        live: "https://www.npmjs.com/package/svgin-react",
        github: "https://github.com/akhiakl/svgin-react",
    },
]

// ============================================================================
// CURRENTLY BUILDING SECTION
// ============================================================================

export const currentlyBuilding = [
    {
        title: "Grand Tour",
        description: "A Next.js travel app that turns a trip idea into an AI-generated route on an interactive Leaflet map. Guests get no database at all, plans live in localStorage, and shared trips are stored as TTL-based links in Upstash Redis. The free tier limit is enforced at three separate layers so it can't be bypassed from the client.",
        tech: ["Next.js", "TypeScript", "Leaflet", "Upstash Redis", "Tailwind CSS"],
        status: "In Progress",
    },
    {
        title: "StoreBridge",
        description: "A Shopify embedded app for bulk migrating and syncing store data across multiple Shopify stores. Built on Shopify's Bulk Operations API, with Redis as the sole persistence layer instead of a traditional database.",
        tech: ["Shopify App", "React", "Redis", "Bulk Operations API"],
        status: "In Progress",
    },
    {
        title: "localVend",
        description: "A local-seller e-commerce platform for plants, produce, and poultry vendors. Next.js on the frontend, a NestJS, Prisma, GraphQL, and Postgres backend, plus a separate admin dashboard secured with dual JWT auth for regular users and admin users.",
        tech: ["Next.js", "NestJS", "Prisma", "GraphQL", "PostgreSQL"],
        status: "In Progress",
    }
]

// ============================================================================
// CONTACT SECTION
// ============================================================================

export const contactContent = {
    sectionNumber: "06",
    preTitle: "What's Next?",
    title: "Get in Touch",

    description: "I am always interested in discussing frontend architecture, design systems, and engineering leadership. Whether you'd like to talk through a technical challenge, collaborate on an initiative, or connect, feel free to drop a message.",

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

// ============================================================================
// SITE STRUCTURE & NAVIGATION
// ============================================================================

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
    currentlyBuilding: {
        number: "04",
        title: "Currently Building"
    },
    experience: {
        number: "05",
        title: "Experience"
    },
    contact: {
        number: "06",
        title: "Get in Touch"
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

// ============================================================================
// EDUCATION & ADDITIONAL INFO
// ============================================================================

export const education = {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Cochin University of Science and Technology (CUSAT)",
    location: "Kerala, India"
}

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

export const achievements = [
    {
        title: "Frontend Architecture Leadership",
        description: "Designed the frontend architecture for a multi-team commerce platform supporting 5+ parallel engineering teams.",
        metrics: "5+ teams supported"
    },
    {
        title: "Microservices Architecture",
        description: "Built a microservice-based middleware layer that decoupled platform logic and enabled independent team evolution.",
        metrics: "Shopify middleware layer"
    },
    {
        title: "Design Systems",
        description: "Established shared component library and design system standards that reduced UI duplication and accelerated feature delivery.",
        metrics: "50+ reusable components"
    },
    {
        title: "Team Leadership & Mentoring",
        description: "Mentored 4+ frontend engineers and led architectural reviews across multiple teams, raising the overall quality of frontend engineering practices.",
        metrics: "4+ engineers mentored"
    }
]

// ============================================================================
// TYPE EXPORTS (for TypeScript)
// ============================================================================

export type PersonalInfo = typeof personalInfo
export type AboutContent = typeof aboutContent
export type SkillCategory = typeof skillCategories[0]
export type FeaturedProject = typeof featuredProjects[0]
export type Project = ShowcaseProject
export type CurrentlyBuildingProject = typeof currentlyBuilding[0]
export type ContactContent = typeof contactContent
export type SectionTitles = typeof sectionTitles
export type NavigationLinks = typeof navigationLinks
export type FooterContent = typeof footerContent
export type Education = typeof education
export type Language = typeof languages[0]
export type Achievement = typeof achievements[0]
