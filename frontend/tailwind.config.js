module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        12: "repeat(12, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /./ 
    },
  ] 
};
