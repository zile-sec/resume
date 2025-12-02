"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface CommunityCardProps {
  title: string
  description: string
  backgroundImage: string
  icon: React.ReactNode
  className?: string
}

export function CommunityCard({ title, description, backgroundImage, icon, className }: CommunityCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-lg shadow-lg border-l-4 border-gradient-blue-green group",
        className,
      )}
      whileHover={{ y: -5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-15 transition-opacity duration-300">
        <Image src={backgroundImage || "/placeholder.svg"} alt="" fill className="object-cover" />
      </div>

      {/* Background Pattern */}
      <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:opacity-20 transition-opacity duration-300 transform group-hover:scale-110 text-primary-500">
        {icon}
      </div>

      {/* Content */}
      <div className="relative z-10 bg-white dark:bg-slate-800 bg-opacity-80 dark:bg-opacity-80 p-6 h-full">
        <h3 className="text-xl font-bold mb-4 text-gradient-blue-green">{title}</h3>
        <p className="text-slate-700 dark:text-slate-300 mb-4 relative z-10">{description}</p>

        <div className="h-1 w-0 bg-gradient-blue-green group-hover:w-full transition-all duration-300 mt-4"></div>
      </div>
    </motion.div>
  )
}
