/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
        fontFamily: {
            montserrat: ['Montserrat', 'sans-serif']
        },
        animation: {
            'skill-hover': 'skillHover .4s ease-in-out forwards'
        }
    },
  },
  plugins: [],
}

