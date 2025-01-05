/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '375px',


        'md': '768px',


        'lg': '1024px',


        'xl': '1280px',

    },
    colors: {
      primary: '#f75d1b',
      secondary: '#1c0e5e',
      title:'#3e425c',
      paragraph:'#555a78'
    },
    },
  },
  plugins: [],
}