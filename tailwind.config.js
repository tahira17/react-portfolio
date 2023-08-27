/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: theme =>({
        'hero_pattern': "url('/src/assets/wave (2).svg')",
        'footer_pattern': "url('/src/assets/wave (3).svg')",
        'about': "url('/src/assets/about.svg')",

      })
    },
  },
  plugins: [],
}

