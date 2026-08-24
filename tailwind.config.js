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
        button: "#4A4E69",
        text_content: "#4A4E69",
        text_content2: "#3A3A3A",

        // Dark Color Palette
        "dark-primary": "#F2E9E4",
        "dark-secondary": "#C9ADA7",
        "dark-highlight": "#9A8C98",
        "dark-background": "#22223B",
        "dark-button": "#9A8C98",
        "dark-text": "#9A8C98",
      },
      fontFamily: {
        montserrat: ["'Montserrat'", "sans-serif"],
        nunito: ["'Nunito'", "sans-serif"],
      },
      fontSize: {
        heroLogo: "190px",
        heading: "230px",
        headingAbout: "50px",
        headingPort: "50px",
        headingContact: "50px",
        headingExpMobile: "30px",
        subheadingHero: "40px",
        subheadingAbout: "25px",
        subheadingPort: "40px",
        subheadingContact: "40px",
        subheadingPortMob: "20px",
        labelContact: "20px",
        portBtnAbout: "40px",
        bodyContact: "25px",
        body: "10px",
        buttons: "20px",
        note: "15px",
        yearLabel: "16px",
        yearLabel2: "40px",
        yearLabelMobile: "100px",
        expContent: "20px",
        expTitleMob: "25px",
      },
      fontWeight: {
        heading: "800",
        subheading: "700",
        body: "500",
        body2: "400",
        buttons: "700",
        buttons2: "500",
        note: "600",
        note2: "500",
      },
    },
  },
  plugins: [],
};
