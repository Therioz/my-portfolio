/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./index.html", "./index2.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["kanit", "serif"],
      },
    },
  },
  plugins: [],
};
