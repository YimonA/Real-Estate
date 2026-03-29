/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "400px",
        xxs: "375px",
      },
      backgroundImage: {
        "buy-img":
          "url('/images/house-8.avif')",
      },
    },
  },
  plugins: [],
};
