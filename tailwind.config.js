/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{tsx,ts,jsx,js}",
    "./src/app/**/*.{tsx,ts,jsx,js}",
  ],
  theme: {
    extend: {
      animation: {
        transparencyCycle: "colorCycle 0.75s infinite alternate ease-in-out",
        sizeCycle: "sizeCycle 0.75s infinite ease-in-out",
      },
      keyframes: {
        colorCycle: {
          "0%": { color: "#BC204B" }, // Maroon
          "100%": { color: "#FFFFFF" }, // White
        },
        sizeCycle: {
          "0%": { transform: "scale(1)" },  // Normal size
          "100%": { transform: "scale(1.1)" },  // 30% larger
        }
      },
    },
  },
  plugins: [],
  darkMode: "class",
}