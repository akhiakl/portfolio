export const aboutContent = {
    sectionNumber: "01",
    title: "About Me",

    paragraphs: [
        {
            text: "With over ",
            highlight: "8+ years",
            continuation: " of experience designing and building high-performance web applications, I specialize in creating interfaces that are both beautiful and functional. My journey in web development has taken me through startups and enterprise companies, where I've led teams and architected scalable solutions."
        },
        {
            text: "I'm passionate about ",
            highlight: "UI/UX",
            continuation: ", developer experience, accessibility, and scalable system design. I believe that great software emerges from the intersection of technical excellence and thoughtful design."
        },
        {
            text: "My philosophy is simple: ",
            quote: "Craft comes from clarity, simplicity, and thoughtful interaction.",
            continuation: " Every line of code I write is purposeful, every interface I design is intentional."
        }
    ],

    technologies: {
        title: "Technologies I work with:",
        items: [
            "React & Next.js",
            "TypeScript",
            "Node.js & Express",
            "PostgreSQL & MongoDB",
            "AWS & Docker",
            "GraphQL & REST APIs"
        ]
    },

    image: {
        src: "/images/akhil-working.webp", // Update with your image
        alt: "Akhil K working on code"
    }
}

export type AboutContent = typeof aboutContent