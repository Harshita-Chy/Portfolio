import React from 'react'

const Footer = () => {
  return (
    <div className="w-full border-t border-[#f47346]/30 py-8 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm md:text-base px-6 mt-10">
        <div className="mb-6 md:mb-0 text-center md:text-left">
            <p className="mb-1 text-white font-bold">Harshita Kumari</p>
            <p className="mb-2">kumariharshita258@gmail.com | +91-9718878328</p>
            <p>© 2026 Harshita Kumari. All rights reserved.</p>
        </div>
        <div className="flex gap-6">
            <a href="https://github.com/Harshita-Chy/" target="_blank" rel="noopener noreferrer" className="hover:text-[#f47346] hover:[text-shadow:0_0_10px_#f64b35] transition-all">GitHub</a>
            <a href="https://www.linkedin.com/in/harshita-kumari258/" target="_blank" rel="noopener noreferrer" className="hover:text-[#f47346] hover:[text-shadow:0_0_10px_#f64b35] transition-all">LinkedIn</a>
        </div>
    </div>
  )
}

export default Footer