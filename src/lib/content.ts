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
    title: "Lead Frontend Engineer | Frontend Architecture | Full Stack",
    tagline: "I build scalable web platforms for enterprise and commerce",
    description: "Senior frontend engineer with 8+ years building scalable web platforms for enterprise and commerce products. Deep expertise in React, TypeScript, and Node.js, with a strong focus on frontend architecture, design systems, and API integration patterns. Experienced leading teams, defining engineering standards, and designing systems that scale across distributed teams.",

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
        description: "Senior frontend engineer with 8+ years building scalable web platforms for enterprise and commerce products. Deep expertise in React, TypeScript, and Node.js.",
        keywords: [
            "Akhil K",
            "Lead Frontend Engineer",
            "Frontend Architecture",
            "React Developer",
            "Next.js Developer",
            "TypeScript",
            "JavaScript",
            "Full Stack Developer",
            "Shopify Developer",
            "Commerce Platforms",
            "Design Systems",
            "Kerala Developer",
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
        tagline: "I build scalable web platforms for enterprise and commerce",
        description: "Senior frontend engineer with 8+ years building scalable web platforms for enterprise and commerce products. Deep expertise in React, TypeScript, and Node.js, with a strong focus on frontend architecture, design systems, and API integration patterns.",
        primaryCta: {
            text: "View Work",
            href: "#projects"
        },
        secondaryCta: {
            text: "Contact Me",
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
            text: "I'm a ",
            highlight: "Senior Frontend Engineer",
            continuation: " with 8+ years building scalable web platforms for enterprise and commerce products. I specialize in React, TypeScript, and Node.js, with a strong focus on frontend architecture, design systems, and API integration patterns."
        },
        {
            text: "I'm experienced in leading teams, defining engineering standards, and designing systems that ",
            highlight: "scale across distributed teams",
            continuation: ". Whether it's architecting a multi-team commerce platform, building middleware layers, or establishing shared component libraries, I focus on solutions that balance speed with long-term maintainability."
        },
        {
            text: "My key focus areas include ",
            highlight: "frontend architecture",
            continuation: ", commerce platforms (Shopify, Magento), design systems, and building scalable web applications. I'm comfortable working across the full stack and making architectural decisions that impact entire engineering organizations."
        }
    ],

    technologies: {
        title: "Core Technologies:",
        items: [
            "React & Next.js",
            "TypeScript & JavaScript (ES6+)",
            "Node.js & Express",
            "Shopify & Commerce Platforms",
            "Design Systems & Component Architecture",
            "GraphQL & REST APIs"
        ]
    },

    image: {
        src: "/images/akhil-working.webp",
        alt: "Akhil K working on code"
    }
}

// ============================================================================
// SKILLS SECTION
// ============================================================================

export const skillCategories = [
    {
        title: "Frontend",
        skills: [
            "React",
            "Next.js",
            "TypeScript",
            "JavaScript (ES6+)",
            "Angular",
            "SSR/ISR",
            "Component Architecture",
            "Design Systems",
            "Redux",
            "MobX",
            "Context API"
        ],
    },
    {
        title: "Backend",
        skills: [
            "Node.js",
            "Express",
            "NestJS",
            "BFF Architecture",
            "Middleware Design",
            "REST APIs",
            "GraphQL"
        ],
    },
    {
        title: "Commerce & CMS",
        skills: [
            "Shopify (Storefront & Admin APIs)",
            "Magento",
            "Vue Storefront",
            "Contentful",
            "Builder.io"
        ],
    },
    {
        title: "Databases",
        skills: [
            "PostgreSQL",
            "MySQL",
            "MongoDB",
            "DocumentDB"
        ],
    },
    {
        title: "Tools & Infrastructure",
        skills: [
            "Docker",
            "GitHub Actions",
            "CI/CD Pipelines",
            "Webpack",
            "Turborepo",
            "Git"
        ],
    },
    {
        title: "Practices",
        skills: [
            "System Design",
            "Frontend Performance",
            "Accessibility (WCAG 2.1)",
            "Code Review",
            "Mentoring",
            "API Design",
            "Service Integration Patterns"
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
                    "Designed the frontend architecture for a multi-team commerce platform built with React, Next.js, and TypeScript — supporting multiple storefronts and used across 5+ parallel engineering teams.",
                    "Built a microservice-based middleware layer in Node.js that sits between Shopify APIs and the frontend, decoupling platform logic and enabling teams to evolve independently.",
                    "Defined shared component library and design system standards that reduced UI duplication across teams and accelerated feature delivery across multiple storefront applications.",
                    "Defined consistent integration patterns for REST and GraphQL APIs, simplifying data flow and improving maintainability across services.",
                    "Led architecture reviews and set engineering standards that improved code quality and long-term platform stability.",
                    "Mentored 4+ frontend engineers and led architectural reviews across multiple teams, raising the overall quality of frontend engineering practices.",
                    "Collaborated with backend, DevOps, and product teams to align system boundaries, API contracts, and deployment workflows."
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
                    "Led frontend development for enterprise commerce platforms serving multiple brands across a shared React codebase.",
                    "Designed a BFF (Backend-for-Frontend) integration layer that simplified communication between the frontend and legacy backend systems.",
                    "Built a multi-brand theming architecture that allowed independent storefronts to share core platform logic without code duplication.",
                    "Defined API contracts and deployment workflows in collaboration with backend and DevOps teams.",
                    "Contributed to architectural decisions for modernizing legacy frontend systems, balancing delivery timelines with sustainable architecture."
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

// Additional projects (older work)
export const projects = [
    {
        title: "SvgIn-React Library",
        description: "An open-source library for seamlessly importing and optimizing SVG icons in React applications. Supports tree-shaking and TypeScript out of the box.",
        responsibilities: [
            "Created npm package architecture",
            "Built CLI tooling for SVG processing",
            "Wrote comprehensive documentation",
            "Implemented tree-shaking support"
        ],
        tech: ["React", "TypeScript", "Rollup", "Node.js", "CLI"],
        image: "/images/npm.webp",
        live: "https://www.npmjs.com/package/svgin-react",
        github: "https://github.com/akhiakl/svgin-react",
        featured: true,
    },
    {
        title: "Badan",
        description: "Badan is a full service landscape architectural design specialist and construction firm",
        responsibilities: [
            "Developed corporate website",
            "Created project portfolio gallery",
            "Integrated WordPress CMS",
        ],
        tech: ["React", "WordPress", "HTML5", "CSS3", "Bootstrap"],
        live: "https://badan.com.sa",
        featured: true,
        image: "/images/badan.webp",
    },
    {
        title: "The Common Closets",
        description: "The common closets (now Gemme collective) is a cloth/apparel rental platform based in sweden",
        responsibilities: [
            "Built responsive rental platform",
            "Implemented user authentication",
            "Integrated payment systems",
        ],
        tech: ["Angular", "TypeScript", "HTML5", "Sass", "Bootstrap"],
        live: "https://gemmecollective.com",
        featured: true,
        image: "/images/commonclosets.webp",
    },
    {
        title: "Beaudesk",
        description: "Beaudesk is a Fully Integrated System to transform your Appointment system.",
        responsibilities: [
            "Built appointment booking system",
            "Designed responsive interface",
            "Implemented calendar integration",
        ],
        tech: ["HTML5", "CSS3", "Bootstrap"],
        github: "#",
        live: "https://www.beaudesk.com",
        featured: true,
        image: "/images/beaudesk.webp",
    },
    {
        title: "UMR",
        description: "United Machinery Resources Co. (UMR Company), serve the requirement of manufacturer of spare parts of all types of heavy equipment.",
        responsibilities: [
            "Created corporate website",
            "Built product catalog system",
            "Optimized for mobile devices",
        ],
        tech: ["HTML5", "CSS3", "Bootstrap"],
        live: "https://www.umrcompany.com",
        featured: true,
        image: "/images/umr.webp",
    }
]

// ============================================================================
// CONTACT SECTION
// ============================================================================

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
export type Project = typeof projects[0]
export type ContactContent = typeof contactContent
export type SectionTitles = typeof sectionTitles
export type NavigationLinks = typeof navigationLinks
export type FooterContent = typeof footerContent
export type Education = typeof education
export type Language = typeof languages[0]
export type Achievement = typeof achievements[0]
