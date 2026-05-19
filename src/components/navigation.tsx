import { MobileNavigation } from "./mobile-navigation"
import { navigationLinks, personalInfo } from "@/lib/content"

export function Navigation() {
  return (
    <header
      className="fixed top-0 z-50 w-full border-b border-outline-variant bg-background/80 backdrop-blur-md transition-all duration-200"
    >
      <nav className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-4 md:px-10">
        <a href="#" className="font-mono text-2xl font-bold text-primary transition-opacity hover:opacity-80" aria-label={`${personalInfo.name} home`}>
          AKHIL_K.
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navigationLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="font-mono text-[13px] uppercase text-on-surface-variant transition-colors hover:text-primary"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              className="cyber-btn px-4 py-2 font-mono text-[13px] uppercase"
            >
              Resume
            </a>
          </li>
        </ul>
        <MobileNavigation navLinks={navigationLinks} />
      </nav>
    </header>
  )
}
