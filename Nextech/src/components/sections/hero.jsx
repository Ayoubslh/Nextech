


export default function HeroSection() {


  



  return (
    <section
      className="relative flex flex-col items-center justify-center text-center min-h-screen overflow-hidden px-4 py-8"
      style={{
        background: "linear-gradient(135deg, #544142 0%, #D44E50 100%)",
      }}
    >
      {/* CONTENT */}
      <div className="relative z-10 text-white max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold mb-4 leading-tight">
          NEX<span className="bg-gradient-to-r from-[#F0F0F0] to-[#D63738] bg-clip-text text-transparent">TECH</span>
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black mb-6 font-semibold">
          Your Hub for Tech Excellence
        </p>
        <p className="text-base md:text-lg lg:text-xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Join our dynamic tech community where learning exceeds traditional
          boundaries. Dive into innovation, collaborate on real projects, and
          shape the future of technology.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 md:mb-16">
          <button className="bg-[#D44E50] text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold shadow-md hover:scale-105 transition text-sm md:text-base">
            Join Our Community →
          </button>
          <button className="bg-white text-[#544142] px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold shadow-md hover:scale-105 transition text-sm md:text-base">
            Explore Events
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row justify-center items-center text-center gap-8 sm:gap-16 md:gap-24 lg:gap-30">
          <div className="flex flex-col justify-center items-center text-center">
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#ffffff]">+30</p>
            <p className="text-xs md:text-sm opacity-80">Active Members</p>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#ffffff]">+5</p>
            <p className="text-xs md:text-sm opacity-80">Tech Events</p>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#ffffff]">+10</p>
            <p className="text-xs md:text-sm opacity-80">Projects</p>
          </div>
        </div>
      </div>
    </section>
  );
}
