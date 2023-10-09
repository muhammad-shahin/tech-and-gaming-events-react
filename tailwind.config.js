/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      bgColor: '#010C2C',
      primaryColor: '#7dd3fc',
      secondaryColor: '#0284c7',
      transparent: 'transparent',
      white: '#FFFFFF',
    },
    extend: {
      fontFamily: {
        poppins: 'Poppins, sans-serif',
        squadaOne: 'Squada One, cursive',
        roboto: 'Roboto, sans-serif',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
