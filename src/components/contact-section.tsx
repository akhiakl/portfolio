import { Mail, Linkedin, Github } from "lucide-react"
import { contactContent } from "@/lib/contact-content"

export function ContactSection() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-2xl text-center animate-fade-in">
        <p className="mb-4 font-mono text-accent">{contactContent.sectionNumber}. {contactContent.preTitle}</p>
        <h2 className="mb-6 text-4xl font-bold text-foreground sm:text-5xl">{contactContent.title}</h2>
        <p className="mb-12 text-muted leading-relaxed">
          {contactContent.description}
        </p>

        {/* Email CTA */}
        <a
          href={contactContent.primaryCta.href}
          className="group mb-12 inline-flex items-center gap-3 rounded border border-accent bg-transparent px-8 py-4 font-mono text-accent transition-all hover:bg-accent/10"
        >
          <Mail className="h-5 w-5" />
          {contactContent.primaryCta.text}
        </a>

        {/* Social Links */}
        <div className="mt-12 flex items-center justify-center gap-8">
          {contactContent.socialLinks.map((social) => {
            const IconComponent = social.icon === 'Mail' ? Mail : social.icon === 'Linkedin' ? Linkedin : Github

            return (
              <a
                key={social.name}
                href={social.href}
                target={social.external ? "_blank" : undefined}
                rel={social.external ? "noopener noreferrer" : undefined}
                className="group flex flex-col items-center gap-2 text-muted transition-colors hover:text-accent"
                aria-label={social.label}
              >
                <IconComponent className="h-6 w-6" />
                <span className="text-xs font-mono">{social.name}</span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
