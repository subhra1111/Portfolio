"use client"

import { useEffect, useState } from "react"
import { siteConfig } from "@/lib/site-config"
import { Github, Linkedin, ExternalLink, ChevronDown } from "lucide-react"

function TypewriterText({ text, speed = 50 }: { text: string; speed?: number }) {
  const [mounted, setMounted] = useState(false)
  const [displayed, setDisplayed] = useState(text)
  const [done, setDone] = useState(true)

  useEffect(() => {
    setMounted(true)
    setDisplayed("")
    setDone(false)
    let i = 0
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1))
        i++
      } else {
        setDone(true)
        clearInterval(interval)
      }
    }, speed)
    return () => clearInterval(interval)
  }, [text, speed])

  return (
    <span>
      {displayed}
      {mounted && !done && <span className="animate-pulse text-primary">|</span>}
    </span>
  )
}

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-primary/3 blur-[100px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      <div
        className={`relative z-10 mx-auto max-w-4xl text-center transition-all duration-1000 ${
          mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="mb-6 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
          <span className="font-mono text-xs tracking-wider text-primary">
            {siteConfig.specialization}
          </span>
        </div>

        <h1 className="mb-4 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-7xl">
          <TypewriterText text={siteConfig.name} speed={80} />
        </h1>

        <p className="mx-auto mb-4 max-w-xl text-base text-muted-foreground leading-relaxed sm:text-lg">
          {siteConfig.degree} Student at{" "}
          <span className="text-primary">{siteConfig.university}</span>
        </p>

        <p className="mx-auto mb-8 max-w-2xl text-sm text-muted-foreground/70 leading-relaxed">
          Specializing in penetration testing, vulnerability assessment, ethical
          hacking, and digital investigations.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-5 py-2.5 text-sm font-medium text-primary transition-all hover:bg-primary/20 hover:shadow-[0_0_20px_hsla(0,85%,55%,0.2)]"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-border bg-secondary px-5 py-2.5 text-sm font-medium text-secondary-foreground transition-all hover:border-primary/30 hover:bg-secondary/80"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={siteConfig.socials.tryhackme}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-border bg-secondary px-5 py-2.5 text-sm font-medium text-secondary-foreground transition-all hover:border-primary/30 hover:bg-secondary/80"
          >
            <ExternalLink className="h-4 w-4" />
            TryHackMe
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-primary"
        aria-label="Scroll to about section"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  )
}
