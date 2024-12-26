/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundSize: {
        "175%": "175%",
      },
      fontFamily: {
        porter: ["Porter Sans Block", "sans-serif"],
        seymour: ['Seymour One', 'sans-serif'],
      },
      keyframes: {
        slideIn: {
          "0%": {
            top: "0px",
            right: "-452px",
          },
          "100%": {
            top: "184px",
            right: "calc(50% - 452px / 2)",
          },
        },
        slideRight: {
          "0%": {
            left: "-197px",
            bottom: "0px",
          },
          "100%": {
            left: "calc(50% - 197px / 2)",
            bottom: "75px",
          },
        },
      },
      animation: {
        slideIn: "slideIn 1s ease-in 1s forwards",
        slideRight: "slideRight 1s ease-in 2s forwards",
      },
    },
  },
  plugins: [],
};
