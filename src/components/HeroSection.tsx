import React from 'react'

const HeroSection: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute left-8 sm:left-16 md:left-32 top-10 sm:top-16">
        <h1 className="text-3xl sm:text-5xl md:text-7xl text-white font-bold">
          Happy Cows, Wealthy Farmers, Prosperous Nation
        </h1>
      </div>
      <div className="absolute left-8 sm:left-16 md:left-32 bottom-24 sm:bottom-40">
        <p className="text-lg sm:text-xl md:text-2xl text-yellow-400 font-semibold">
          Driven by Artificial Intelligence
        </p>
      </div>
      <div>
        <video src="/heroVideo.mp4" className="w-full h-auto object-cover"></video>
      </div>
    </div>
  )
}

export default HeroSection
