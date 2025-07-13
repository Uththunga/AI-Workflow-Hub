import { useState } from 'react'

export interface AIAssistantButtonProps {
  onClick: () => void
  isAssistantOpen: boolean
}

export function AIAssistantButton({ onClick, isAssistantOpen }: AIAssistantButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="fixed
                    bottom-4 right-4 md:bottom-6 md:right-6
                    z-40">
      {/* Tooltip - Hidden on mobile for better UX */}
      {isHovered && !isAssistantOpen && (
        <div className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-secondary-900 text-white text-sm rounded-lg shadow-lg whitespace-nowrap animate-fade-in
                        hidden md:block">
          <div className="font-medium">Machan</div>
          <div className="text-xs text-secondary-300">Your AI Assistant</div>
          {/* Tooltip arrow */}
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-secondary-900"></div>
        </div>
      )}

      {/* Main Button */}
      <button
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative group
                    w-14 h-14 md:w-16 md:h-16
                    bg-gradient-to-br from-cyber-600 to-electric-600 hover:from-cyber-500 hover:to-electric-500 active:from-cyber-400 active:to-electric-400
                    rounded-full shadow-2xl shadow-cyber-500/30 hover:shadow-cyber-500/50
                    transition-all duration-300 transform hover:scale-110 active:scale-95
                    touch-manipulation
                    ${isAssistantOpen ? 'scale-95 rotate-45' : 'scale-100 rotate-0'}
                    pulse-glow`}
        aria-label="Open Machan AI Assistant"
      >
        
        {/* Animated border */}
        <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-br from-cyber-400 via-electric-400 to-neon-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-spin-slow"></div>
        <div className="absolute inset-1 rounded-full bg-gradient-to-br from-cyber-600 to-electric-600"></div>
        
        {/* Icon container */}
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          {isAssistantOpen ? (
            // Close icon when assistant is open
            <svg
              className="w-7 h-7 md:w-8 md:h-8 text-white transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // AI brain icon when assistant is closed
            <div className="relative">
              <svg
                className="w-7 h-7 md:w-8 md:h-8 text-white transition-transform duration-300 group-hover:scale-110"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                <circle cx="9" cy="9" r="1.5"/>
                <circle cx="15" cy="9" r="1.5"/>
                <circle cx="12" cy="15" r="1"/>
              </svg>
              
              {/* Pulsing dots around the icon */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-neon-400 rounded-full animate-ping opacity-75"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-electric-400 rounded-full animate-pulse"></div>
            </div>
          )}
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-white rounded-full opacity-60 animate-float`}
              style={{
                left: `${20 + (i * 10)}%`,
                top: `${20 + (i * 8)}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${2 + (i * 0.3)}s`
              }}
            ></div>
          ))}
        </div>
      </button>

      {/* Notification badge for new features */}
      {!isAssistantOpen && (
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-neon-500 to-neon-400 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg shadow-neon-500/30 animate-pulse">
          <span className="text-xs">AI</span>
        </div>
      )}


    </div>
  )
}
