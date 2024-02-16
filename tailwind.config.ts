const withMT = require('@material-tailwind/react/utils/withMT');

const config: Config = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      orange: '#ff6600',
      black: '#212121',
      white: '#ffffff',
      orange_secundary: 'FE4502',
      orange_bg: 'FFDFD3',
      gray: 'D9D9D9',
      gray_title: '#5b5b5b',
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
});

import type { Config } from 'tailwindcss';

export default config;
