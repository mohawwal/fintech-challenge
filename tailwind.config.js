/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'nav': '0px 0px 4px 0px #00000040'
      }
    },
  },
  plugins: [],
}
