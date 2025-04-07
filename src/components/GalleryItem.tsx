import type { ReactNode } from "react"

interface GalleryItemProps {
  images: {
    src: string
    alt: string
  }[]
  caption: ReactNode
  className?: string
}

export default function GalleryItem({ images, caption, className = "" }: GalleryItemProps) {
  return (
    <div className={`mb-12 ${className}`}>
      <div className={`grid ${images.length > 1 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"} gap-4 mb-4`}>
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg">
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
      <div className="text-center text-sm md:text-base">{caption}</div>
    </div>
  )
}

