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
        dark: {
          bg: '#0a0a0a',
          surface: '#1a1a1a',
          card: '#252525',
          border: '#333333',
        },
        accent: '#7dd3fc', // subtle light accent (sky-300-ish)
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 6px rgba(125, 211, 252, 0.25)' },
          '100%': { boxShadow: '0 0 22px rgba(125, 211, 252, 0.45)' },
        }
      }
    },
  },
  plugins: [],
}
