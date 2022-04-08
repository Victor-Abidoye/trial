module.exports = {
  content: ["./src/**/*.{html,js}", "./**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        '101': '10vh',
        '109': '90vh',
      },
      colors: {
        prudent: {
          100: "#2B3945",
          200: "#202C37",
        },
        little: {
          100: "#FFFFFF",
          200: "#FAFAFA",
        },
      },
    },
  },
  plugins: [],
}