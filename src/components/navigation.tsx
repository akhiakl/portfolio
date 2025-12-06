import Image from "next/image"
import { MobileNavigation } from "./mobile-navigation"

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Work", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  return (
    <header
      className="fixed top-0 z-50 w-full transition-all duration-300 bg-background/90 backdrop-blur-md shadow-lg"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-12 lg:px-24">
        <a href="#" className="text-xl font-bold text-accent transition-opacity hover:opacity-80">
          <Image src="/images/logo.svg" alt="Akhil K Logo" width={30} height={30} />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link, index) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="group flex items-center gap-1 text-sm text-muted transition-colors hover:text-accent"
              >
                <span className="font-mono text-xs text-accent">0{index + 1}.</span>
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              className="rounded border border-accent px-4 py-2 text-sm text-accent transition-all hover:bg-accent/10"
            >
              Resume
            </a>
          </li>
        </ul>
        <MobileNavigation navLinks={navLinks} />
      </nav>
    </header>
  )
}
