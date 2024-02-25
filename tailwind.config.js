/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  theme: {
    transitionDuration: {
      DEFAULT: "300ms",
    },
    fontFamily: {
      mont: ["Mont", "sans-serif"],
    },
    container: {
      center: true,
      padding: "24px",

      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      fontSize: {
        main: "22px",
        small: ["14px", "21px"],
        "favourites-sm": ["32px", "41px"],
        "favourites-base": ["48px", "56px"],
      },
      backgroundImage: {
        darkness: "url('/src/assets/img/404page/bg-darkness.png')",
        lightness: "url('/src/assets/img/404page/bg-lightness.png')",
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
        midnightgreen: "#004953",
        spacegray: "#717378",
        rosegold: "#B76E79",
        spaceblack: "#505150",
        midnight: "#000E34",
        sierrablue: "#69ABCE",
        graphite: "#41424C",
      },
      boxShadow: {
        sh1: "0 3px 13px 0 rgba(23, 32, 49, 0.4)",
        sh2: "0 2px 16px 0 #0000001A",
      },
      gridTemplateColumns: {
        24: "repeat(24, 1fr)",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
