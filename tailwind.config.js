/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode : 'media',
  theme: {
    extend: {
      colors: {
        default: {
          '80' : "#082f49"
        }
      }
    },
  },
  plugins: [],
}