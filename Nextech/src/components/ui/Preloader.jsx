export default function Preloader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-200">
      <div className="text-center">
        {/* Logo animation */}
        <div className="mb-8">
          <img 
            src="/logo.png" 
            alt="NEXTECH Logo" 
            className="w-16 h-12 mx-auto animate-pulse"
          />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-[#D44E50] to-[#544142] bg-clip-text text-transparent mt-2">
            NEXTECH
          </h1>
        </div>
        
        {/* Animated loading dots */}
        <div className="flex justify-center space-x-2">
          <div className="w-3 h-3 bg-[#D44E50] rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-[#D44E50] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-[#D44E50] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
        
        <p className="text-gray-600 text-sm mt-4">Loading amazing content...</p>
      </div>
    </div>
  )
}