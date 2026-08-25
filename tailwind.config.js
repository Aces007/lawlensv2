/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // covers all files inside /src, including pages/components
  ],
  theme: {
    screens: {
      resSm: { min: "360px", max: "767px" },      // regular phones
      resMd: { min: "768px", max: "1366px" },     // tablets
      resLg: { min: "1280px" },                    // laptops and desktops (1280px and above)
    },
    extend: {
      colors: {
        // Original Color Palette
        primary: "#4A4E69",
        secondary: "#9A8C98",
        highlight: "#C9ADA7",
        background: "#FFFFFF",
        "background_panel": "#EDEDE0",
        button: "#4A4E69",
        text_content: "#4A4E69",
        text_content2: "#3A3A3A",

        // Dark Color Palette
        "dark_primary": "#F2E9E4",
        "dark_secondary": "#C9ADA7",
        "dark_highlight": "#9A8C98",
        "dark_background": "#22223B",
        "dark_background_panel": "#12121F",
        "dark_button": "#9A8C98",
        "dark_text": "#9A8C98",
      },
      fontFamily: {
        montserrat: ["'Montserrat'", "sans-serif"],
        nunito: ["'Nunito'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
