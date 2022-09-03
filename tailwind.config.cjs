/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dmsans': ['DM Sans', 'sans-serif'],
        'roboto': ['Roboto Mono', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
