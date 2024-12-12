/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          "100": "#fff7ed",
          "200": "#ffedd5",
          "300": "#fed7aa",
          "400": "#fdba74",
          "500": "#FF5C51",
          "600": "#ea580c",
          "700": "#c2410c",
          "800": "#9a3412",
          "900": "#7c2d12"
        },
        secondary: {
          "100": "#f3f4f6",
          "200": "#e5e7eb",
          "300": "#d1d5db",
          "400": "#9ca3af",
          "500": "#6b7280",
          "600": "#4b5563",
          "700": "#374151",
          "800": "#1f2937",
          "900": "#111827"
        },
        blue: {
          "100": "#dbeafe",
          "200": "#bfdbfe",
          "300": "#93c5fd",
          "400": "#60a5fa",
          "500": "#3b82f6",
          "600": "#2563eb",
          "700": "#1d4ed8",
          "800": "#1e40af",
          "900": "#1e3a8a"
        },
        green: {
          "100": "#dcfce7",
          "200": "#bbf7d0",
          "300": "#86efac",
          "400": "#4ade80",
          "500": "#22c55e",
          "600": "#16a34a",
          "700": "#15803d",
          "800": "#166534",
          "900": "#14532d"
        },
        yellow: {
          "100": "#fef9c3",
          "200": "#fef08a",
          "300": "#fde047",
          "400": "#facc15",
          "500": "#eab308",
          "600": "#ca8a04",
          "700": "#a16207",
          "800": "#854d0e",
          "900": "#713f12"
        },
        grey: {
          "100": "#f9fafb",
          "200": "#f3f4f6",
          "300": "#e5e7eb",
          "400": "#d1d5db",
          "500": "#9ca3af",
          "600": "#6b7280",
          "700": "#4b5563",
          "800": "#374151",
          "900": "#1f2937"
        },
        text: "#111827"
      },
    },
  },
  plugins: [],
};
