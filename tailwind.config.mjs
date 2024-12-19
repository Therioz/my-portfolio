/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  theme: {
    extend: {
      fontFamily: {
        sans: ["kanit", "serif"],
      },
      colors: {
        lightGray: "#cacccb",
      },
      backgroundImage: {
        grainy: `
          radial-gradient(circle, rgba(0,0,0,0.02) 1%, transparent 1%),
          radial-gradient(circle, rgba(0,0,0,0.02) 1%, transparent 1%)
        `,
      },
      backgroundSize: {
        grainy: "3px 3px",
      },
      backgroundPosition: {
        grainy: "0 0, 10px 10px",
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
          width: "24px",
          height: "24px",
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
