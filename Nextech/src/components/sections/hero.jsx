import { useMemo } from "react";
import particles from "./../../assets/particles.svg";

export default function HeroSection() {
  // Generate non-overlapping particle positions
  const particlePositions = useMemo(() => {
    const positions = [];
    const count = 12; // fewer = less clutter

    for (let i = 0; i < count; i++) {
      // Distribute particles more evenly across grid-like regions
      const row = Math.floor(i / 4);
      const col = i % 4;
      const topBase = (row / 3) * 100; // 0%, 33%, 66%
      const leftBase = (col / 4) * 100; // 0%, 25%, 50%, 75%

      positions.push({
        top: `${topBase + Math.random() * 10 - 5}%`, // small random offset
        left: `${leftBase + Math.random() * 10 - 5}%`,
        size: `${200 + Math.random() * 60}px`, // slightly smaller for elegance
        opacity: 1, // very soft look (0.6–0.8)
        delay: `${Math.random() * 5}s`,
      });
    }
    return positions;
  }, []);

  return (
    <section
      className="relative flex flex-col items-center justify-center text-center min-h-screen overflow-hidden px-4 py-8"
      style={{
        background: "linear-gradient(135deg, #544142 0%, #D44E50 100%)",
      }}
    >
      {/* PARTICLES BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {particlePositions.map((p, i) => (
          <img
            key={i}
            src={particles}
            alt="particle"
            className="absolute animate-float pointer-events-none select-none"
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
              animationDelay: p.delay,
              filter: "blur(1px)", // soft glow
            }}
          />
        ))}
      </div>

      {/* CONTENT */}
      <div className="pt-16 z-10 text-white max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold mb-4 leading-tight">
          NEX
          <span className="bg-gradient-to-r from-[#F0F0F0] to-[#D63738] bg-clip-text text-transparent">
            TECH
          </span>
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
        <div className="flex  sm:flex-row justify-center items-center text-center gap-8 sm:gap-16 md:gap-24 lg:gap-30">
          <div className="flex flex-col justify-center items-center text-center">
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#ffffff]">
              +30
            </p>
            <p className="text-xs md:text-sm opacity-80">Active Members</p>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#ffffff]">
              +5
            </p>
            <p className="text-xs md:text-sm opacity-80">Tech Events</p>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#ffffff]">
              +10
            </p>
            <p className="text-xs md:text-sm opacity-80">Projects</p>
          </div>
        </div>
      </div>

      {/* FLOATING ANIMATION */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0);
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
