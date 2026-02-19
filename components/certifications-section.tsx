"use client"

import { useEffect, useRef, useState } from "react"
import { siteConfig } from "@/lib/site-config"
import { Award, ExternalLink } from "lucide-react"

export function CertificationsSection() {
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
    <section id="certifications" ref={ref} className="relative py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div
          className={`transition-all duration-700 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-mono text-sm tracking-wider text-primary">
            {"// CERTIFICATIONS"}
          </h2>
          <h3 className="mb-10 text-3xl font-bold text-foreground sm:text-4xl">
            Credentials
          </h3>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {siteConfig.certifications.map((cert) => (
              <a
                key={cert.title}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card group flex flex-col rounded-xl p-6 transition-all hover:border-primary/30"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Award className="h-5 w-5" />
                  </div>
                  <ExternalLink className="ml-auto h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <h4 className="mb-1 text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                  {cert.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {cert.organization}
                </p>
                <p className="mt-auto pt-4 font-mono text-xs text-muted-foreground/60">
                  {cert.date}
                </p>
              </a>
            ))}

            {/* Placeholder card to add more */}
            <div className="flex items-center justify-center rounded-xl border border-dashed border-border p-6 text-muted-foreground/40">
              <p className="text-center text-sm">
                Add more certifications in{" "}
                <code className="rounded bg-secondary px-1 py-0.5 font-mono text-xs text-primary">
                  lib/site-config.ts
                </code>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
