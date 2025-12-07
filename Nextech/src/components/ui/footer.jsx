
export default function Footer() {
    return (
        <footer className="bg-black text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Left Column - Brand and Description */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-2">
                           <img src="/logo.png" alt="NEXTECH Logo" className="w-10 h-8" />
                            <span className="text-xl font-bold">NEXTECH</span>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                            Your hub for tech excellence. Join our dynamic community 
                            where learning exceeds traditional boundaries and innovation 
                            thrives.
                        </p>
                        {/* Social Media Icons */}
                        <div className="flex space-x-4">
                            <a href="https://www.instagram.com/nextech.squad/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors">
                              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
  <rect x="2.5" y="2.5" width="19" height="19" rx="5" ry="5" />
  <circle cx="12" cy="12" r="4" />
  <circle cx="17.2" cy="6.8" r="0.9" />
</svg>

                            </a>
                        </div>
                    </div>

                    {/* Middle Column - Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                    Partners
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Right Column - Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Contact</h3>
                        <div className="space-y-3">
                            <p className="text-gray-300">NTIC Faculty</p>
                            <a 
                                href="mailto:nextechsquad@gmail.com" 
                                className="text-gray-300 hover:text-white transition-colors block"
                            >
                                nextechsquad@gmail.com
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Copyright */}
                <div className="border-t border-gray-700 mt-8 pt-6">
                    <p className="text-gray-400 text-sm">
                        © 2024 Nextech. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}