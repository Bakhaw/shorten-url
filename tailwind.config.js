/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      blue: "#3F96F3",
      "blue-dark": "#2F76D2",
      "green-light": "#C6EBD4",
      green: "#31784B",
      "red-light": "#FFCFD5",
      red: "#983E4C",
      yellow: "#FCEB4F",
      white: "#FFFFFF",
    },
  },
  plugins: [],
};
