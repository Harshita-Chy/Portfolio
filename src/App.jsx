import React from 'react'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import Introduction from './components/Introduction/Introduction'

import Work from './components/Work/Work'
import Skills from './components/Skill/Skills'
import Quote from './components/EndingSection/QuoteComponent'
import Footer from './components/Footer/Footer'
import Education from './components/Education/Education'
import Achievements from './components/Achievements/Achievements'
import bg from './assets/bg.jpg'

const App = () => {
  return (
    <div 
      className='px-5 md:px-10 lg:px-20 py-5 min-h-screen w-full font-sans text-white overflow-x-hidden'
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundColor: '#000'
      }}
    >
      <Navbar/>
      <HeroSection/>
      <Introduction/>
      <Skills/>
      <Work/>
      <Achievements/>
      <Education/>
      <Quote/>
      <Footer/>
    </div>
  )
}

export default App