module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "darkgray": "#121212",
        "bgray": "#3a3a3c",
        "bgreen": "#538d4e",
        "byellow": "#c9b458",
      },
      fontFamily: {
        "fredoka": "Fredoka One, cursive"
      }
    }
  },
  plugins: [],
}