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
      className={`w-full fixed top-0 left-0 z-20 py-6 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div
            className={`w-6 h-6 rotate-45 ${
              scrolled ? "bg-[#D44E50]" : "bg-white"
            }`}
          ></div>
          <h1
            className={`text-xl font-bold ${
              scrolled ? "text-[#313131]" : "text-white"
            }`}
          >
            <span className="text-[#D44E50]">NEX</span>TECH
          </h1>
        </div>

        {/* Navigation */}
        <nav
          className={`hidden md:flex items-center gap-8 text-sm font-medium transition-colors ${
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

        {/* Right side buttons */}
        <div className="flex items-center gap-4">
          {/* Theme toggle placeholder */}
          <button
            aria-label="Toggle theme"
            className={`w-10 h-5 rounded-full flex items-center px-1 transition-colors ${
              scrolled ? "bg-[#E3E3E3]" : "bg-white/20"
            }`}
          >
            <div
              className={`w-4 h-4 rounded-full transition-all ${
                scrolled ? "bg-[#D44E50]" : "bg-white"
              }`}
            ></div>
          </button>

          <button
            className={`px-4 py-2 rounded-md text-sm font-semibold transition-transform hover:scale-105 ${
              scrolled
                ? "bg-[#D44E50] text-white"
                : "bg-[#D44E50] text-white"
            }`}
          >
            Join Event
          </button>
        </div>
      </div>
    </header>
  );
}
