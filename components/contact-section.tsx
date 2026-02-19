"use client"

import { useEffect, useRef, useState } from "react"
import { siteConfig } from "@/lib/site-config"
import { Mail, Phone, Send, Github, Linkedin, ExternalLink } from "lucide-react"

export function ContactSection() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" ref={ref} className="relative py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div
          className={`transition-all duration-700 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-mono text-sm tracking-wider text-primary">
            {"// CONTACT"}
          </h2>
          <h3 className="mb-10 text-3xl font-bold text-foreground sm:text-4xl">
            Get In Touch
          </h3>

          <div className="grid gap-8 lg:grid-cols-5">
            {/* Contact form */}
            <div className="lg:col-span-3">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  const form = e.target as HTMLFormElement
                  const name = (form.elements.namedItem("name") as HTMLInputElement).value
                  const email = (form.elements.namedItem("email") as HTMLInputElement).value
                  const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value
                  window.location.href = `mailto:${siteConfig.email}?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`
                }}
                className="glass-card rounded-xl p-6 neon-border"
              >
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    suppressHydrationWarning
                    className="w-full rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    suppressHydrationWarning
                    className="w-full rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Your message..."
                    suppressHydrationWarning
                    className="w-full resize-none rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  suppressHydrationWarning
                  className="flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_0_20px_hsla(165,80%,50%,0.3)] hover:brightness-110"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact info */}
            <div className="flex flex-col gap-4 lg:col-span-2">
              <a
                href={`tel:${siteConfig.phone}`}
                className="glass-card group flex items-center gap-4 rounded-xl p-5 transition-all hover:border-primary/30"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {siteConfig.phone}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="glass-card group flex items-center gap-4 rounded-xl p-5 transition-all hover:border-primary/30"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {siteConfig.email}
                  </p>
                </div>
              </a>

              <div className="glass-card rounded-xl p-5">
                <p className="mb-4 text-xs text-muted-foreground">Socials</p>
                <div className="flex flex-col gap-3">
                  <a
                    href={siteConfig.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                    <ExternalLink className="ml-auto h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a
                    href={siteConfig.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                    <ExternalLink className="ml-auto h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a
                    href={siteConfig.socials.tryhackme}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <ExternalLink className="h-4 w-4" />
                    TryHackMe
                    <ExternalLink className="ml-auto h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
