/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: '#f75d1b',
      secondary: '#ecc94b',
      
    },
    extend: {
      screens: {
        'sm': '375px',


        'md': '768px',


        'lg': '1024px',


        'xl': '1280px',

    },
    },
  },
  plugins: [],
}