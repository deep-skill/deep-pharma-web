const withMT = require("@material-tailwind/react/utils/withMT");
 
const config: Config  = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'orange': '#ea5923',
      'black': '212121',
      'white': '#ffffff',
      'orange_secundary': 'FE4502',
      'orange_bg': 'FFDFD3',
      'gray': 'D9D9D9',


    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
});




import type { Config } from "tailwindcss";


export default config;
