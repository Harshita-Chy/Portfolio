import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className="navbar h-16 flex justify-between items-center py-5 px-6 md:px-15 rounded-lg [text-shadow:0_0_10px_#f64b35]">
                <div className="left flex items-center text-white font-bold text-xl md:text-2xl">
                    <div className="w-12 h-12 mr-4 rounded-full border border-purple-300/60 shadow-[0_0_20px_rgba(168,85,247,0.4)] flex items-center justify-center text-purple-300 font-quote text-3xl bg-purple-900/30 backdrop-blur-md">
                      H
                    </div>
                    <h1>Harshita</h1>
                </div>
                <div className="right hidden md:block">
                    <ul className='flex gap-5 text-white font-bold text-xl'>
                        <a className='hover:text-gray-300 transition-all duration-300 cursor-pointer scroll-smooth' href="#about">About</a>
                        <a className='hover:text-gray-300 transition-all duration-300 cursor-pointer scroll-smooth' href="#skills">Skills</a>
                        <a className='hover:text-gray-300 transition-all duration-300 cursor-pointer scroll-smooth' href="#projects">Projects</a>
                        <a className='hover:text-gray-300 transition-all duration-300 cursor-pointer scroll-smooth' href="#contact">Contact</a>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar