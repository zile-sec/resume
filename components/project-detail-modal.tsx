"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

interface ProjectDetailModalProps {
  title: string
  description: string
  longDescription?: string
  imageUrl: string
  githubUrl: string
  liveUrl?: string
  technologies?: string[]
  features?: string[]
  children: React.ReactNode
}

export function ProjectDetailModal({
  title,
  description,
  longDescription,
  imageUrl,
  githubUrl,
  liveUrl,
  technologies = [],
  features = [],
  children,
}: ProjectDetailModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden">
        <div className="relative h-60 w-full">
          <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6">
            <h2 className="text-2xl font-bold text-white">{title}</h2>
          </div>
        </div>
        <div className="p-6">
          <p className="text-slate-600 mb-6">{longDescription || description}</p>

          {features.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-2 text-slate-800">Key Features</h3>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {technologies.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-2 text-slate-800">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-4 mt-4">
            <Button asChild className="bg-gradient-blue-green hover:opacity-90">
              <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View on GitHub
              </Link>
            </Button>
            {liveUrl && (
              <Button asChild variant="outline">
                <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Link>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
