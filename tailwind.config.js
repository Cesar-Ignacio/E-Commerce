/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
   

    extend: {
      colors: {
        'bunker': {
          '50': '#f7f7f8',
          '100': '#eeeef0',
          '200': '#d9d9de',
          '300': '#b8b9c1',
          '400': '#91939f',
          '500': '#737584',
          '600': '#5d5e6c',
          '700': '#4c4d58',
          '800': '#41414b',
          '900': '#393941',
          '950': '#18181b',
        }
      }
    },
  },
  plugins: [],
}