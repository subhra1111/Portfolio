"use client"

import { useEffect, useRef, useState } from "react"

const tools = [
  { name: "Nmap", description: "Network scanning & host discovery" },
  { name: "Nikto", description: "Web server vulnerability scanner" },
  { name: "Wireshark", description: "Network protocol analyzer" },
  { name: "Burp Suite", description: "Web application security testing" },
  { name: "Gobuster", description: "Directory & DNS brute-forcing" },
  { name: "Dirbuster", description: "Web directory brute-forcer" },
  { name: "Feroxbuster", description: "Fast content discovery tool" },
  { name: "Katana", description: "Web crawling & spidering framework" },
  { name: "Nessus", description: "Vulnerability assessment scanner" },
  { name: "Metasploit", description: "Penetration testing framework" },
]

export function SkillsSection() {
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
    <section id="skills" ref={ref} className="relative py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <div
          className={`transition-all duration-700 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-mono text-sm tracking-wider text-primary">
            {"// TOOLS"}
          </h2>
          <h3 className="mb-10 text-3xl font-bold text-foreground sm:text-4xl">
            Tools That I Know
          </h3>

          <div className="flex flex-col gap-0">
            {tools.map((tool, i) => (
              <div
                key={tool.name}
                className="group flex items-center justify-between border-b border-border/50 py-4 transition-colors hover:border-primary/30"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-muted-foreground/50 w-6 text-right">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base font-medium text-foreground transition-colors group-hover:text-primary">
                    {tool.name}
                  </span>
                </div>
                <span className="text-sm text-muted-foreground transition-colors group-hover:text-muted-foreground/80">
                  {tool.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
