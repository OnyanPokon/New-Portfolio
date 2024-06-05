/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {

    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      colors: {
        white: '#FFFFFF',
        gray: '#E6E6E6',
        violet: '#5739fb',
        black: '#1F1F1F',
      },
    },
    fontFamily: {
      dharma: ['Dharma Gothic E', 'sans-serif'],
      incon: ['Inconsolata', 'sans-serif'],
    },
  },
  plugins: [
    // eslint-disable-next-line global-require
    require('tailwind-scrollbar-hide'),
  ],
};
