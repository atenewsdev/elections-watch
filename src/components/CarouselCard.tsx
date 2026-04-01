import React from 'react'

interface CarouselCardProps {
  photo: string;
}

const CarouselCard = ({ photo }: { photo: string }) => {
  return (
    <div className="w-40 h-60 sm:w-50 sm:h-70 md:w-60 md:h-80
                    shrink-0 rounded-xl overflow-hidden shadow-lg
                    transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.03] hover:shadow-[0_12px_32px_rgba(26,35,126,0.18)]">
      <img
        src={photo}
        alt="Candidate"
        className="w-full h-full object-cover object-top"
        height={2048}
        width={1536}
      />
    </div>
  )
}

export default CarouselCard