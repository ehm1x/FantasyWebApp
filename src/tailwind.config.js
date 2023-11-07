/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#bc4123',
        'secondary': '#2b3452',
      },
      fontFamily:{
        'poppins': ['Poppins', 'sans-serif'], 
      },
      width: {
        '1/7': '14.2857143%',
        '1/8': '12.5%',
        '1/9': '11.1111111%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}