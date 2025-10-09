import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`w-full fixed top-0 left-0 z-20 py-3 md:py-4 lg:py-6 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div>
            <img src="/logo.png" alt="Logo" className="w-10 h-8" />
          </div>
          <h1
            className={`text-lg md:text-xl lg:text-2xl font-bold ${
              scrolled ? "text-[#313131]" : "text-white"
            }`}
          >
            <span className={ scrolled ? `bg-gradient-to-r from-[#D44E50] to-[#544142] bg-clip-text text-transparent` :`bg-gradient-to-r from-[#F0F0F0] to-[#D44E50] bg-clip-text text-transparent` }>
              NEXTECH </span>
          </h1>
        </Link>

        {/* Navigation */}
        <nav
          className={`hidden lg:flex items-center gap-6 xl:gap-8 text-sm md:text-base font-medium transition-colors ${
            scrolled ? "text-[#313131]" : "text-white"
          }`}
        >
          <Link 
            to="/" 
            className={`hover:text-[#D44E50] transition ${
              isActive('/') ? 'text-[#D44E50] font-semibold' : ''
            }`}
          >
            Home
          </Link>
          <Link 
            to="/events" 	
            className={`hover:text-[#D44E50] transition ${
              isActive('/events') ? 'text-[#D44E50] font-semibold' : ''
            }`}
          >
            Events
          </Link>
          <Link 
            to="/projects" 
            className={`hover:text-[#D44E50] transition ${
              isActive('/projects') ? 'text-[#D44E50] font-semibold' : ''
            }`}
          >
            Projects
          </Link>
          <Link 
            to="/members" 
            className={`hover:text-[#D44E50] transition ${
              isActive('/members') ? 'text-[#D44E50] font-semibold' : ''
            }`}
          >
            Members
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden p-2 rounded-md transition-colors ${
            scrolled ? "text-[#313131]" : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
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

          <Link
            to="/events"
            className={`px-3 py-2 md:px-4 md:py-2 lg:px-6 lg:py-3 rounded-md text-xs md:text-sm lg:text-base font-semibold transition-transform hover:scale-105 ${
              scrolled
                ? "bg-[#D44E50] text-white"
                : "bg-[#D44E50] text-white"
            }`}
          >
            <span className="hidden sm:inline">Join Event</span>
            <span className="sm:hidden">Join</span>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`lg:hidden absolute top-full left-0 w-full z-10 ${
          scrolled ? "bg-white shadow-lg" : "bg-black bg-opacity-90"
        }`}>
          <nav className="container mx-auto px-4 py-4 space-y-3">
            <Link
              to="/"
              className={`block text-base font-medium transition ${
                scrolled ? "text-[#313131] hover:text-[#D44E50]" : "text-white hover:text-[#D44E50]"
              } ${isActive('/') ? 'text-[#D44E50] font-semibold' : ''}`}
            >
              Home
            </Link>
            <Link
              to="/events"
              className={`block text-base font-medium transition ${
                scrolled ? "text-[#313131] hover:text-[#D44E50]" : "text-white hover:text-[#D44E50]"
              } ${isActive('/events') ? 'text-[#D44E50] font-semibold' : ''}`}
            >
              Events
            </Link>
            <Link
              to="/projects"
              className={`block text-base font-medium transition ${
                scrolled ? "text-[#313131] hover:text-[#D44E50]" : "text-white hover:text-[#D44E50]"
              } ${isActive('/projects') ? 'text-[#D44E50] font-semibold' : ''}`}
            >
              Projects
            </Link>
            <Link
              to="/members"
              className={`block text-base font-medium transition ${
                scrolled ? "text-[#313131] hover:text-[#D44E50]" : "text-white hover:text-[#D44E50]"
              } ${isActive('/members') ? 'text-[#D44E50] font-semibold' : ''}`}
            >
              Members
            </Link>
            <div className="pt-3 border-t border-gray-300">
              <Link
                to="/events"
                className="block w-full text-center bg-[#D44E50] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#b03d3f] transition-colors"
              >
                Join Event
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
