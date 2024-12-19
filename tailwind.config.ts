import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["var(--manrope-font)"],
      },
      colors: {
        background: "var(--bg-color)",
        heading: "var(--text-color)",
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        main: "var(--main-content-color)",
      },
    },
  },
  plugins: [],
} satisfies Config;
