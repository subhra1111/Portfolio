import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'Subhranil Bar | Cyber Security & Digital Forensics',
  description: 'Portfolio of Subhranil Bar — B.Tech student specializing in Cyber Security & Digital Forensics at Adamas University. Penetration testing, ethical hacking, vulnerability assessment.',
  keywords: ['cyber security', 'digital forensics', 'penetration testing', 'ethical hacking', 'portfolio'],
}

export const viewport: Viewport = {
  themeColor: '#070a0f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
