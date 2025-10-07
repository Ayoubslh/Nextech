export default function Header() {
  return (
    <header className="w-full absolute top-0 left-0 z-20 py-6">
      <div className="container mx-auto px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-[#D44E50] rotate-45"></div>
          <h1 className="text-xl font-bold text-white">
            <span className="text-[#D44E50]">NEX</span>TECH
          </h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-white text-sm font-medium">
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
            className="w-10 h-5 bg-white/20 rounded-full flex items-center px-1"
          >
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </button>

          <button className="bg-[#D44E50] text-white px-4 py-2 rounded-md text-sm font-semibold hover:scale-105 transition">
            Join Event
          </button>
        </div>
      </div>
    </header>
  );
}
