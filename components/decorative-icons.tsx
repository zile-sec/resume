"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface DecorativeIcon {
  src: string
  alt: string
  size: number
  position: {
    top?: string
    bottom?: string
    left?: string
    right?: string
  }
  rotation: number
  delay: number
}

export function DecorativeIcons() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const icons: DecorativeIcon[] = [
    {
      src: "/images/decorative/certificate-check.jpeg",
      alt: "Certificate",
      size: 60,
      position: { top: "15%", left: "5%" },
      rotation: -15,
      delay: 0.1,
    },
    {
      src: "/images/decorative/social-icon.jpeg",
      alt: "Social",
      size: 40,
      position: { top: "25%", right: "8%" },
      rotation: 10,
      delay: 0.2,
    },
    {
      src: "/images/decorative/document-check.jpeg",
      alt: "Document",
      size: 50,
      position: { top: "40%", left: "7%" },
      rotation: 5,
      delay: 0.3,
    },
    {
      src: "/images/decorative/secure-card.jpeg",
      alt: "Secure Card",
      size: 45,
      position: { bottom: "30%", right: "5%" },
      rotation: -8,
      delay: 0.4,
    },
    {
      src: "/images/decorative/clipboard-gear.jpeg",
      alt: "Clipboard",
      size: 70,
      position: { bottom: "15%", left: "10%" },
      rotation: 12,
      delay: 0.5,
    },
    {
      src: "/images/decorative/id-security.jpeg",
      alt: "ID Security",
      size: 55,
      position: { bottom: "10%", right: "12%" },
      rotation: -5,
      delay: 0.6,
    },
    // Additional icons with different positions
    {
      src: "/images/decorative/certificate-check.jpeg",
      alt: "Certificate",
      size: 45,
      position: { top: "60%", left: "15%" },
      rotation: 20,
      delay: 0.7,
    },
    {
      src: "/images/decorative/social-icon.jpeg",
      alt: "Social",
      size: 35,
      position: { top: "70%", right: "20%" },
      rotation: -12,
      delay: 0.8,
    },
    {
      src: "/images/decorative/document-check.jpeg",
      alt: "Document",
      size: 40,
      position: { top: "85%", left: "25%" },
      rotation: 8,
      delay: 0.9,
    },
    {
      src: "/images/decorative/secure-card.jpeg",
      alt: "Secure Card",
      size: 50,
      position: { top: "10%", right: "25%" },
      rotation: 15,
      delay: 1.0,
    },
    {
      src: "/images/decorative/clipboard-gear.jpeg",
      alt: "Clipboard",
      size: 60,
      position: { top: "50%", right: "15%" },
      rotation: -10,
      delay: 1.1,
    },
    {
      src: "/images/decorative/id-security.jpeg",
      alt: "ID Security",
      size: 40,
      position: { bottom: "40%", left: "20%" },
      rotation: 5,
      delay: 1.2,
    },
  ]

  if (!isMounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[-1]">
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          className="absolute opacity-[0.03] dark:opacity-[0.05]"
          style={{
            top: icon.position.top,
            bottom: icon.position.bottom,
            left: icon.position.left,
            right: icon.position.right,
            width: icon.size,
            height: icon.size,
          }}
          initial={{ opacity: 0, rotate: icon.rotation }}
          animate={{ opacity: 0.03, rotate: icon.rotation }}
          transition={{ delay: icon.delay, duration: 1 }}
        >
          <Image
            src={icon.src || "/placeholder.svg"}
            alt={icon.alt}
            width={icon.size}
            height={icon.size}
            className="w-full h-full object-contain"
          />
        </motion.div>
      ))}
    </div>
  )
}
