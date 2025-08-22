/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'], // make sure this matches your project structure
  theme: {
    extend: {
       fontFamily: {
        marker: ['"Permanent Marker"', 'cursive'],
      },
      keyframes: {
        slideInLeft: {
          '0%': { transform: 'translateX(-50%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeInRight: {
          '0%': { transform: 'translateX(50%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        slideInLeft: 'slideInLeft 1s ease-out forwards',
        fadeInRight: 'fadeInRight 1.2s ease-out forwards',
      },
    },
  },
  plugins: [],
}

