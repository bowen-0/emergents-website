import React from 'react'

interface SystemicStoriesIconProps {
  className?: string
}

export const SystemicStoriesIcon: React.FC<SystemicStoriesIconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Gradient definitions */}
      <defs>
        <linearGradient id="systemic-stories-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ba9cff" />
          <stop offset="100%" stopColor="#e59cff" />
        </linearGradient>
        <linearGradient id="systemic-stories-gradient-2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#6b8cff" />
          <stop offset="100%" stopColor="#ba9cff" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect x="0" y="0" width="48" height="48" rx="12" fill="url(#systemic-stories-gradient)" fillOpacity="0.1" />

      {/* Story path - a winding journey through the system */}
      <path
        d="M 10 38 C 16 38, 14 26, 24 24 C 34 22, 30 10, 38 10"
        stroke="url(#systemic-stories-gradient)"
        strokeWidth="1.5"
        fill="none"
        strokeOpacity="0.5"
      />

      {/* Nodes along the journey */}
      <circle cx="10" cy="38" r="3" fill="url(#systemic-stories-gradient-2)" fillOpacity="0.8" />
      <circle cx="24" cy="24" r="4" fill="url(#systemic-stories-gradient)" />
      <circle cx="38" cy="10" r="3" fill="url(#systemic-stories-gradient-2)" fillOpacity="0.8" />

      {/* Feedback loop around the central node */}
      <path
        d="M 24 17 C 29.5 17, 31 21, 31 24 C 31 28, 28 31, 24 31 C 20 31, 17 28, 17 24 C 17 21.5, 18.5 18.5, 21.5 17.5"
        stroke="url(#systemic-stories-gradient-2)"
        strokeWidth="1"
        fill="none"
        strokeOpacity="0.35"
      />
      {/* Loop arrowhead */}
      <path
        d="M 20 15.5 L 21.5 17.5 L 19.5 19"
        stroke="url(#systemic-stories-gradient-2)"
        strokeWidth="1"
        fill="none"
        strokeOpacity="0.5"
      />

      {/* Satellite nodes - the wider system the story reveals */}
      <circle cx="14" cy="14" r="2" fill="url(#systemic-stories-gradient)" fillOpacity="0.6" />
      <circle cx="36" cy="34" r="2" fill="url(#systemic-stories-gradient)" fillOpacity="0.6" />

      {/* Faint connections from satellites to the journey */}
      <line x1="14" y1="14" x2="21" y2="21" stroke="url(#systemic-stories-gradient)" strokeWidth="1" strokeOpacity="0.25" />
      <line x1="36" y1="34" x2="27" y2="27" stroke="url(#systemic-stories-gradient)" strokeWidth="1" strokeOpacity="0.25" />
    </svg>
  )
}
