/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./slides/**/*.md",
    "./slides/**/*.vue",
  ],
  theme: {
    extend: {
      colors: {
        'T1': '#23232E',
        'T2': '#4A4A58',
        'T3': '#B7B3F4',
        'T4': '#D8D5FF',
      },
    },
  },
  plugins: [],
}

