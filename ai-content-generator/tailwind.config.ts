import type { Config } from "tailwindcss";

export const config = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{ts, tsx}',
        './components/**/*.{ts, tsx}',
        './app/**/*.{ts, tsx}',
        './src/**/*.{ts, tsx}',
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1488px",
            },
            extend: {
                colors: {
                    border: "hsl(var(--border))",
                    input: "hsl(var(--input))",
                    ring: "hsl(var(--ring))",
                    background: "hsl(var(--background))",
                    foreground: "hsl(var(--foreground))",
                    primary: {
                        DEFAULT: "#704ef8",
                        foreground: "hsl(var(--primary-foreground))",
                    },
                    secondary: {
                        DEFAULT: "hsl(var(--secondary))",
                        foreground: "hsl(var(--secondary-foreground))",
                    },
                    destructive: {
                        DEFAULT: "hsl(var(--destructive))",
                        foreground: "hsl(var(--destructive-foreground))",
                    },
                },
            },
        },
    },
    plugins: [],
}