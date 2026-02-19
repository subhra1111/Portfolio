import { Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border bg-background py-8 px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-8">
        <a
          href="tel:+916297008272"
          className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <Phone className="h-4 w-4 text-primary" />
          +91 6297008272
        </a>
        <span className="hidden h-4 w-px bg-border sm:block" aria-hidden="true" />
        <a
          href="mailto:subhranilbar10@gmail.com"
          className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <Mail className="h-4 w-4 text-primary" />
          subhranilbar10@gmail.com
        </a>
      </div>
    </footer>
  )
}
