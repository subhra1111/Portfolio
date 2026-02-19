"use client"

import { useEffect, useRef, useState } from "react"
import { siteConfig } from "@/lib/site-config"
import { Shield, Terminal, Bug, Search } from "lucide-react"

const highlights = [
  { icon: Shield, label: "Ethical Hacking" },
  { icon: Terminal, label: "Penetration Testing" },
  { icon: Bug, label: "Vulnerability Assessment" },
  { icon: Search, label: "Digital Forensics" },
]

export function AboutSection() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={ref} className="relative py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div
          className={`transition-all duration-700 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-mono text-sm tracking-wider text-primary">
            {"// ABOUT ME"}
          </h2>
          <h3 className="mb-8 text-3xl font-bold text-foreground sm:text-4xl">
            Who I Am
          </h3>

          <div className="grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <p className="mb-6 text-base leading-relaxed text-muted-foreground">
                {siteConfig.about}
              </p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="glass-card flex flex-col items-center gap-2 rounded-lg p-4 text-center transition-all"
                  >
                    <item.icon className="h-6 w-6 text-primary" />
                    <span className="text-xs font-medium text-foreground">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-5 lg:col-span-2">
              <div className="glass-card rounded-xl p-6 neon-border">
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-destructive/70" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
                  <div className="h-3 w-3 rounded-full bg-primary/70" />
                  <span className="ml-2 font-mono text-xs text-muted-foreground">
                    profile.sh
                  </span>
                </div>
                <pre className="font-mono text-xs leading-relaxed text-muted-foreground">
                  <code>
                    <span className="text-primary">$</span> cat profile.txt{"\n\n"}
                    <span className="text-foreground">Name:</span> {siteConfig.name}{"\n"}
                    <span className="text-foreground">University:</span> {siteConfig.university}{"\n"}
                    <span className="text-foreground">Degree:</span> {siteConfig.degree}{"\n"}
                    <span className="text-foreground">Year:</span> {siteConfig.year}{"\n"}
                    <span className="text-foreground">Focus:</span> {siteConfig.specialization}{"\n\n"}
                    <span className="text-primary">$</span> <span className="animate-pulse">_</span>
                  </code>
                </pre>
              </div>

              <div className="glass-card overflow-hidden rounded-xl neon-border">
                <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
                  <span className="font-mono text-xs text-primary">{"// "}</span>
                  <span className="font-mono text-xs text-muted-foreground">TryHackMe Profile</span>
                </div>
                <div className="relative bg-[#212c42]">
                  <iframe
                    src={`https://tryhackme.com/api/v2/badges/public-profile?userPublicId=${siteConfig.tryhackmeUserId}`}
                    className="block w-full"
                    style={{ border: "none", height: "105px" }}
                    title="TryHackMe Badge"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
