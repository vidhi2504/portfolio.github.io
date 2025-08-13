/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
   extend: {
    colors: {
      'gradient-start': '#357a8bff',
      'gradient-mid': '#76b2d9ff',
      'gradient-end': '#0a6482ff',
    },
  },
  },
  plugins: [],
};
