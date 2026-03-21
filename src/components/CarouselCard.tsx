import React from 'react'

interface CarouselCardProps {
  photo: string;
}

const CarouselCard = ({ photo }: { photo: string }) => {
  return (
    <div className="w-40 sm:w-50 lg:w-60 shrink-0 rounded-xl overflow-hidden shadow-md">
      <img
        src={photo}
        alt="Candidate"
        className="w-full h-full object-cover object-top"
      />
    </div>
  )
}

export default CarouselCard