/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    fontFamily: {
      display: ["Montserrot", "sans-serif"],
      headings: ["EB Garamond", "serif"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      "light-blue": "#56c8ea",
      "dark-grey": "#101010",
    },
  },
  plugins: [],
};
