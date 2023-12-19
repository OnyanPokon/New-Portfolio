/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "white": "#FFFFFF",
      "gray": "#E6E6E6",
      "violet": "#5739FB",
      "black": "#1F1F1F",
    }, 
    fontFamily: {
      "dharma": ['Dharma Gothic E', 'sans-serif'],
      "incon": ['Inconsolata','sans-serif'],
    }
  },
  plugins: [],
}

