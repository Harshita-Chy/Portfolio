import React from 'react'
import profile from '../../assets/profile.png'

const HeroSection = () => {
  return (
    <section className='min-h-70vh flex items-center justify-center px-10 md:px-16  pt-30'>

      <div className='flex flex-col-reverse md:flex-row items-center justify-between gap-30 max-w-7xl w-full'>

     
        <div className='flex-1 text-center md:text-left'>
          <p className='text-white font-quote text-4xl sm:text-5xl lg:text-6xl leading-relaxed md:leading-snug [text-shadow:0_0_15px_#f64b35]'>
            Just a girl in a world full of chaos…
            <br className="hidden md:block" />
            quietly building her own path.
          </p>
        </div>

    
        <div className='flex justify-center flex-1'>
          <img
            src={profile}
            alt="Profile"
            className='
              w-64 sm:w-72 md:w-80 lg:w-[22rem]
              h-64 sm:h-72 md:h-80 lg:h-[22rem]
              object-cover
              rounded-tr-[4rem]
              rounded-bl-[4rem]
              border-4 border-[#f47346]
              shadow-[0_0_30px_rgba(240,247,249,0.35)]
              hover:scale-105
              transition-all
              duration-500
            '
          />
        </div>

      </div>
    </section>
  )
}

export default HeroSection