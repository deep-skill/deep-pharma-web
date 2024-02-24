const withMT = require('@material-tailwind/react/utils/withMT');

const config: Config = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      orange: '#fc6a05',
      orange_lite: '#fa8953',
      orange_list_items: '#fff0eb',
      black: '000000',
      white: '#ffffff',
      orange_secundary: '#fe4502',
      gray: '#d9d9d9',
      grey_title: '#5b5b5b',
      blue: '#051efe',
      blue_lite: '#4b62fe',
      green: '#009f36',
      green_lite: '#1dd51f',
      dark_gray: '5b5b5b',
      light_grey: '#f3f3f3',
      light_peach: 'fff0eb',
      white_background: '#f0f0f0',
      light_orange: '#fff0eb',
    },

    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        custom: '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'expand-border': 'expandBorder 500ms ease-in-out',
      },
      keyframes: {
        expandBorder: {
          '0%': {
            width: 0,
            left: '50%',
          },
          '50%': {
            width: '100%',
            left: 0,
          },
          '100%': {
            width: '100%',
            left: 0,
          },
        },
      },
    },
  },
  plugins: [],
});

import type { Config } from 'tailwindcss';

export default config;
