"use client"

import { useState, useEffect } from "react"
import { siteConfig } from "@/lib/site-config"
import { Menu, X, Shield, Download, Github, Linkedin } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-card border-b border-border py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2 group">
          <Shield className="h-6 w-6 text-primary transition-all group-hover:drop-shadow-[0_0_8px_hsl(0,85%,55%)]" />
          <span className="font-mono text-sm font-bold tracking-wider text-foreground">
            {"<"}
            <span className="text-primary">SB</span>
            {" />"}
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-3 ml-4 border-l border-border pl-4">
            <a
              href="https://github.com/subhra1111"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/subhranil-bar-33427a302/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
          <a
            href={siteConfig.resumeUrl}
            download="Subhranil_Bar_Resume.pdf"
            className="flex items-center gap-2 rounded-md border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-all hover:bg-primary/20 hover:shadow-[0_0_15px_hsla(0,85%,55%,0.2)]"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div className="glass-card mt-2 border-t border-border px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-4 border-t border-border pt-4">
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.resumeUrl}
                download="Subhranil_Bar_Resume.pdf"
                className="ml-auto flex items-center gap-2 rounded-md border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary"
              >
                <Download className="h-4 w-4" />
                Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
