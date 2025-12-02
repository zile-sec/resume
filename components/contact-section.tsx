import Link from "next/link"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section id="contact" className="py-16 relative">
      <h2 className="text-4xl font-bold text-gradient-blue-green mb-2">Contact</h2>
      <div className="w-20 h-1 bg-gradient-blue-green mb-8"></div>

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Get In Touch</h3>
            <p className="text-slate-600 mb-6">
              Feel free to reach out through any of these platforms. I'm always open to discussing new projects,
              creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="space-y-4">
              <Link
                href="mailto:msonithokozile@gmail.com"
                className="flex items-center gap-3 text-slate-700 hover:text-primary-600 transition-colors"
              >
                <Mail className="text-primary-500" size={20} />
                <span>msonithokozile@gmail.com</span>
              </Link>

              <Link
                href="https://www.linkedin.com/in/thokozile-msoni-513071307"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-700 hover:text-primary-600 transition-colors"
              >
                <Linkedin className="text-primary-500" size={20} />
                <span>LinkedIn Profile</span>
              </Link>

              <Link
                href="https://github.com/zile-sec"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-700 hover:text-primary-600 transition-colors"
              >
                <Github className="text-primary-500" size={20} />
                <span>GitHub: @zile-sec</span>
              </Link>

              <Link
                href="https://dly.to/RCXdaIN3Si2"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-700 hover:text-primary-600 transition-colors"
              >
                <ExternalLink className="text-primary-500" size={20} />
                <span>daily.dev Community</span>
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">Connect With Me</h3>
            <p className="text-slate-600 mb-6 text-center">
              Join my tech community on daily.dev where I share insights and engage with fellow tech enthusiasts.
            </p>
            <div className="flex justify-center">
              <Button asChild className="bg-gradient-blue-green hover:opacity-90">
                <Link href="https://dly.to/RCXdaIN3Si2" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visit My daily.dev Profile
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
