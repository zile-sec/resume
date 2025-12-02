import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, Tag } from "lucide-react"
import { cn } from "@/lib/utils"

interface BlogCardProps {
  title: string
  excerpt: string
  slug: string
  date: string
  readTime: string
  category: string
  imageUrl: string
  featured?: boolean
  className?: string
}

export function BlogCard({
  title,
  excerpt,
  slug,
  date,
  readTime,
  category,
  imageUrl,
  featured = false,
  className,
}: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className={cn(
        "group block overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg",
        featured ? "md:col-span-2" : "",
        className,
      )}
    >
      <div className="flex h-full flex-col md:flex-row">
        <div className="relative h-48 w-full md:h-auto md:w-2/5">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span className="rounded-full bg-gradient-blue-green px-3 py-1 text-xs font-medium text-white">
              {category}
            </span>
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-between p-6">
          <div>
            <h3 className={cn("mb-2 font-bold text-slate-800", featured ? "text-2xl" : "text-xl")}>{title}</h3>
            <p className="mb-4 text-slate-600">{excerpt}</p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{readTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <Tag size={14} />
              <span>{category}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
