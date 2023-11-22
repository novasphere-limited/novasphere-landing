/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./parts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blackTty: "#000000",
        blackSec: "#0A0A0A",
        whiteSec: "#FEFCFC",
        warning100: "#FBE8CE24",
        warning200: "#FBE8CE33",
        warning500: "#4158EF",
        warning700: "#C57608",
        blue100: "#0EC9FC05",
        blue500: "#53A2F9",
        gray100: "#03042305",
      },
      fontSize: {
        xs: ".75rem",
        sm: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.625rem",
        "4xl": "1.75rem",
        "5xl": "2rem",
        "6xl": "2.5rem",
        "7xl": "3rem",
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
      backgroundColor: {
        pry: "##35B181",
        secondary: "#2ecc71",
      },
    },
  },
  plugins: [],
};
