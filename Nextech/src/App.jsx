
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
      <div className="w-[90%] sm:w-[80%] lg:w-[60%] mx-auto 
                min-h-[220px] sm:min-h-[300px] lg:h-80 
                bg-[#FF0202] flex flex-col items-center justify-center 
                rounded-lg px-4 py-6 sm:px-6 sm:py-8 gap-3 sm:gap-4 mb-10">

  <h2 className="text-white text-center font-bold 
                 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
    Become a Partner
  </h2>

  <p className="text-white text-center 
                text-base sm:text-lg md:text-xl lg:text-2xl 
                px-2 sm:px-4 md:px-8">
    We're always looking for new partners to collaborate with.
    Let's work together to advance technology education and innovation.
  </p>

  <button className="bg-white text-[#FF0202] 
                     w-[140px] sm:w-[160px] md:w-[174px] 
                     h-[48px] sm:h-[52px] md:h-[56px] 
                     rounded-md mt-3 text-base sm:text-lg font-medium 
                     hover:bg-[#ffebeb] transition-colors">
    Join Event
  </button>
</div>


        <Getintouch />
        <Footer />

      </div>

  )
}

export default App
