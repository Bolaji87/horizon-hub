/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "custom-layout": "26rem 1fr",
      },
      gridTemplateRows: {
        "custom-rows": "auto 1fr",
      },
    },
  },
  plugins: [],
};
