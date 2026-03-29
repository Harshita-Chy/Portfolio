import React from 'react'

const Card = () => {
  return (
    <div className="w-full flex justify-end">
        <div className="card w-full md:w-[60%] lg:w-[45%] xl:w-[40%] backdrop-blur-3xl bg-black/40 border border-[#f47346]/30 rounded-2xl p-8 md:p-12 shadow-[0_0_30px_rgba(244,115,70,0.15)] transition-all hover:shadow-[0_0_50px_rgba(244,115,70,0.3)]">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 [text-shadow:0_0_10px_#f64b35]">About Me</h2>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-4">
              I'm <strong>Harshita Kumari</strong>, a B.Tech Computer Science student at Netaji Subhas University of Technology (2023-2027). 
              I am a passionate full-stack developer eager to build scalable and impactful digital experiences.
            </p>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              I specialize in the MERN stack and have a strong foundation in Data Structures, Algorithms, and Object-Oriented Programming.
            </p>
        </div>
    </div>
  )
}

export default Card