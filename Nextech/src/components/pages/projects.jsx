export default function Projects() {
  return (
    <div className="bg-gray-200 min-h-screen font-inter pt-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center py-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#313131] mb-6">
            Our Projects
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Explore the innovative projects developed by NEXTECH members.
            From web applications to mobile apps and AI solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
          {/* Placeholder project cards */}
          {[1, 2, 3, 4, 5, 6].map((project) => (
            <div key={project} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-[#D44E50] via-[#544142] to-[#313131] relative">
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <div className="text-white text-6xl opacity-30">
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-16 h-16">
                      <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#313131] mb-2">
                  Project {project}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  An innovative solution built with modern technologies to solve real-world problems.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-[#D44E50] text-white text-xs rounded">React</span>
                  <span className="px-2 py-1 bg-[#544142] text-white text-xs rounded">Node.js</span>
                  <span className="px-2 py-1 bg-[#313131] text-white text-xs rounded">MongoDB</span>
                </div>
                <div className="flex space-x-3">
                  <button className="flex-1 bg-[#D44E50] text-white px-4 py-2 rounded-md text-sm hover:bg-[#b03d3f] transition-colors">
                    View Demo
                  </button>
                  <button className="px-4 py-2 border border-[#D44E50] text-[#D44E50] rounded-md text-sm hover:bg-[#D44E50] hover:text-white transition-colors">
                    GitHub
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
