"use client"

import { useEffect, useRef, useState } from "react"
import { siteConfig } from "@/lib/site-config"
import { GraduationCap } from "lucide-react"

export function EducationSection() {
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
    <section id="education" ref={ref} className="relative py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <div
          className={`transition-all duration-700 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-mono text-sm tracking-wider text-primary">
            {"// EDUCATION"}
          </h2>
          <h3 className="mb-10 text-3xl font-bold text-foreground sm:text-4xl">
            Academic Background
          </h3>

          <div className="flex flex-col gap-6">
            {siteConfig.education.map((edu) => (
              <div
                key={edu.degree}
                className="glass-card group rounded-xl p-6 transition-all neon-border"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">
                      {edu.degree}
                    </h4>
                    <p className="text-sm text-primary">{edu.institution}</p>
                    <p className="mt-1 font-mono text-xs text-muted-foreground">
                      {edu.status}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
