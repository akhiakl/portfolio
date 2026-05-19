import { Mail, Linkedin, Github } from "lucide-react"
import { contactContent } from "@/lib/content"

export function ContactSection() {
  return (
    <section id="contact" className="flex flex-col items-center justify-center bg-surface-container-low p-8 text-center md:p-16">
      <div className="mx-auto max-w-2xl">
        <p className="mb-4 font-mono text-[13px] text-primary-container">&gt; AWAITING_CONNECTION</p>
        <h2 className="mb-6 font-mono text-4xl font-bold uppercase text-primary sm:text-5xl">{contactContent.title}</h2>
        <p className="mb-10 font-mono text-lg leading-relaxed text-on-surface-variant">
          {contactContent.description}
        </p>

        <a
          href={contactContent.primaryCta.href}
          className="cyber-btn shadow-neon mb-12 inline-flex items-center gap-3 px-8 py-4 font-mono text-lg font-bold uppercase tracking-[0.1em]"
        >
          <Mail className="h-5 w-5" />
          SAY_HELLO
        </a>

        <div className="flex flex-wrap items-center justify-center gap-8">
          {contactContent.socialLinks.map((social) => {
            const IconComponent = social.icon === 'Mail' ? Mail : social.icon === 'Linkedin' ? Linkedin : Github

            return (
              <a
                key={social.name}
                href={social.href}
                target={social.external ? "_blank" : undefined}
                rel={social.external ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-2 font-mono text-[13px] uppercase text-on-surface-variant transition-colors hover:text-primary"
                aria-label={social.label}
              >
                <IconComponent className="h-5 w-5" />
                <span>{social.name}</span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
