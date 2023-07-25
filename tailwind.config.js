/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
      'myoffwhite': '#ececec',
      'mycyan': '#9fd3c7',
      'myblue': '#385170',
      'mydarkblue': '#142d4c',
      'coolerblue': '#073333'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'mono': ['Roboto Mono', 'mono-serif'],
        'merriweather': ['Merriweather', 'sans-serif'],
        'quicksand': 'Quicksand'
      },
      backgroundImage: {
        'lightbg': "url('./src/images/light-bg.png')",
        'darkbg': "url('./src/images/dark-bg.png')"
      }
    },
  },
  plugins: [],
}

