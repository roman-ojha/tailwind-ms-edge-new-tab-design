module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "body-background":
          "url('https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
      },
      fontFamily: {
        body: ["Nunito", "sans-serif"],
      },
      colors: {
        "input-color": "#4a4a4a",
      },
      borderWidth: {
        "footer-border-width": "1px",
      },
    },
  },
  plugins: [],
};
