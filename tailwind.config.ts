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
        secondary: "#010101",
        teritiary: "#f7e18e",
        grey: "#808080", //
      },
    },
  },
  plugins: [],
};
export default config;
