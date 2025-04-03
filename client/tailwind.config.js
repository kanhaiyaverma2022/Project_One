/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        montserrat: ['Montserrat'],
      },
      
      colors:{
        'gradient':'bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-blue-600 to-blue-200',
        'sky-blue':'#1AACEA',
        'blue-100':'#1353DD',
        'blue-200':'#2D56EC',
        'blue-300':'#2872EC'
      }
      
    },
  },
  plugins: [],
}
