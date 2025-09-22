import React from 'react'

interface SystemicIconProps {
  className?: string
}

export const SystemicIcon: React.FC<SystemicIconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Gradient definitions */}
      <defs>
        <linearGradient id="systemic-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ba9cff" />
          <stop offset="100%" stopColor="#e59cff" />
        </linearGradient>
        <linearGradient id="systemic-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#6b8cff" />
          <stop offset="100%" stopColor="#ba9cff" />
        </linearGradient>
      </defs>

      {/* Background circle */}
      <rect x="0" y="0" width="48" height="48" rx="12" fill="url(#systemic-gradient)" fillOpacity="0.1" />

      {/* Central node */}
      <circle cx="24" cy="24" r="4" fill="url(#systemic-gradient)" />

      {/* Connected nodes - representing system mapping */}
      <circle cx="12" cy="12" r="3" fill="url(#systemic-gradient-2)" fillOpacity="0.8" />
      <circle cx="36" cy="12" r="3" fill="url(#systemic-gradient-2)" fillOpacity="0.8" />
      <circle cx="12" cy="36" r="3" fill="url(#systemic-gradient-2)" fillOpacity="0.8" />
      <circle cx="36" cy="36" r="3" fill="url(#systemic-gradient-2)" fillOpacity="0.8" />

      {/* Smaller satellite nodes */}
      <circle cx="24" cy="8" r="2" fill="url(#systemic-gradient)" fillOpacity="0.6" />
      <circle cx="24" cy="40" r="2" fill="url(#systemic-gradient)" fillOpacity="0.6" />
      <circle cx="8" cy="24" r="2" fill="url(#systemic-gradient)" fillOpacity="0.6" />
      <circle cx="40" cy="24" r="2" fill="url(#systemic-gradient)" fillOpacity="0.6" />

      {/* Connection lines */}
      <line x1="24" y1="24" x2="12" y2="12" stroke="url(#systemic-gradient)" strokeWidth="1.5" strokeOpacity="0.4" />
      <line x1="24" y1="24" x2="36" y2="12" stroke="url(#systemic-gradient)" strokeWidth="1.5" strokeOpacity="0.4" />
      <line x1="24" y1="24" x2="12" y2="36" stroke="url(#systemic-gradient)" strokeWidth="1.5" strokeOpacity="0.4" />
      <line x1="24" y1="24" x2="36" y2="36" stroke="url(#systemic-gradient)" strokeWidth="1.5" strokeOpacity="0.4" />

      {/* Straight connections */}
      <line x1="24" y1="20" x2="24" y2="8" stroke="url(#systemic-gradient-2)" strokeWidth="1" strokeOpacity="0.3" />
      <line x1="24" y1="28" x2="24" y2="40" stroke="url(#systemic-gradient-2)" strokeWidth="1" strokeOpacity="0.3" />
      <line x1="20" y1="24" x2="8" y2="24" stroke="url(#systemic-gradient-2)" strokeWidth="1" strokeOpacity="0.3" />
      <line x1="28" y1="24" x2="40" y2="24" stroke="url(#systemic-gradient-2)" strokeWidth="1" strokeOpacity="0.3" />

      {/* Circular connections suggesting flow */}
      <path
        d="M 12 12 Q 24 8, 36 12"
        stroke="url(#systemic-gradient)"
        strokeWidth="1"
        fill="none"
        strokeOpacity="0.2"
      />
      <path
        d="M 36 36 Q 24 40, 12 36"
        stroke="url(#systemic-gradient)"
        strokeWidth="1"
        fill="none"
        strokeOpacity="0.2"
      />
    </svg>
  )
}