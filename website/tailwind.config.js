/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkGrey: {
          DEFAULT: "#1C1C1C",
          lighter: "#666666",
          lightest: "#AAAAAA"
        },
        customCyan: {
          DEFAULT: "#00E0E0",   
          dark: "#00BABA",  
          light: "#4DF0F0", 
        },
      },
    },
  },
  plugins: [],
};
