/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lighthover : "#fcf4f4",
        darkhover : "#2a004a",
        darktheme : "#11001f",
      },
      fontFamily: {
        ovo: ["Ovo", "serif"],
        outfit: ["Outfit", "sans-serif"],
      },
      boxShadow: {
        'black': '4px 4px 0 #000',
        "white": '4px 4px 0 #fff',
      },
    },
  },
  plugins: [],
}; 