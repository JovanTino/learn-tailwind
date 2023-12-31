/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    extend: {  
      spacing: {
      '13': '3.25rem',
      '15': '3.75rem',
      '128': '32rem',
      '144': '36rem',
    },
    fontFamily :{
      Poppins: ['Poppins'],
    }},
  },
  plugins: [],
}

