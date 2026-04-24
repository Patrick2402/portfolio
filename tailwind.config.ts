import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0a",
        card: "#0f1117",
        primary: "#00ff88",
        secondary: "#00d4ff",
        accent: "#ff6b35",
        text: "#e2e8f0",
        muted: "#64748b",
      },
      fontFamily: {
        mono: ["'JetBrains Mono'", "'Fira Code'", "monospace"],
        display: ["'Orbitron'", "monospace"],
        body: ["'Share Tech Mono'", "monospace"],
      },
      animation: {
        blink: "blink 1s step-end infinite",
        "glitch-1": "glitch1 0.3s infinite",
        "glitch-2": "glitch2 0.3s infinite",
        "scan-line": "scanline 8s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        glitch1: {
          "0%": { clip: "rect(42px, 9999px, 44px, 0)", transform: "skew(0.7deg)" },
          "20%": { clip: "rect(12px, 9999px, 59px, 0)", transform: "skew(0.4deg)" },
          "40%": { clip: "rect(85px, 9999px, 10px, 0)", transform: "skew(0.2deg)" },
          "60%": { clip: "rect(30px, 9999px, 50px, 0)", transform: "skew(0.8deg)" },
          "80%": { clip: "rect(65px, 9999px, 25px, 0)", transform: "skew(0.1deg)" },
          "100%": { clip: "rect(55px, 9999px, 35px, 0)", transform: "skew(0.5deg)" },
        },
        glitch2: {
          "0%": { clip: "rect(65px, 9999px, 100px, 0)", transform: "skew(0.3deg)" },
          "20%": { clip: "rect(15px, 9999px, 40px, 0)", transform: "skew(0.9deg)" },
          "40%": { clip: "rect(90px, 9999px, 20px, 0)", transform: "skew(0.6deg)" },
          "60%": { clip: "rect(45px, 9999px, 80px, 0)", transform: "skew(0.4deg)" },
          "80%": { clip: "rect(5px, 9999px, 60px, 0)", transform: "skew(0.7deg)" },
          "100%": { clip: "rect(75px, 9999px, 15px, 0)", transform: "skew(0.2deg)" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 5px rgba(0, 255, 136, 0.3)" },
          "50%": { boxShadow: "0 0 20px rgba(0, 255, 136, 0.8), 0 0 40px rgba(0, 255, 136, 0.3)" },
        },
      },
      boxShadow: {
        "glow-green": "0 0 20px rgba(0, 255, 136, 0.5)",
        "glow-cyan": "0 0 20px rgba(0, 212, 255, 0.5)",
        "glow-orange": "0 0 20px rgba(255, 107, 53, 0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
