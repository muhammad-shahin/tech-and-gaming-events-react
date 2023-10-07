/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      bgColor: '#111111',
      primaryColor: '#15E1F2',
      secondaryColor: '#788DF3',
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
  plugins: [],
};
