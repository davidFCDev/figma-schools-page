import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        orange: "#FF993A",
        orangeLight: "#FF993A",
        darkOrange: "#E5743D",
        greenLime: "#8AC53E",
        greenPalid: "#D5E3E0",
        green2: "#12AA5B",
        green3: "#E8F3D8",
        green: "#006B61",
        darkGreen: "#026451",
        yellow: "#FFC102",
        amber: "#FFD143",
        blue: "#369FFF",
        violet: "#C099FC",
        pink: "#FC99D0",
        gray: "#F8F8F8",
        red: "#C53E3E",
        redPalid: "#F3D8D8",
      },
      transitionProperty: {
        width: "width",
        spacing: "margin, padding",
      },
      maxWidth: {
        "8xl": "100rem",
      },
      screens: {
        "2xsmall": "320px",
        xsmall: "512px",
        small: "1024px",
        medium: "1280px",
        large: "1440px",
        xlarge: "1680px",
        "2xlarge": "1920px",
      },
      fontFamily: {
        averia: ["Averia Serif Libre", "serif"],
        manrope: ["Manrope", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
