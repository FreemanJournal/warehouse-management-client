const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mont': ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
    }
  },
  plugins: [],
}
