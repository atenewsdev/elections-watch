import React from 'react'

interface CarouselCardProps {
  src: string;
}

export default function CarouselCard({ src }: CarouselCardProps) {
  return (
    <div className="w-55 bg-white rounded-2xl overflow-hidden shadow-[0_4px_18px_rgba(26,35,126,0.10)] shrink-0
                    transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.03] hover:shadow-[0_12px_32px_rgba(26,35,126,0.18)]">
      <img
        src={src}
        className="w-full h-70 object-cover object-top block"
      />
    </div>
  )
}
