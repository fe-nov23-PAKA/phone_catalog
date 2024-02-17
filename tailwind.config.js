/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  theme: {
    fontFamily: {
      mont: ["Mont", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        darkness: "url('/public/images/backgrounds/darkness.png')",
        lightness: "url('/public/images/backgrounds/lightness.png')",
      },
      colors: {
        accent: "#216CFF",
        "secondary-accent": "#F447AF",
        primary: "#0F0F11",
        "secondary-primary": "#89939A",
        "icons-color": "#B4BDC3",
        "element-color": "#E2E6E9",
        "hover-color": "#E2E6E9",
        green: "#27AE60",
        red: "#EB5757",
      },
      boxShadow: {
        sh1: "0 3px 13px 0px rgba(23, 32, 49, 0.4)",
      },
      screens: {
        md: "640px",
        lg: "1200px",
      },
      padding: {
        "navlinks": "28px",
      },
      height: {
        "custom": "72px",
      }
    },
  },
  plugins: [],
};
