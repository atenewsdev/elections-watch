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
    <div className='carousel-wrapper relative w-130 lg:w-full md:w-180 overflow-hidden'>
      <div className='carousel-track animate-scroll-left flex gap-5 w-max py-12'>
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