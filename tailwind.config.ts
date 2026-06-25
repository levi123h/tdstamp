import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        card: "var(--card)",
        "brand-maroon": "var(--brand-maroon)",
        "brand-navy": "var(--brand-navy)",
        "brand-gold": "var(--brand-gold)",
      },
    },
  },
  plugins: [],
} satisfies Config;

