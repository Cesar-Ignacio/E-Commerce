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
        },
        'nile-blue': {
          '50': '#f5f7fa',
          '100': '#eaeff4',
          '200': '#d0dce7',
          '300': '#a6bdd3',
          '400': '#779bb9',
          '500': '#557fa2',
          '600': '#426587',
          '700': '#37526d',
          '800': '#30465c',
          '900': '#283747',
          '950': '#1d2834',
        },
        'curious-blue': {
          '50': '#eff9ff',
          '100': '#def2ff',
          '200': '#b6e7ff',
          '300': '#75d6ff',
          '400': '#2cc1ff',
          '500': '#00a0e9',
          '600': '#0087d4',
          '700': '#006cab',
          '800': '#005b8d',
          '900': '#064c74',
          '950': '#04304d',
        },

      }
    },
  },
  plugins: [],
}