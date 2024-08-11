/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'broch2016': "url('/src/assets/BrochureIMG/T2016.jpg')",
        'broch2017': "url('/src/assets/BrochureIMG/T2017.jpg')",
        'broch2018': "url('/src/assets/BrochureIMG/T2018.jpg')",
        'broch2019': "url('/src/assets/BrochureIMG/T2019.jpg')",
        'broch2022': "url('/src/assets/BrochureIMG/T2022.jpg')",
        'back': "url('/src/assets/BG.jpg')",
        'robot': "url('/src/assets/robot.png')",
        'background': "url('/src/assets/download.png')",
      },
      colors: {
        'borderColor': '#E5E8EB',
        'background': '#24140F',
        'button': '#F24A0D',
        'newBg': '#342019',
        'readMore': '#482D22',
        'readMoreLight': '#2d3748',
        'yellow-orange': '#FEB43C',
      },
      boxShadow: {
        'custom': '0px 4px 28px 0px rgba(0, 0, 0, 0.15)',
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