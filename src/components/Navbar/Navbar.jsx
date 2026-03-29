import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className="navbar h-16 flex justify-between items-center backdrop-blur-sm bg-white/10 py-5 px-6 md:px-15 rounded-lg [text-shadow:0_0_10px_#f64b35]">
                <div className="left flex items-center text-white font-bold text-xl">
                    <img src="" alt="" />
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