import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      green: '#a4ffaf',
      red: '#f64a4a',
      orange: '#fb7c58',
      yellow: '#f8cd65',
      'grey-light': '#e6e5ea',
      grey: '#817d92',
      'grey-dark': '#24232c',
      'grey-darkest': '#18171f',
    },
    extend: {
      fontFamily: {
        'jetbrains-mono': ['var(--font-jetbrains-mono)'],
      },
    },
  },
  plugins: [],
};
export default config;
