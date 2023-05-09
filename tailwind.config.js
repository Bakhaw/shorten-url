/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      blue: "#0096FB",
      "blue-dark": "#0076D9",
      "green-light": "#CEEED8",
      green: "#54966A",
      "red-light": "#FFD5DA",
      red: "#BB6F7A",
      yellow: "#FFEC00",
      white: "#FFFFFF",
    },
  },
  plugins: [],
};
