import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(rgba(255, 255, 255, 0.171) 2px, transparent 0)",
      },
      keyframes: {
        growToast: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        growToast: "growToast 5s ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
