/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'main': {
        '50': '#f4f6fb',
        '100': '#e7eef7',
        '200': '#cad9ed',
        '300': '#9bb9de',
        '400': '#6695ca',
        '500': '#4278b5',
        '600': '#315f98',
        '700': '#264773',
        '800': '#254267',
        '900': '#233957',
        '950': '#182539',
      },
    },
    fontFamily: {
      Poppings: ['Poppins', 'sans-serif'],
      serif: ['serif'],
    },
    extend: {},
  },
  plugins: [],
}

