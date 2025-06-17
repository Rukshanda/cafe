/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xsm': '500px', 
        'xxsm' : '370px', 
        'xxxsm' : '300px', 
      },
    },
  },
  plugins: [],
}
