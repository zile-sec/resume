"use client"

import type React from "react"

import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

interface CertificateModalProps {
  title: string
  imageUrl: string
  issuer: string
  issueDate: string
  children: React.ReactNode
}

export function CertificateModal({ title, imageUrl, issuer, issueDate, children }: CertificateModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[800px] p-6">
        <div className="flex flex-col space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold text-gradient-blue-green">{title}</h2>
              <p className="text-slate-600">
                Issued by {issuer} • {issueDate}
              </p>
            </div>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Download size={16} />
              Download
            </Button>
          </div>

          <div className="relative w-full h-[500px] rounded-lg overflow-hidden border border-slate-200">
            <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-contain" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
