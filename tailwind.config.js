/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F5FBEF',
        secondary: '#92AD94',
        terciary: '#748B75',
        hover: '#503D42',
      },
    },
  },
  plugins: [],
}
