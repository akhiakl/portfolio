import { footerContent } from "@/lib/content"

export function Footer() {
  return (
    <footer className="mt-16 border-t border-outline-variant bg-surface">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row md:px-10">
        <div className="font-mono text-xs font-bold uppercase tracking-widest text-on-surface-variant">
          ©2026 AKHIL_K // EXECUTING_SUCCESS
        </div>
        <div className="flex flex-wrap justify-center gap-6 font-mono text-[13px] uppercase">
          {footerContent.socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target={social.name !== 'Email' ? "_blank" : undefined}
              rel={social.name !== 'Email' ? "noopener noreferrer" : undefined}
              className="text-on-surface-variant transition-colors hover:text-primary hover:underline"
              aria-label={social.label}
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
