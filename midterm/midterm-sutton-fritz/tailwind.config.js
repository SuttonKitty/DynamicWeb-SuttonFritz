/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sacramento: ['var(--ff-sacr)', 'cursive'],
        syne: ['var(--ff-syne)', 'monospace'],
        inter: ['var(--ff-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

