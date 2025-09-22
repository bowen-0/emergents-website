import React from 'react'

interface CoachifyIconProps {
  className?: string
}

export const CoachifyIcon: React.FC<CoachifyIconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Gradient definitions */}
      <defs>
        <linearGradient id="coachify-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ba9cff" />
          <stop offset="100%" stopColor="#e59cff" />
        </linearGradient>
        <linearGradient id="coachify-gradient-2" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5ce1e6" />
          <stop offset="100%" stopColor="#6b8cff" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect x="0" y="0" width="48" height="48" rx="12" fill="url(#coachify-gradient)" fillOpacity="0.1" />

      {/* Headset/Microphone shape - representing voice AI */}
      <path
        d="M24 8 C16 8, 10 14, 10 22 L10 26 C10 28, 11 30, 14 30 L15 30 L15 20 C15 20, 15 13, 24 13 C33 13, 33 20, 33 20 L33 30 L34 30 C37 30, 38 28, 38 26 L38 22 C38 14, 32 8, 24 8 Z"
        fill="url(#coachify-gradient)"
        fillOpacity="0.8"
      />

      {/* Mic boom */}
      <path
        d="M33 28 C33 28, 33 32, 30 34 C27 36, 24 36, 24 36"
        stroke="url(#coachify-gradient-2)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />

      {/* Mic tip */}
      <circle cx="24" cy="37" r="3" fill="url(#coachify-gradient-2)" />

      {/* Sound waves - representing voice/audio */}
      <path
        d="M 16 18 Q 14 20, 16 22"
        stroke="url(#coachify-gradient-2)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        strokeOpacity="0.6"
      />
      <path
        d="M 13 16 Q 10 20, 13 24"
        stroke="url(#coachify-gradient-2)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        strokeOpacity="0.4"
      />

      <path
        d="M 32 18 Q 34 20, 32 22"
        stroke="url(#coachify-gradient-2)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        strokeOpacity="0.6"
      />
      <path
        d="M 35 16 Q 38 20, 35 24"
        stroke="url(#coachify-gradient-2)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        strokeOpacity="0.4"
      />

      {/* Training/Growth indicator - upward arrow */}
      <path
        d="M 24 28 L24 20 M24 20 L21 23 M24 20 L27 23"
        stroke="url(#coachify-gradient)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fillOpacity="0.6"
      />
    </svg>
  )
}