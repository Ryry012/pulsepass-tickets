import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./lib/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { ink: "#111318", cloud: "#f7f8fb", pulse: "#2563eb", coral: "#ff5f55", mint: "#1dbf73" },
      boxShadow: { soft: "0 24px 70px rgba(17, 19, 24, 0.12)" }
    }
  },
  plugins: []
};

export default config;
