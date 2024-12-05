/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "primery":"#0052cc",
        "secondary":"#f5f7ff",
        "tertiary":"#f8f8f8",
        "paracolor":"#555555"
       },
    },
  },
  plugins: [],
}

