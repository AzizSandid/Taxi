import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFEB57", //yellow
        secondary: "#F1C420",//dark yellow
        teritiary: "#f7e18e",
        gray: "#808080", //
        secondGray: "#6C7275", //
      },
    },
  },
  plugins: [],
};
export default config;
