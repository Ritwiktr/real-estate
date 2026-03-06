/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#CBA38C", light: "#C39C86" },
        secondary: "#C39C86",
        surface: "#0F0E0E",
        panel: "#141313",
        muted: "#C4C4C4",
        overlay: "#0A0A0A",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
