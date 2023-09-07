// @type {import('tailwindcss').Config}
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'myColor-1': '#cfdbd5',
        'myColor-2': '#e8eddf',
        'myColor-3': '#f5cb5c',
        'myColor-4': '#242423',
        'myColor-5': '#333533',
      }
    },
  },
  plugins: [],
}