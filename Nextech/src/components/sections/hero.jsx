


export default function HeroSection() {


  



  return (
    <section
      className="relative flex flex-col items-center justify-center text-center h-screen overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #544142 0%, #D44E50 100%)",
      }}
    >
     

      {/* CONTENT */}
      <div className="relative z-10 text-white max-w-3xl px-6">
        <h1 className="text-9xl font-extrabold mb-4">
         NEX<span className="bg-gradient-to-r from-[#F0F0F0] to-[#D63738] bg-clip-text text-transparent">TECH</span>
        </h1>
        <p className="text-5xl text-black mb-6 font-semibold">
          Your Hub for Tech Excellence
        </p>
        <p className="text-lg opacity-90 mb-8">
          Join our dynamic tech community where learning exceeds traditional
          boundaries. Dive into innovation, collaborate on real projects, and
          shape the future of technology.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-[#D44E50] text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:scale-105 transition">
            Join Our Community →
          </button>
          <button className="bg-white text-[#544142] px-6 py-3 rounded-lg font-semibold shadow-md hover:scale-105 transition">
            Explore Events
          </button>
        </div>

        <div className="flex justify-center items-center text-center gap-30 mt-16">
          <div className="justify-center items-center text-center">
            <p className="text-5xl font-bold text-[#ffffff]">+30</p>
            <p className="text-sm opacity-80">Active Member</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-[#ffffff]">+5</p>
            <p className="text-sm opacity-80">Tech Event</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-[#ffffff]">+10</p>
            <p className="text-sm opacity-80">Projects</p>
          </div>
        </div>
      </div>
    </section>
  );
}
