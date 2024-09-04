/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        // primary: '#264d4c',
        // secondary: '#a3af3d',
        secondary: '#264d4c',
        primary: '#a3af3d',
        terciary: '#eca827',
        hover: '#503D42',

      },
    },
  },
  plugins: [],
}
