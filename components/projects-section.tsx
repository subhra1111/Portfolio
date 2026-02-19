"use client"

import { useEffect, useRef, useState } from "react"
import { siteConfig } from "@/lib/site-config"
import { Github, Folder } from "lucide-react"

export function ProjectsSection() {
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
    <section id="projects" ref={ref} className="relative py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div
          className={`transition-all duration-700 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-mono text-sm tracking-wider text-primary">
            {"// PROJECTS"}
          </h2>
          <h3 className="mb-10 text-3xl font-bold text-foreground sm:text-4xl">
            Featured Work
          </h3>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {siteConfig.projects.map((project) => (
              <div
                key={project.title}
                className="glass-card group flex flex-col rounded-xl p-6 transition-all"
              >
                <div className="mb-4 flex items-center justify-between">
                  <Folder className="h-8 w-8 text-primary" />
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-primary"
                    aria-label={`GitHub repository for ${project.title}`}
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
                <h4 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Placeholder card */}
            <div className="flex items-center justify-center rounded-xl border border-dashed border-border p-6 text-muted-foreground/40">
              <p className="text-center text-sm">
                Add more projects in{" "}
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
