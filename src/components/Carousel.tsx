import React from 'react'
import CarouselCard from './CarouselCard'
import candidatesData from '@/data/candidates.json'

const allCandidates = Object.values(candidatesData)
  .flatMap(category => Object.values(category))
  .flat();

// Triple loop for smoother infinite scroll on larger screens
const loopedCandidates = [...allCandidates, ...allCandidates, ...allCandidates];

const Carousel = () => {
  return (
    <div className="carousel-wrapper relative w-140 lg:w-full overflow-hidden">

      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-[clamp(30px,5vw,80px)] bg-linear-to-r from-[#e8eaf6] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-[clamp(30px,5vw,80px)] bg-linear-to-l from-[#e8eaf6] to-transparent z-10 pointer-events-none" />

      {/* Scrolling track */}
      <div className="carousel-track animate-scroll-left flex gap-3 sm:gap-5 w-max py-8 sm:py-12">
        {loopedCandidates.map((candidate, index) => (
          <CarouselCard
            key={index}
            photo={candidate.photo}
          />
        ))}
      </div>

    </div>
  )
}

export default Carousel