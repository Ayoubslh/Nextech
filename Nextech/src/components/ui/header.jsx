import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-20 py-3 md:py-4 lg:py-6 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div
            className={`w-5 h-5 md:w-6 md:h-6 rotate-45 ${
              scrolled ? "bg-[#D44E50]" : "bg-white"
            }`}
          ></div>
          <h1
            className={`text-lg md:text-xl lg:text-2xl font-bold ${
              scrolled ? "text-[#313131]" : "text-white"
            }`}
          >
            <span className="text-[#D44E50]">NEX</span>TECH
          </h1>
        </div>

        {/* Navigation */}
        <nav
          className={`hidden lg:flex items-center gap-6 xl:gap-8 text-sm md:text-base font-medium transition-colors ${
            scrolled ? "text-[#313131]" : "text-white"
          }`}
        >
          <a href="#about" className="hover:text-[#D44E50] transition">
            About Us
          </a>
          <a href="#faq" className="hover:text-[#D44E50] transition">
            FAQ
          </a>
          <a href="#partners" className="hover:text-[#D44E50] transition">
            Partners
          </a>
          <a href="#contact" className="hover:text-[#D44E50] transition">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden p-2 rounded-md transition-colors ${
            scrolled ? "text-[#313131]" : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Right side buttons */}
        <div className="hidden md:flex items-center gap-2 md:gap-4">
          {/* Theme toggle placeholder */}
          <button
            aria-label="Toggle theme"
            className={`w-8 h-4 md:w-10 md:h-5 rounded-full flex items-center px-1 transition-colors ${
              scrolled ? "bg-[#E3E3E3]" : "bg-white/20"
            }`}
          >
            <div
              className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all ${
                scrolled ? "bg-[#D44E50]" : "bg-white"
              }`}
            ></div>
          </button>

          <button
            className={`px-3 py-2 md:px-4 md:py-2 lg:px-6 lg:py-3 rounded-md text-xs md:text-sm lg:text-base font-semibold transition-transform hover:scale-105 ${
              scrolled
                ? "bg-[#D44E50] text-white"
                : "bg-[#D44E50] text-white"
            }`}
          >
            <span className="hidden sm:inline">Join Event</span>
            <span className="sm:hidden">Join</span>
          </button>
        </div>
      </div>
    </header>
  );
}
