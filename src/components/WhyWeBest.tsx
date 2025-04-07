import React from 'react'
import Carousel from './Carousel'

const WhyWeBest = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-20 px-4'>
      <h1 className='text-3xl sm:text-4xl font-bold text-center mb-6'>Why We Are The Best</h1>
      <div className="w-full">
        <img src="/cow-bg.svg" alt="Cow bg" className="w-full h-auto"/>
      </div>
      <div className="w-full mt-8">
        <Carousel />
      </div>
    </div>
  )
}

export default WhyWeBest
