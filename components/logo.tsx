import Image from "next/image"
import Link from "next/link"

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-10 h-10 overflow-hidden rounded-full bg-gradient-to-r from-primary-500 to-accent-500 p-0.5">
        <div className="absolute inset-0 rounded-full overflow-hidden bg-black flex items-center justify-center">
          <Image src="/images/logo.png" alt="TK Logo" width={32} height={32} className="object-contain" />
        </div>
      </div>
      <span className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-blue-600 bg-clip-text text-transparent">
        Thokozile
      </span>
    </Link>
  )
}
