import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'pt-primary': '#3c6e71',
        'pt-green40': '#395253',
        'pt-green30': '#6b8a8c',
        'pt-green20': '#9eb7b8',
        'pt-green10': '#cfdbdc',
        'pt-gray30': '#7D7986',
        'pt-gray20': '#d9d9d9',
        'pt-gray10': '#ececec',
        'pt-white': '#ffffff',
        'pt-black': '#353535',
        'pt-blue': '#284b63',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
export default config;
