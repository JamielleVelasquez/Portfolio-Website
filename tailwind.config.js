/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      black: "#000000",
      white: "#ffffff",
      grey: "#e9ecef",
    },
    fontFamily: {
      sans: ["Roboto", ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
};
