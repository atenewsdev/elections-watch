import React from 'react'
import CarouselCard from './CarouselCard'
import candidatesData from '@/data/candidates.json'

const allCandidates = Object.values(candidatesData)
  .flatMap(category => Object.values(category))
  .flat();

const loopedCandidates = [...allCandidates, ...allCandidates];

const Carousel = () => {
  return (
    <div className='carousel-wrapper relative w-full overflow-hidden'>
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