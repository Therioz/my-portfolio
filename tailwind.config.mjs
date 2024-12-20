/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  theme: {
    extend: {
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      fontFamily: {
        sans: ["kanit", "serif"],
      },
      colors: {
        lightGray: "#cacccb",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".noise-bg": {
          background: `radial-gradient(rgba(0, 0, 0, 0.12) 1px, transparent 2px)`,
          backgroundSize: "4px 4px",
          backgroundPosition: "0 0, 10px 10px",
        },
        ".feather": {
          width: "30px",
          height: "30px",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          fill: "none",
        },
      });
    }),
  ],
};
