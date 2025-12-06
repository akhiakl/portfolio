import { cn } from "@/lib/utils"
import VisibleOnScroll from "./visible-on-scroll"

export function AboutSection() {

  return (
    <VisibleOnScroll as="section" id="about" className="py-24">
      <h2 className="mb-10 flex items-center gap-2 text-2xl font-bold text-foreground sm:text-3xl">
        <span className="font-mono text-xl text-accent">01.</span>
        About Me
        <span className="ml-4 h-px flex-1 max-w-xs bg-border" />
      </h2>

      <div className="grid gap-12 md:grid-cols-3">
        <div className="space-y-4 md:col-span-2">
          <p className="text-muted leading-relaxed">
            With over <span className="text-accent">8+ years</span> of experience designing and
            building high-performance web applications, I specialize in creating interfaces that are both beautiful
            and functional. My journey in web development has taken me through startups and enterprise companies,
            where I've led teams and architected scalable solutions.
          </p>

          <p className="text-muted leading-relaxed">
            I'm passionate about <span className="text-accent">UI/UX</span>, developer experience,
            accessibility, and scalable system design. I believe that great software emerges from the intersection of
            technical excellence and thoughtful design.
          </p>

          <p className="text-muted leading-relaxed">
            My philosophy is simple:{" "}
            <span className="text-foreground italic">
              "Craft comes from clarity, simplicity, and thoughtful interaction."
            </span>{" "}
            Every line of code I write is purposeful, every interface I design is intentional.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-xs">
          <div className="group relative">
            <div className="relative z-10 overflow-hidden rounded bg-accent/20">
              <img
                src="/professional-developer-portrait-minimal.jpg"
                alt="Akhil K"
                className="mix-blend-luminosity grayscale transition-all duration-300 group-hover:mix-blend-normal group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-accent/20 transition-opacity duration-300 group-hover:opacity-0" />
            </div>
            <div className="absolute -bottom-3 -right-3 z-0 h-full w-full rounded border-2 border-accent transition-all duration-300 group-hover:-bottom-4 group-hover:-right-4" />
          </div>
        </div>
      </div>
    </VisibleOnScroll>
  )
}
