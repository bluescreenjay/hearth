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
        background: "var(--background)",
        ///background: "#ffffff",
        foreground: "var(--foreground)",
        ///foreground: "#ffffff",
        'hearth-navy': '#0C1F2D'
      },
    },
  },
  plugins: [],
};
export default config;
