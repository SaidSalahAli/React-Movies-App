/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  // start to custmoize colors and fonts 
  theme: {
    extend: {
      height:{
        header:"560px",
        rate: "400px",
      },
      fontSize:{
        h1:"2.6rem",
      },
      screens:{
        xs:"475px"
      },
      colors:{
        main: '#03071e',
        subMain: '#f20000',
        dry: '#001d3d',
        star: '#ffb000',
        text: '#c0c0c0',
        border: '#4d5563',
        dryGray: '#c0c0c0',

      },
    },
  },
  plugins: [ require('@tailwindcss/line-clamp')],
}
