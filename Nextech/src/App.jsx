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
    
      <div className="App bg-gray-200">
        <Header />
        <HeroSection />
        <About />
        <FaqSection />
        <Partners />
        {/* this is a card for partnership its background is red with a button join event , centered rounded corners 80% width and 380 height, title is 40px size text is 32px and the button is 174*56 */}
        <div className='h-96 w-[60%] mx-auto bg-red-500 flex flex-col items-center justify-center rounded-lg'>
            <h2 className='text-white text-center p-5 font-bold text-[40px]'>Become a Partner</h2>
            <p className='text-white text-center text-[32px]'>Join us in our mission to drive innovation and excellence.</p>
            <button className='bg-white text-red-500 w-[174px] h-[56px] rounded-md mt-2'>Join Event</button>

        </div>
        <Getintouch />
        <Footer />

      </div>

  )
}

export default App
