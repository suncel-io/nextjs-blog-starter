/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./suncel/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#CB036F",
          50: "#FD88C7",
          100: "#FD74BE",
          200: "#FC4CAB",
          300: "#FC2498",
          400: "#F30485",
          500: "#CB036F",
          600: "#940251",
          700: "#5C0133",
          800: "#250114",
          900: "#000000",
        },
      },
    },
  },
  plugins: [require("flowbite-typography"), require("@tailwindcss/line-clamp")],
};
