module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito Sans", "sans-serif"],
      },
      colors: {
        primary: '#ff9f68',
        secondary: '#f85959',
        danger: '#ff5959',
        warning: '#facf5a',
        black: '#333',
      }
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          margin: "0 auto",
          padding: "0 16px",
          "@screen sm": {
            maxWidth: "480px",
            padding: "0",
          },
          "@screen md": {
            maxWidth: "620px",
            padding: "0",
          },
          "@screen lg": {
            maxWidth: "860px",
            padding: "0",
          },
          "@screen xl": {
            maxWidth: "920px",
            padding: "0",
          },
        },
        ".container-xl": {
          maxWidth: "100%",
          margin: "0 auto",
          padding: "0 16px",
          "@screen sm": {
            maxWidth: "580px",
            padding: "0",
          },
          "@screen md": {
            maxWidth: "720px",
            padding: "0",
          },
          "@screen lg": {
            maxWidth: "960px",
            padding: "0",
          },
          "@screen xl": {
            maxWidth: "1120px",
            padding: "0",
          },
        },
      });
    },
    require('@tailwindcss/line-clamp'),
  ],
}
