import { useState } from 'react'
import Header from './components/ui/header'
import HeroSection from './components/sections/hero'
import About from './components/sections/About'
import FaqSection from './components/sections/FAQ'
import Partners from './components/sections/Partners'
import Getintouch from './components/sections/Getintouch'
import Footer from './components/ui/footer'

function App() {
  

  return (
    
      <div>
        <Header />
        <HeroSection />
        <About />
        <FaqSection />
        <Partners />
        <Getintouch />
        <Footer />
    

        </div>
       
   
  )
}

export default App
