import { useState } from 'react'
import Header from './components/ui/header'
import HeroSection from './components/sections/hero'
import About from './components/sections/About'
import FaqSection from './components/sections/FAQ'
import Partners from './components/sections/Partners'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
        <Header />
        <HeroSection />
        <About />
        <FaqSection />
        <Partners />
    

        </div>
       
   
  )
}

export default App
