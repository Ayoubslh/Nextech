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
    
      <div className="App bg-gray-200 font-inter">
        <Header />
        <HeroSection />
        <About />
        <FaqSection />
        <Partners />
        {/* this is a card for partnership its background is red with a button join event , centered rounded corners 80% width and 380 height, title is 40px size text is 32px and the button is 174*56 */}
        <div className='min-h-[200px] sm:min-h-[300px] lg:h-80  w-[60%] mx-auto  bg-[#FF0202] flex flex-col items-center justify-center rounded-lg px-2 py-4 gap-2 mb-10' >
            <h2 className='text-white text-center p-4  font-bold text-[40px]'>Become a Partner</h2>
            <p className='text-white text-center p-4 text-2xl'>We're always looking for new partners to collaborate with. Let's work together to advance technology education and innovation</p>
            <button className='bg-white text-[#FF0202] w-[174px] h-[56px] rounded-md mt-2'>Join Event</button>

        </div>
        <Getintouch />
        <Footer />

      </div>

  )
}

export default App
