/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 80s linear infinite',
      },
      keyframes: {
          'infinite-scroll': {
              from: { transform: 'translateX(0)' },
              to: { transform: 'translateX(-100%)' },
          }
      }
    },
  },
  plugins: [],
}

