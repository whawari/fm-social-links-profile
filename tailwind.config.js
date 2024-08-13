/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
    colors: {
      "zodiac-blue": {
        100: "rgb(221, 237, 252)",
        500: "rgb(69, 148, 236)",
        600: "rgb(48, 118, 224)",
        700: "rgb(39, 98, 206)",
        950: "rgb(20, 33, 61)",
      },
    },
  },
  plugins: [],
};
