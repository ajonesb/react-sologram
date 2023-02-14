/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "oleo-script": ['"Oleo Script"', "cursive"],
        "noto-sans": ['"Noto Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
