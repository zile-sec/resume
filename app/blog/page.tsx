import Image from "next/image"
import { NavMenu } from "@/components/nav-menu"
import { ExternalLink, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

// Blog post data
const blogPosts = [
  {
    id: 1,
    title: "Exploring the Intersection of AI and Cybersecurity",
    excerpt:
      "As AI continues to evolve, so do the cybersecurity implications. This article explores how AI is both strengthening security measures and creating new vulnerabilities.",
    date: "May 12, 2025",
    readTime: "8 min read",
    category: "AI Security",
    imageUrl: "/placeholder.svg?key=ai-cybersecurity",
    externalUrl: "https://dly.to/hk2ueJeSJzu",
    featured: true,
  },
  {
    id: 2,
    title: "The Future of Network Security in a Remote-First World",
    excerpt:
      "With remote work becoming the norm, traditional network security approaches are being challenged. Learn about the emerging strategies for securing distributed workforces.",
    date: "April 28, 2025",
    readTime: "6 min read",
    category: "Network Security",
    imageUrl: "/placeholder.svg?key=network-security",
    externalUrl: "https://dly.to/ASyaa6Y5enu",
  },
  {
    id: 3,
    title: "Blockchain Technology: Beyond Cryptocurrency",
    excerpt:
      "While often associated with cryptocurrency, blockchain technology has far-reaching applications in security, supply chain, and identity verification.",
    date: "April 15, 2025",
    readTime: "7 min read",
    category: "Blockchain",
    imageUrl: "/placeholder.svg?key=blockchain-tech",
    externalUrl: "https://dly.to/hk2ueJeSJzu",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <NavMenu />

      <main className="container mx-auto px-4 py-24">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-5xl font-bold text-gradient-blue-green">My Blog</h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Insights, analysis, and practical advice on cybersecurity, technology trends, and professional development.
          </p>
        </div>

        {/* Featured Post */}
        {blogPosts
          .filter((post) => post.featured)
          .map((post) => (
            <div key={post.id} className="mb-16">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="md:flex">
                  <div className="md:w-1/2 relative h-64 md:h-auto">
                    <Image src={post.imageUrl || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  </div>
                  <div className="md:w-1/2 p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="bg-gradient-blue-green text-white px-3 py-1 rounded-full text-sm">
                          Featured
                        </span>
                        <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                          {post.category}
                        </span>
                      </div>
                      <h2 className="text-3xl font-bold mb-4 text-gradient-blue-green">{post.title}</h2>
                      <p className="text-slate-600 mb-6">{post.excerpt}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <a href={post.externalUrl} target="_blank" rel="noopener noreferrer" className="inline-block">
                        <Button className="bg-gradient-blue-green hover:opacity-90">
                          Read Article
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

        {/* Regular Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts
            .filter((post) => !post.featured)
            .map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <Image src={post.imageUrl || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">{post.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gradient-blue-green">{post.title}</h3>
                  <p className="text-slate-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <a
                      href={post.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1"
                    >
                      Read on Daily.dev
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Daily.dev Profile */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gradient-blue-green mb-4">Follow Me on Daily.dev</h2>
          <p className="text-slate-700 mb-6 max-w-2xl mx-auto">
            I regularly share insights, articles, and engage with the tech community on Daily.dev. Join my squad to stay
            updated with my latest thoughts and discoveries.
          </p>
          <a href="https://app.daily.dev/TKs-virus" target="_blank" rel="noopener noreferrer" className="inline-block">
            <Button className="bg-gradient-blue-green hover:opacity-90">
              Visit My Daily.dev Profile
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </main>

      <footer className="border-t border-slate-200 py-8 text-center text-slate-600">
        <p>© {new Date().getFullYear()} Thokozile Msoni. All rights reserved.</p>
        <p className="mt-2 font-medium text-gradient-blue-green">"Create more, consume less"</p>
      </footer>
    </div>
  )
}
