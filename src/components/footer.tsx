import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8">
      <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-24">
        {/* Social Links - Mobile Only */}
        <div className="mb-6 flex justify-center gap-6 md:hidden">
          <a
            href="https://github.com/akhilk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:accent"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/akhilk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:accent"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:akhil@example.com"
            className="text-muted transition-colors hover:accent"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>

        <div className="text-center">
          <a
            href="https://github.com/akhilk/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-muted transition-colors hover:accent"
          >
            <p>Designed & Built by Akhil K</p>
          </a>
        </div>
      </div>
    </footer>
  )
}
