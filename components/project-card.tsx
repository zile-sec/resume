"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  githubUrl: string
  liveUrl?: string
  className?: string
  technologies?: string[]
}

export function ProjectCard({
  title,
  description,
  imageUrl,
  githubUrl,
  liveUrl,
  className,
  technologies = [],
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={cn(
        "bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-l-2 border-gradient-blue-green",
        className,
      )}
      whileHover={{ y: -5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-700"
          style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gradient-blue-green">{title}</h3>
        <p className="text-slate-600 dark:text-slate-300 mb-4">{description}</p>

        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <Github size={16} />
              <span>GitHub</span>
            </Link>
            {liveUrl && (
              <Link
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </Link>
            )}
          </div>

          <Link
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 hover:text-primary-700 transition-colors"
          >
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
