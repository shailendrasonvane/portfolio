/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B82F6', // Electric Blue
          glow: 'rgba(59, 130, 246, 0.15)',
        },
        secondary: {
          DEFAULT: '#10B981', // Emerald Green
          glow: 'rgba(16, 185, 129, 0.15)',
        },
        dark: {
          base: '#030712', // slate-950
          card: '#0B0F19', // darker blue-slate
          border: 'rgba(255, 255, 255, 0.08)',
        },
        light: {
          base: '#F8FAFC',
          card: '#FFFFFF',
          border: 'rgba(0, 0, 0, 0.06)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'float-fast': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
        }
      }
    },
  },
  plugins: [],
}
