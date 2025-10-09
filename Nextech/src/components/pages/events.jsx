export default function Events() {
  return (
    <div className="bg-gray-200 min-h-screen font-inter pt-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center py-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#313131] mb-6">
            Events
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Discover upcoming tech events, workshops, and meetups organized by NEXTECH.
            Join us to learn, network, and grow together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
          {/* Placeholder event cards */}
          {[1, 2, 3].map((event) => (
            <div key={event} className="bg-white rounded-lg shadow-md p-6">
              <div className="h-40 bg-gradient-to-r from-[#D44E50] to-[#544142] rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold text-[#313131] mb-2">
                Tech Event {event}
              </h3>
              <p className="text-gray-600 mb-4">
                Join us for an exciting tech event featuring workshops, networking, and innovation.
              </p>
              <button className="bg-[#D44E50] text-white px-6 py-2 rounded-md hover:bg-[#b03d3f] transition-colors">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
