import type { Config } from "tailwindcss";

const config: Config = {
  important: true,
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",
        info: "var(--info)",
        success: "var(--success)",
        warning: "var(--warning)",
        error: "var(--error)",
        typography: {
          DEFAULT: "var(--typography)",
          primary: "var(--typography-primary)",
          secondary: "var(--typography-secondary)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
