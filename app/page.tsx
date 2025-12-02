import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { NavMenu } from "@/components/nav-menu"
import { ExperienceSection } from "@/components/experience-section"
import { RetroComputer } from "@/components/retro-computer"
import { CyberBackground } from "@/components/cyber-background"
import { RetroBackground } from "@/components/retro-background"
import { CommunityCard } from "@/components/community-card"
import { ResumeDownload } from "@/components/resume-download"
import { DecorativeIcons } from "@/components/decorative-icons"
import { FloatingIcons } from "@/components/floating-icons"
import { SectionIcons } from "@/components/section-icons"
import { ContactSection } from "@/components/contact-section"
import { Users, Award } from "lucide-react"
import { Mail } from "lucide-react"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-50">
      <CyberBackground />
      <RetroBackground />
      <DecorativeIcons />
      <FloatingIcons />

      {/* Retro tech background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-20 top-40 opacity-10">
          <RetroComputer />
        </div>
        <div className="absolute -left-20 bottom-40 opacity-10 rotate-180">
          <RetroComputer />
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <NavMenu />

        <main className="mt-16">
          {/* Hero Section */}
          <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 py-16">
            <div className="w-full md:w-1/2 space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-gradient-blue-green leading-tight">Hello!</h1>
              <div className="w-20 h-1 bg-gradient-blue-green"></div>
              <p className="text-xl text-slate-700">
                I'm Thokozile Msoni, a cybersecurity professional with a creative approach to solving complex
                technological challenges. My work combines technical expertise with innovative thinking to develop
                robust security solutions.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="bg-gradient-blue-green text-white px-3 py-1 rounded-full text-sm">
                  Network Security
                </span>
                <span className="bg-gradient-blue-green text-white px-3 py-1 rounded-full text-sm">
                  Artificial Intelligence
                </span>
                <span className="bg-gradient-blue-green text-white px-3 py-1 rounded-full text-sm">
                  Web Development
                </span>
              </div>
              <p className="text-lg italic font-medium text-gradient-blue-green">"Create more, consume less"</p>
              <div className="flex gap-4 pt-4">
                <Button className="bg-gradient-blue-green hover:opacity-90">View Projects</Button>
                <Button variant="outline" className="border-primary-500 text-primary-600 hover:bg-primary-50">
                  Contact Me
                </Button>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center">
              <div className="image-frame w-full max-w-md transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/security-sea.jpg"
                  alt="Security in a Sea of Foes"
                  width={500}
                  height={700}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </section>

          {/* Resume Download Section */}
          <section className="py-16 relative">
            <div className="absolute -top-10 -left-10 opacity-5">
              <Image src="/images/decorative/clipboard-gear.jpeg" alt="Clipboard" width={100} height={100} />
            </div>
            <div className="absolute -bottom-10 -right-10 opacity-5">
              <Image src="/images/decorative/certificate-check.jpeg" alt="Certificate" width={80} height={80} />
            </div>
            <ResumeDownload resumeUrl="https://docs.google.com/document/d/1j7VDXhcyHmkZ2ZyaToRYcDr4oQeVNqkx/edit" />
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-16 relative">
            <SectionIcons section="projects" />
            <h2 className="text-4xl font-bold text-gradient-blue-green mb-2">Projects</h2>
            <div className="w-20 h-1 bg-gradient-blue-green mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="Threat Detection Neural Network"
                description="An advanced neural network system designed to detect and analyze potential cybersecurity threats in real-time."
                imageUrl="/images/neural-network.jpg"
                githubUrl="https://github.com/TKs-virus/Threat-Detection-Neural-Network"
                technologies={["Python", "TensorFlow", "Cybersecurity", "Machine Learning"]}
              />
              <ProjectCard
                title="Zed Blockchain Portal"
                description="A comprehensive blockchain portal that provides secure and transparent transaction management."
                imageUrl="/images/blockchain-portal.jpg"
                githubUrl="https://github.com/TKs-virus/zed-blockchain-portal"
                technologies={["Blockchain", "JavaScript", "React", "Web3"]}
                className="md:translate-y-12"
              />
              <ProjectCard
                title="Minimalist Clock App"
                description="A sleek, minimalist clock application with customizable features and intuitive user interface."
                imageUrl="/images/clock-app.jpg"
                githubUrl="https://github.com/TKs-virus/minimalist_clock_app"
                technologies={["Flutter", "Dart", "UI/UX", "Mobile Development"]}
                className="lg:translate-y-24"
              />
            </div>
          </section>

          {/* Experience Section */}
          <section className="relative">
            <SectionIcons section="experience" />
            <ExperienceSection />
          </section>

          {/* Blog Section Teaser */}
          <section className="py-16 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl relative">
            <div className="absolute top-5 left-5 opacity-5 rotate-12">
              <Image src="/images/decorative/document-check.jpeg" alt="Document" width={60} height={60} />
            </div>
            <div className="absolute bottom-5 right-5 opacity-5 -rotate-12">
              <Image src="/images/decorative/id-security.jpeg" alt="ID Security" width={50} height={50} />
            </div>
            <div className="text-center max-w-3xl mx-auto px-4">
              <h2 className="text-4xl font-bold text-gradient-blue-green mb-4">My Blog</h2>
              <p className="text-lg text-slate-700 mb-6">
                I regularly share insights on cybersecurity, technology trends, and my professional journey. Check out
                my latest articles and join the conversation.
              </p>
              <Link href="/blog">
                <Button className="bg-gradient-blue-green hover:opacity-90">Read My Articles</Button>
              </Link>
            </div>
          </section>

          {/* Community Section */}
          <section id="community" className="py-16 relative">
            <SectionIcons section="community" />
            <h2 className="text-4xl font-bold text-gradient-blue-green mb-2">Community</h2>
            <div className="w-20 h-1 bg-gradient-blue-green mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <CommunityCard
                title="Tech Community Leader"
                description="Active participant in the tech community, sharing insights on cybersecurity, project updates, and engaging in thought-provoking discussions on daily.dev, where I also manage my own squad."
                backgroundImage="/placeholder.svg?key=tech-community"
                icon={<Users size={180} strokeWidth={1} />}
              />
              <CommunityCard
                title="Brand Ambassador"
                description="Serving as a Brand Ambassador for Smart Zambia, championing technological innovations and empowering regional initiatives to foster a dynamic, forward-thinking tech community."
                backgroundImage="/placeholder.svg?key=brand-ambassador"
                icon={<Award size={180} strokeWidth={1} />}
                className="md:translate-y-8"
              />
            </div>
          </section>

          {/* Contact Section */}
          <ContactSection />
        </main>

        <footer className="py-8 text-center text-slate-600 border-t border-slate-200 mt-16 relative">
          <div className="absolute top-5 left-1/4 opacity-5">
            <Image src="/images/decorative/social-icon.jpeg" alt="Social" width={30} height={30} />
          </div>
          <div className="absolute bottom-5 right-1/4 opacity-5">
            <Image src="/images/decorative/secure-card.jpeg" alt="Secure Card" width={40} height={40} />
          </div>
          <p>© {new Date().getFullYear()} Thokozile Msoni. All rights reserved.</p>
          <p className="mt-2 text-gradient-blue-green font-medium">"Create more, consume less"</p>
        </footer>
      </div>
      <Link
        href="mailto:msonithokozile@gmail.com"
        className="flex items-center gap-2 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all"
      >
        <Mail className="text-gradient-blue-green" />
        <span>Email</span>
      </Link>
    </div>
  )
}
