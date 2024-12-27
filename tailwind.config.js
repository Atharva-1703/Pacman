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
        poppins: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        slideIn: {
          "0%": {
            top: "0px",
            right: "-452px",
          },
          "100%": {
            top: "110px",
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
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        slideIn: "slideIn 1s ease-in 1s forwards",
        slideRight: "slideRight 1s ease-in 2s forwards",
        fadeIn: 'fadeIn 0.5s ease-in-out forwards',
        fadeOut: 'fadeOut 0.5s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
