/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue2: '#27333A', // Corrected syntax for blue2
        red1: '#11031A',   // Corrected syntax for red
      },
    },
  },
  plugins: [],
}
