module.exports = {
  purge: {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./src/components/**/*.{js,jsx,ts,tsx}",
    ],
    options: {
      safelist: [],
    },
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
