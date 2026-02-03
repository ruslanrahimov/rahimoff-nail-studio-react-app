/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          50: '#fcfbf7',
          100: '#f8f6f0',
          200: '#eae6d7',
          300: '#e6e4de',
        },
        burgundy: {
          500: '#6c2521',
          600: '#5a1f1c',
          700: '#481916',
        },
        charcoal: {
          900: '#2e2e2e',
          800: '#3a3a3a',
          700: '#4a4a4a',
          600: '#5a5a5a',
          300: '#888888',
        },
        platinum: {
          900: '#1a1a1a',
          800: '#2a2a2a',
          600: '#d0d0d0',
          500: '#e8e8e8',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      letterSpacing: {
        'wide': '0.05em',
        'wider': '0.1em',
        'widest': '0.15em',
      },
      height: {
        '13': '3.25rem',
        '14': '3.5rem',
        '15': '3.75rem',
      },
      width: {
        '30': '7.5rem',
      },
      maxHeight: {
        '13': '3.25rem',
      },
    },
  },
  plugins: [],
}
