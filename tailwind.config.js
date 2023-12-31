/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        dark: {
          "intensity-10": "#1a1c1e",
          "intensity-9": "#252729",
        },
        gray: {
          "intensity-10": "#232323",
          "intensity-9": "#908e93",
          "intensity-8": "#8c9097",
        },
        blue: {
          "intensity-10": "#111c43",
          "intensity-9": "#23b7e5",
          "intensity-8": "#8d99b0",
        },
        theme: "#b15a11",
        red: "#e6533c",
        purple: "#7f58d3",
        green: "#28bf94",
      },
      gap: {
        sm: "8px",
        md: "12px",
        lg: "24px",
        xl: "32px",
      },
      borderRadius: {
        xs:"4px",
        sm: "8px",
        md: "16px",
        lg: "32px",
      },
      fontWeight: {
        "800": "800",
        "700": "700",
        "600": "600",
        "500": "500",
        "400": "400",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
