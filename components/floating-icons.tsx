"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface FloatingIcon {
  src: string
  alt: string
  size: number
  initialPosition: {
    top: string
    left: string
  }
  floatDistance: number
  duration: number
  delay: number
}

export function FloatingIcons() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const icons: FloatingIcon[] = [
    {
      src: "/images/decorative/certificate-check.jpeg",
      alt: "Certificate",
      size: 50,
      initialPosition: { top: "20%", left: "10%" },
      floatDistance: 20,
      duration: 4,
      delay: 0,
    },
    {
      src: "/images/decorative/social-icon.jpeg",
      alt: "Social",
      size: 40,
      initialPosition: { top: "30%", left: "85%" },
      floatDistance: 15,
      duration: 5,
      delay: 1,
    },
    {
      src: "/images/decorative/document-check.jpeg",
      alt: "Document",
      size: 45,
      initialPosition: { top: "70%", left: "15%" },
      floatDistance: 25,
      duration: 6,
      delay: 2,
    },
    {
      src: "/images/decorative/secure-card.jpeg",
      alt: "Secure Card",
      size: 55,
      initialPosition: { top: "80%", left: "80%" },
      floatDistance: 18,
      duration: 7,
      delay: 1.5,
    },
    {
      src: "/images/decorative/clipboard-gear.jpeg",
      alt: "Clipboard",
      size: 60,
      initialPosition: { top: "40%", left: "90%" },
      floatDistance: 22,
      duration: 8,
      delay: 0.5,
    },
    {
      src: "/images/decorative/id-security.jpeg",
      alt: "ID Security",
      size: 45,
      initialPosition: { top: "60%", left: "5%" },
      floatDistance: 20,
      duration: 6,
      delay: 2.5,
    },
  ]

  if (!isMounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[-1]">
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          className="absolute opacity-[0.04] dark:opacity-[0.06]"
          style={{
            top: icon.initialPosition.top,
            left: icon.initialPosition.left,
            width: icon.size,
            height: icon.size,
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 0.04,
            y: [0, icon.floatDistance, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            opacity: { duration: 1, delay: icon.delay },
            y: {
              repeat: Number.POSITIVE_INFINITY,
              duration: icon.duration,
              ease: "easeInOut",
            },
            rotate: {
              repeat: Number.POSITIVE_INFINITY,
              duration: icon.duration * 1.5,
              ease: "easeInOut",
            },
          }}
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
