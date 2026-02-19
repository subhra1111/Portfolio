"use client"

import { useEffect, useRef, useState } from "react"

export function CyberBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    // Matrix-style falling characters
    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)
    const drops: number[] = Array(columns).fill(1)
    const chars = "01ABCDEF{}[]<>/\\|!@#$%^&*()_+-=~`"

    function draw() {
      if (!ctx || !canvas) return

      ctx.fillStyle = "rgba(7, 10, 15, 0.08)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)]
        const x = i * fontSize

        // Mix of red and dim red tones
        const brightness = Math.random()
        if (brightness > 0.95) {
          ctx.fillStyle = "rgba(220, 50, 50, 0.9)"
          ctx.font = `bold ${fontSize}px monospace`
        } else if (brightness > 0.8) {
          ctx.fillStyle = "rgba(180, 40, 40, 0.4)"
          ctx.font = `${fontSize}px monospace`
        } else {
          ctx.fillStyle = "rgba(140, 30, 30, 0.15)"
          ctx.font = `${fontSize}px monospace`
        }

        ctx.fillText(char, x, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }

      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 transition-opacity duration-1000 ${
        mounted ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden="true"
    />
  )
}
