import { Github, Linkedin, Mail } from "lucide-react"
import { footerContent } from "@/lib/site-content"

export function Footer() {
  return (
    <footer className="py-8">
      <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-24">
        {/* Social Links - Mobile Only */}
        <div className="mb-6 flex justify-center gap-6 md:hidden">
          {footerContent.socialLinks.map((social) => {
            const IconComponent = social.icon === 'Mail' ? Mail : social.icon === 'Linkedin' ? Linkedin : Github

            return (
              <a
                key={social.name}
                href={social.href}
                target={social.name !== 'Email' ? "_blank" : undefined}
                rel={social.name !== 'Email' ? "noopener noreferrer" : undefined}
                className="text-muted transition-colors hover:accent"
                aria-label={social.label}
              >
                <IconComponent className="h-5 w-5" />
              </a>
            )
          })}
        </div>

        <div className="text-center">
          <p className="font-mono text-sm text-muted">{footerContent.copyright}</p>
          <p className="font-mono text-xs text-muted mt-2">{footerContent.builtBy}</p>
        </div>
      </div>
    </footer>
  )
}
