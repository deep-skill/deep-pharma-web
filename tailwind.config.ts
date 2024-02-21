const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'orange': '#fc6a05',
      'white': '#ffffff',
      'black': '000000',
      'dark_gray': '5b5b5b',
      'light_gray':'f3f3f3',
      'light_peach':'fff0eb'
    },

    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        'custom': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
});

import type { Config } from "tailwindcss";

export default config;
