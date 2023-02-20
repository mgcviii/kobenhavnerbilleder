/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      primary: "#cccccc",
      secondary: "#1d1d1d",
      accent: "#A41817",
      textWhite: "#FFFFFF",
      textBlack: "#000000",
    },
    fontSize: {
      dt_h1: ["4.375rem", { lineHeight: "4rem", letterSpacing: "0rem" }],
      dt_h2: ["3.75rem", { lineHeight: "1rem", letterSpacing: "0rem" }],
      dt_h3: ["2.188rem", { lineHeight: "1rem", letterSpacing: "0rem" }],
      dt_h4: ["1.875rem", { lineHeight: "1rem", letterSpacing: "0rem" }],
      dt_h5: ["1.563rem", { lineHeight: "1.2rem", letterSpacing: "0rem" }],
      dt_bodyText: [
        "1.563rem",
        { lineHeight: "1.12rem", letterSpacing: "0rem" },
      ],
      dt_quoteText: [
        "1.563rem",
        { lineHeight: "1rem", letterSpacing: "0.019rem" },
      ],
      dt_btnTxt: ["1.875rem", { lineHeight: "1rem", letterSpacing: "0rem" }],
      mb_h1: ["2.5rem", { lineHeight: "3rem", letterSpacing: "0rem" }],
      mb_h2: ["2.3rem", { lineHeight: "3rem", letterSpacing: "0rem" }],
      mb_h3: ["1.875rem", { lineHeight: "1rem", letterSpacing: "0rem" }],
      mb_h4: ["1.25rem", { lineHeight: "1.5rem", letterSpacing: "0rem" }],
      mb_h5: ["0.5rem", { lineHeight: "1.2rem", letterSpacing: "0rem" }],
      mb_bodyText: ["1rem", { lineHeight: "1.5rem", letterSpacing: "0rem" }],
      mb_quoteText: ["1rem", { lineHeight: "1.5rem", letterSpacing: "0.019rem" }],
      mb_btnTxt: ["1.25rem", { lineHeight: "1rem", letterSpacing: "0rem" }],
    },
    fontFamily: {
      kbh_demibold: ["KBH-Demibold", "sans-serif"],
      kbh_medium: ["KBH-Medium", "sans-serif"],
      kbh_regular: ["KBH-Regular", "sans-serfif"],
      kbh_italic: ["KBH-Italic", "sans-serif"],
    },
    
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
