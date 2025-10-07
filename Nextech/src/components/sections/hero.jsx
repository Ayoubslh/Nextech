


export default function HeroSection() {


  



  return (
    <section
      className="relative flex flex-col items-center justify-center text-center h-screen overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #D44E50 0%, #544142 100%)",
      }}
    >
     

      {/* CONTENT */}
      <div className="relative z-10 text-white max-w-3xl px-6">
        <h1 className="text-6xl font-extrabold mb-4">
          <span className="text-[#D44E50]">NEX</span>TECH
        </h1>
        <h2 className="text-2xl mb-6 font-medium">
          Your Hub for Tech Excellence
        </h2>
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

        <div className="flex justify-center gap-10 mt-16">
          <div>
            <p className="text-3xl font-bold text-[#D44E50]">+100</p>
            <p className="text-sm opacity-80">Active Member</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#D44E50]">+50</p>
            <p className="text-sm opacity-80">Tech Event</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#D44E50]">+25</p>
            <p className="text-sm opacity-80">Projects</p>
          </div>
        </div>
      </div>
    </section>
  );
}
