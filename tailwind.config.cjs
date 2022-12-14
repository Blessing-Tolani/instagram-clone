/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(38,38,38)',
        gray: 'rgb(142,142,142)',
      },
    },
  },
  plugins: [],
};
