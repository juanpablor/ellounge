/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        secondary: '#264d4c',
        primary: '#a3af3d',
        terciary: '#eca827',
        hover: '#503D42',
        latinClub: "#1c1c1c",
        latinBlue: "#03f0ff",
        latinFucsia: "#eb11ff",
        latinGreen: "#48ff00",
        latinBrown: "#382a12"
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        redHat: ['Red Hat Display', 'sans-serif'],
      },
      textShadow: {
        sm: '0 1px 2px theme("colors.latinBlue")',
        DEFAULT: '0 2px 4px theme("colors.latinBlue")',
        lg: '0 8px 16px theme("colors.latinBlue")',
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      const hexToRgb = (hex) => {
        const bigint = parseInt(hex.slice(1), 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return `${r}, ${g}, ${b}`;
      };



      const colors = theme('colors');
      addBase({
        ':root': {
          '--color-secondary': colors.secondary,
          '--color-primary': colors.primary,
          '--color-latinBlue': colors.latinBlue,
          '--color-latinClub': colors.latinClub,
          '--color-latinBlue-rgb': hexToRgb(colors.latinBlue),
          '--color-latinClub-rgb': hexToRgb(colors.latinClub),
        },
      });
    },    
  ],
}
