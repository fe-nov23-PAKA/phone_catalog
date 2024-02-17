/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  theme: {
    fontFamily: {
      mont: ["Mont", "sans-serif"],
    },
    extend: {
      fontSize: {
        main: "22px",
        small: ["14px", "21px"],
      },
      maxWidth: {
        "percent": "35%",
      },
      backgroundImage: {
        darkness: "url('/img/404page/bg-darkness.png')",
        lightness: "url('/img/404page/bg-lightness.png')",
      },
      colors: {
        accent: "#216CFF",
        "secondary-accent": "#F447AF",
        primary: "#0F0F11",
        secondary: "#89939A",
        "icons-color": "#B4BDC3",
        "element-color": "#E2E6E9",
        "hover-color": "#FAFBFC",
        green: "#27AE60",
        red: "#EB5757",
        "404color": "#FAF6F2",
      },
      boxShadow: {
        sh1: "0 3px 13px 0px rgba(23, 32, 49, 0.4)",
      },
      gridTemplateColumns: {
        24: "repeat(24, minmax(0, 35px))",
      },
    },
  },
  plugins: [],
};