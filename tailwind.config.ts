import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        matrix: {
          primary: "#00FF41",
          secondary: "#70EBF7",
        },
        hack: {
          bg: "#000000",
          text: "#00FF41",
          accent: "#70EBF7",
        },
      },
      fontFamily: {
        mono: ["JetBrains Mono", "monospace"],
      },
      keyframes: {
        glitch: {
          "0%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
          "100%": { transform: "translate(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "scroll-left": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" }
        },
        "coin-1": {
          "0%": { transform: "translate(-50%, -50%) scale(0) rotate(0deg)", opacity: "1" },
          "100%": { transform: "translate(-150px, -120px) scale(1) rotate(360deg)", opacity: "0" }
        },
        "coin-2": {
          "0%": { transform: "translate(-50%, -50%) scale(0) rotate(0deg)", opacity: "1" },
          "100%": { transform: "translate(-75px, -150px) scale(1) rotate(360deg)", opacity: "0" }
        },
        "coin-3": {
          "0%": { transform: "translate(-50%, -50%) scale(0) rotate(0deg)", opacity: "1" },
          "100%": { transform: "translate(0, -160px) scale(1) rotate(360deg)", opacity: "0" }
        },
        "coin-4": {
          "0%": { transform: "translate(-50%, -50%) scale(0) rotate(0deg)", opacity: "1" },
          "100%": { transform: "translate(75px, -150px) scale(1) rotate(360deg)", opacity: "0" }
        },
        "coin-5": {
          "0%": { transform: "translate(-50%, -50%) scale(0) rotate(0deg)", opacity: "1" },
          "100%": { transform: "translate(150px, -120px) scale(1) rotate(360deg)", opacity: "0" }
        },
        "coin-6": {
          "0%": { transform: "translate(-50%, -50%) scale(0) rotate(0deg)", opacity: "1" },
          "100%": { transform: "translate(180px, -80px) scale(1) rotate(360deg)", opacity: "0" }
        },
        "power-up": {
          "0%": { 
            transform: "scale(1)",
            boxShadow: "0 0 0 0 rgba(255, 255, 255, 0)" 
          },
          "50%": { 
            transform: "scale(1.05)",
            boxShadow: "0 0 30px 15px rgba(255, 255, 255, 0.3)" 
          },
          "100%": { 
            transform: "scale(1)",
            boxShadow: "0 0 0 0 rgba(255, 255, 255, 0)" 
          }
        },
      },
      animation: {
        glitch: "glitch 1s linear infinite",
        float: "float 3s ease-in-out infinite",
        "coin-1": "coin-1 0.8s ease-out forwards",
        "coin-2": "coin-2 0.7s ease-out forwards",
        "coin-3": "coin-3 0.9s ease-out forwards",
        "coin-4": "coin-4 0.8s ease-out forwards",
        "coin-5": "coin-5 0.7s ease-out forwards",
        "coin-6": "coin-6 0.9s ease-out forwards",
        "power-up": "power-up 5s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
