import { BlogCard } from "@/components/blog-card"

// Sample blog data - in a real application, this would come from a database or CMS
const featuredPosts = [
  {
    title: "The Rising Threat of Ransomware: How to Protect Your Organization",
    slug: "rising-threat-ransomware",
    excerpt:
      "Ransomware attacks have increased by 150% in the past year. Learn the essential strategies to protect your organization's critical data and infrastructure.",
    date: "May 10, 2025",
    readTime: "8 min read",
    category: "Threat Analysis",
    imageUrl: "/cybersecurity-ransomware.png",
    featured: true,
  },
  {
    title: "Zero Trust Architecture: Implementation Guide for Small Businesses",
    slug: "zero-trust-architecture-small-business",
    excerpt:
      "Zero Trust is no longer just for enterprises. This guide breaks down how small businesses can implement this security model without breaking the bank.",
    date: "April 28, 2025",
    readTime: "6 min read",
    category: "Network Security",
    imageUrl: "/placeholder.svg?key=bsxht",
  },
  {
    title: "AI in Cybersecurity: Friend or Foe?",
    slug: "ai-cybersecurity-friend-foe",
    excerpt:
      "As AI becomes more prevalent in security tools, we must also consider how it's being weaponized by attackers. This analysis explores both sides of the AI security equation.",
    date: "April 15, 2025",
    readTime: "10 min read",
    category: "AI Security",
    imageUrl: "/placeholder.svg?key=cvm6m",
  },
]

export function FeaturedBlogSection() {
  return (
    <section id="blog" className="py-16">
      <h2 className="mb-2 text-4xl font-bold text-gradient-blue-green">Blog</h2>
      <div className="mb-8 h-1 w-20 bg-gradient-blue-green"></div>

      <div className="mb-6 flex items-center justify-between">
        <p className="text-lg text-slate-700">
          Sharing insights and analysis on cybersecurity trends, threats, and solutions.
        </p>
        <a href="/blog" className="text-gradient-blue-green font-medium transition-all hover:underline">
          View all posts →
        </a>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredPosts.map((post, index) => (
          <BlogCard
            key={post.slug}
            title={post.title}
            excerpt={post.excerpt}
            slug={post.slug}
            date={post.date}
            readTime={post.readTime}
            category={post.category}
            imageUrl={post.imageUrl}
            featured={index === 0}
            className={index === 0 ? "lg:col-span-2" : ""}
          />
        ))}
      </div>
    </section>
  )
}
