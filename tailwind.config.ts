import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          500: "#6366F1",
          600: "#4F46E5",
        },
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15,23,42,0.7)",
      },
    },
  },
  plugins: [],
};

export default config;
