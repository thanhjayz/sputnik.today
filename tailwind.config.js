/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        fadeIn: {
          '0%' : { opacity: '0'},
          '100%' : {opacity: '1'}
        },
        fadeOut: {
          '0%' : { opacity: '1'},
          '100%' : {opacity: '0'}
        },

      },
      animation: {
        fadeIn: 'fadeIn 0.8s ease-in-out',
        fadeOut: 'fadeOut 0.8s ease-in-out'
      }

    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.after-relative-caret::after': {
          position: 'absolute',
          top: '-5px',
          display: 'inline-block',
          borderRight: '6px solid transparent',
          borderBottom: '6px solid #fff',
          borderLeft: '6px solid transparent',
          content: 'var(--tw-content)',
        },
      };
      addUtilities(newUtilities, ['after']);
    }



  ],
};
