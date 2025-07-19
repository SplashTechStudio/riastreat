"use client"

export default function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Phone to Dispatch Animation */}
      <div className="absolute top-1/4 left-0 animate-pulse">
        <div className="flex items-center space-x-8 opacity-10">
          {/* Phone */}
          <svg width="40" height="60" viewBox="0 0 40 60" className="text-pink-300">
            <rect x="5" y="5" width="30" height="50" rx="5" fill="currentColor" stroke="currentColor" strokeWidth="2" />
            <circle cx="20" cy="15" r="2" fill="white" />
            <rect x="10" y="20" width="20" height="25" fill="white" rx="2" />
          </svg>

          {/* Arrow */}
          <svg width="60" height="20" viewBox="0 0 60 20" className="text-pink-200 animate-pulse">
            <path d="M5 10 L45 10 M40 5 L45 10 L40 15" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>

          {/* Dispatch Center */}
          <svg width="50" height="40" viewBox="0 0 50 40" className="text-pink-300">
            <rect x="5" y="15" width="40" height="20" fill="currentColor" />
            <polygon points="5,15 25,5 45,15" fill="currentColor" />
            <rect x="15" y="20" width="8" height="10" fill="white" />
            <rect x="27" y="20" width="8" height="10" fill="white" />
          </svg>
        </div>
      </div>

      {/* Dispatch to Doorstep Animation */}
      <div className="absolute top-2/3 right-0 animate-pulse" style={{ animationDelay: "2s" }}>
        <div className="flex items-center space-x-8 opacity-10">
          {/* Delivery Truck */}
          <svg width="60" height="30" viewBox="0 0 60 30" className="text-pink-300">
            <rect x="5" y="10" width="35" height="15" fill="currentColor" />
            <rect x="40" y="15" width="15" height="10" fill="currentColor" />
            <circle cx="15" cy="25" r="4" fill="white" />
            <circle cx="45" cy="25" r="4" fill="white" />
            <rect x="10" y="12" width="8" height="6" fill="white" />
            <rect x="20" y="12" width="8" height="6" fill="white" />
          </svg>

          {/* Arrow */}
          <svg width="60" height="20" viewBox="0 0 60 20" className="text-pink-200 animate-pulse">
            <path d="M5 10 L45 10 M40 5 L45 10 L40 15" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>

          {/* House */}
          <svg width="50" height="40" viewBox="0 0 50 40" className="text-pink-300">
            <polygon points="25,5 5,20 45,20" fill="currentColor" />
            <rect x="10" y="20" width="30" height="15" fill="currentColor" />
            <rect x="18" y="25" width="6" height="10" fill="white" />
            <rect x="28" y="25" width="8" height="6" fill="white" />
          </svg>
        </div>
      </div>

      {/* Floating Doughnut Icons */}
      <div className="absolute top-1/3 left-1/4 animate-bounce opacity-5" style={{ animationDelay: "1s" }}>
        <svg width="30" height="30" viewBox="0 0 30 30" className="text-pink-200">
          <circle cx="15" cy="15" r="12" fill="currentColor" />
          <circle cx="15" cy="15" r="5" fill="white" />
        </svg>
      </div>

      <div className="absolute top-1/2 right-1/3 animate-bounce opacity-5" style={{ animationDelay: "3s" }}>
        <svg width="25" height="25" viewBox="0 0 25 25" className="text-pink-200">
          <circle cx="12.5" cy="12.5" r="10" fill="currentColor" />
          <circle cx="12.5" cy="12.5" r="4" fill="white" />
        </svg>
      </div>
    </div>
  )
}
