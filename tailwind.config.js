/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'fiery-black-hole': 'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(255,69,0,1) 50%, rgba(255,215,0,1) 100%)',
        'fiery-eruption': 'linear-gradient(45deg, #FF4500, #FF6347, #FF8C00, #FFD700)',

      },
      colors: {
        'custom-red': '#FF5733', // Replace with your color code
        'custom-orange': '#FF8C00',
        'custom-yellow': '#FFD700',
        'custom-blue': '#00BFFF',
        'custom-green': '#32CD32',
      },
    },
  },
  plugins: [],
}