// Create a new component for the retro background image
import Image from "next/image"

export function RetroBackground() {
  return (
    <div className="fixed inset-0 z-[-20] opacity-10">
      <Image src="/images/retro-workspace.jpg" alt="Retro tech workspace" fill className="object-cover" priority />
      <div className="absolute inset-0 bg-slate-50/80 dark:bg-slate-900/90"></div>
    </div>
  )
}
