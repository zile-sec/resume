import Image from "next/image"

interface SectionIconProps {
  section: string
}

export function SectionIcons({ section }: SectionIconProps) {
  const getIcons = () => {
    switch (section) {
      case "projects":
        return [
          {
            src: "/images/decorative/clipboard-gear.jpeg",
            alt: "Clipboard with gear",
            size: 40,
            className: "absolute -top-5 -right-5 opacity-10 rotate-12",
          },
          {
            src: "/images/decorative/document-check.jpeg",
            alt: "Document with check",
            size: 35,
            className: "absolute -bottom-4 -left-4 opacity-10 -rotate-12",
          },
        ]
      case "experience":
        return [
          {
            src: "/images/decorative/certificate-check.jpeg",
            alt: "Certificate",
            size: 40,
            className: "absolute -top-5 -left-5 opacity-10 rotate-6",
          },
          {
            src: "/images/decorative/id-security.jpeg",
            alt: "ID Security",
            size: 35,
            className: "absolute -bottom-4 -right-4 opacity-10 -rotate-6",
          },
        ]
      case "community":
        return [
          {
            src: "/images/decorative/social-icon.jpeg",
            alt: "Social",
            size: 40,
            className: "absolute -top-5 -left-5 opacity-10 rotate-6",
          },
          {
            src: "/images/decorative/id-security.jpeg",
            alt: "ID Security",
            size: 35,
            className: "absolute -bottom-4 -right-4 opacity-10 -rotate-6",
          },
        ]
      case "contact":
        return [
          {
            src: "/images/decorative/social-icon.jpeg",
            alt: "Social",
            size: 40,
            className: "absolute -top-5 -right-5 opacity-10 rotate-12",
          },
          {
            src: "/images/decorative/secure-card.jpeg",
            alt: "Secure Card",
            size: 35,
            className: "absolute -bottom-4 -left-4 opacity-10 -rotate-12",
          },
        ]
      default:
        return []
    }
  }

  const icons = getIcons()

  return (
    <>
      {icons.map((icon, index) => (
        <div key={index} className={`${icon.className} hidden md:block`}>
          <Image
            src={icon.src || "/placeholder.svg"}
            alt={icon.alt}
            width={icon.size}
            height={icon.size}
            className="w-full h-full object-contain"
          />
        </div>
      ))}
    </>
  )
}
