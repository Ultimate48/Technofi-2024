/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
      },
      colors: {
        'borderColor': '#E5E8EB',
        'background': '#24140F',
        'button': '#F24A0D',
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