/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero-pattern': "url('/src/assets/hero-1.png')",
        'competitions': "url('/src/assets/key/competitions.png')",
      },
      colors: {
        'borderColor': '#E5E8EB',
        'background': '#24140F',
        'button': '#F24A0D',
        'newBg': '#342019',
        'readMore': '#482D22',
        'readMoreLight': '#2d3748'
      },
      fontFeatureSettings: {
        'dlig-on': "'dlig' on",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.font-dlig-on': {
          fontFeatureSettings: "'dlig' on",
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
}