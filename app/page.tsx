import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { EducationSection } from "@/components/education-section"
import { CertificationsSection } from "@/components/certifications-section"
import { ProjectsSection } from "@/components/projects-section"
import { Footer } from "@/components/footer"
import { CyberBackground } from "@/components/cyber-background"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <CyberBackground />
      <Navbar />
      <HeroSection />
      <div className="relative cyber-bg scanlines">
        <AboutSection />
        <SkillsSection />
        <EducationSection />
        <CertificationsSection />
        <ProjectsSection />
      </div>
      <Footer />
    </main>
  )
}
