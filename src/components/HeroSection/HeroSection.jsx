import React from 'react'
import profile from '../../assets/profile.png'

const HeroSection = () => {
  return (
    <div className='min-h-[60vh] flex pt-20 md:pt-40 pb-20 [text-shadow:0_0_15px_#f64b35]'>
        <p className='px-10 text-white font-quote text-4xl md:text-5xl lg:text-6xl text-center leading-relaxed md:leading-snug'>
          Just a girl in a world full of chaos… <br className="hidden md:block" /> quietly building her own path.
        </p>
        <img className='w-82 h-82 absolute right-45 top-50 rounded-tr-3xl rounded-bl-3xl border-4 border-primary shadow-[0_0_15px_#f0f7f99c]' src={profile} alt="Profile Photo" />
    </div>
  )
}

export default HeroSection