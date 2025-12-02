"use client"

import { useState } from "react"
import { Download, FileText, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

interface ResumeDownloadProps {
  resumeUrl: string
  className?: string
}

export function ResumeDownload({ resumeUrl, className }: ResumeDownloadProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)

  const viewUrl = "https://docs.google.com/document/d/1j7VDXhcyHmkZ2ZyaToRYcDr4oQeVNqkx/view"
  const previewUrl = "https://docs.google.com/document/d/1j7VDXhcyHmkZ2ZyaToRYcDr4oQeVNqkx/preview"
  const downloadUrl = "https://docs.google.com/document/d/1j7VDXhcyHmkZ2ZyaToRYcDr4oQeVNqkx/export?format=pdf"

  return (
    <div className={`${className || ""}`}>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
            <div className="flex items-center justify-center w-20 h-20 bg-gradient-blue-green rounded-full">
              <FileText className="text-white" size={40} />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-gradient-blue-green mb-2">My Resume</h3>
              <p className="text-slate-600">
                Download my resume to learn more about my experience, skills, and qualifications.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a href={downloadUrl} target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-blue-green hover:opacity-90">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </a>

            <a href={viewUrl} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="border-primary-200 text-primary-600 hover:border-primary-300 bg-transparent"
              >
                <Eye className="mr-2 h-4 w-4" />
                View Online
              </Button>
            </a>

            <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="border-primary-200 text-primary-600 hover:border-primary-300 bg-transparent"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Quick Preview
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl h-[80vh] p-0">
                <div className="h-full w-full">
                  <iframe src={previewUrl} className="w-full h-full" title="Resume Preview"></iframe>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-green-50 p-4 border-t border-slate-100">
          <div className="flex items-center justify-center gap-2 text-sm text-slate-600">
            <FileText size={16} className="text-primary-500" />
            <span>Last updated: December 2025</span>
          </div>
        </div>
      </div>
    </div>
  )
}
