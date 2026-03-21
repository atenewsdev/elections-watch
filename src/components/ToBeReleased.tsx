import React from 'react'

const ToBeReleased = () => {
  return (
        <div className="w-full flex flex-col items-center px-10">
            <div className='w-full min-h-[calc(100vh-28rem)] justify-center items-center flex flex-col'>
                <div className="flex flex-col items-center gap-4">
                    <p className="self-stretch text-center text-blue-400 font-bold font-montserrat
                                  text-5xl lg:text-6xl">
                        Writing in Progress
                    </p>
                </div>
                <p className="self-stretch text-center text-blue-400 font-normal font-montserrat text-lg mt-4">
                    We're hard at work crafting insightful content for you. Stay tuned for our upcoming articles!
                </p>
            </div>
        </div>
  )
}

export default ToBeReleased
