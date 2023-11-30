/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "open-sans": "'Open Sans', sans-serif",
      poppins: "'Poppins', sans-serif",
    },
    colors: {
      white: "white",
      black: "black",
      transparent: "transparent",
      body: "#010B14",
      text: "#fff",
      "text-2": "#20262b",
      green: "#0072ff",
      // green: "#1ef93b",
      "active-blue": "rgba(84,119,255,.61)",
    },
    extend: {
      spacing: {
        "navbar-height": "var(--navbar-height)",
      },
    },
  },
  plugins: [],
}

