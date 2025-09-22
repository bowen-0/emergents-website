/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark theme colors
        'dark': {
          'primary': '#030014',
          'secondary': '#0a0118',
          'surface': '#0f0320',
          'elevated': '#140428',
        },
        // Text colors
        'text': {
          'primary': '#ffffff',
          'secondary': '#efedfdb3',
          'muted': '#9ca3af',
          'accent': '#ba9cff',
        },
        // Accent colors
        'accent': {
          'purple': '#ba9cff',
          'pink': '#e59cff',
          'blue': '#6b8cff',
          'cyan': '#5ce1e6',
        },
        // Glass morphism
        'glass': {
          'light': 'rgba(255, 255, 255, 0.05)',
          'medium': 'rgba(255, 255, 255, 0.1)',
          'heavy': 'rgba(255, 255, 255, 0.2)',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'display': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '120': '30rem',
        '144': '36rem',
      },
      borderRadius: {
        'glass': '0.75rem',
        'card': '1rem',
        'button': '0.5rem',
      },
      backdropBlur: {
        'xs': '2px',
        'glass': '10px',
        'heavy': '20px',
      },
      animation: {
        'gradient': 'gradient 8s ease infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'scan': 'scan 8s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(186, 156, 255, 0.5), 0 0 10px rgba(186, 156, 255, 0.5)' },
          '100%': { boxShadow: '0 0 10px rgba(186, 156, 255, 0.8), 0 0 20px rgba(186, 156, 255, 0.8)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
      },
    },
  },
  plugins: [],
}