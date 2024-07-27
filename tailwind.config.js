/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero-pattern': "url('/src/assets/heroImg/hero-1.png')",
        'hero-pattern-2': "url('/src/assets/heroImg/hero-2.png')",
        'competitions': "url('/src/assets/key/competitions.png')",
        'broch2016': "url('/src/assets/BrochureIMG/T2016.jpg')",
        'broch2017': "url('/src/assets/BrochureIMG/T2017.jpg')",
        'broch2018': "url('/src/assets/BrochureIMG/T2018.jpg')",
        'broch2019': "url('/src/assets/BrochureIMG/T2019.jpg')",
        'broch2022': "url('/src/assets/BrochureIMG/T2022.jpg')",
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