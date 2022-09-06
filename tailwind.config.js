/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        landingbg:"#241915",
        servicecardbg:"#2E1A0F",
      }
    },
  },
  plugins: [],
}
