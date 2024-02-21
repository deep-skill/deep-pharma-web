const withMT = require('@material-tailwind/react/utils/withMT');

const config: Config = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      orange: '#ea5923',
      orange_lite: '#fa8953',
      black: '212121',
      white: '#ffffff',
      orange_secundary: '#fe4502',
      orange_bg: '#ffdfd3',
      gray: '#d9d9d9',
      grey_title: '#5b5b5b',
      blue: '#051efe',
      blue_lite: '#4b62fe',
      green: '#009f36',
      green_lite: '#1dd51f',
    },

    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        custom: '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
});

import type { Config } from 'tailwindcss';

export default config;
