import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        spaceGrotesk: ["SpaceGrotesk-VariableFont_wght"],
      },
      colors: {
        black: '#151515',
        green: '#4EE1A0',
        darkGray: '#242424',
        lightGray: '#d9d9d9',
        white: '#FFFFFF',
        red: '#FF6F5B'
      }
    },
  },
  plugins: [],

};

export default config;
