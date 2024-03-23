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
        'pt-gray40': '#7D7986',
        'pt-gray30': '#d9d9d9',
        'pt-gray20': '#ececec',
        'pt-gray10': '#FAFAFA',
        'pt-white': '#ffffff',
        'pt-black': '#353535',
        'pt-blue': '#284b63',
        'test-green': '#00FF85',
        'test-black': '#1E1E1E',
        'test-blue': '#3994FF',
      },
      keyframes: {
        scale: {
          '0%, 20%, 80%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.5) ' },
        },
      },
      animation: {
        scale: 'scale 1.2s linear infinite',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
export default config;
