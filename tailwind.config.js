/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"]
      },
      colors: {
        figmaOrange: '#D87D4A',
        figmaBlack: '#010101',
        figmaMainBlack: '#000000',
        figmaGray: '#F1F1F1',
        figmaWhite: '#FAFAFA',
        figmaMainWhite: '#FFFFFF',
      },
    },
  },
  plugins: [],
}