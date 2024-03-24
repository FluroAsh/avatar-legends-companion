/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  purge: {
    // NOTE: Prevent generated classes from being purged
    safelist: [
      {
        pattern:
          /(text|bg|border|fill)-(water|earth|fire|air|weapons|technology)/,
      },
    ],
  },
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        water: {
          100: "hsl(200, 30%, 80%)",
          300: "hsl(200, 30%, 60%)",
          500: "hsl(200, 38%, 45%)",
          700: "hsl(200, 30%, 40%)",
          900: "hsl(200, 30%, 30%)",
        },
        fire: {
          100: "hsl(0, 30%, 80%)",
          300: "hsl(0, 30%, 60%)",
          500: "hsl(0, 38%, 45%)",
          700: "hsl(0, 30%, 40%)",
          900: "hsl(0, 30%, 30%)",
        },
        earth: {
          100: "hsl(75, 27%, 80%)",
          300: "hsl(75, 27%, 50%)",
          500: "hsl(75, 27%, 40%)",
          700: "hsl(75, 27%, 30%)",
          900: "hsl(75, 27%, 20%)",
        },
        air: {
          100: "hsl(40, 30%, 80%)",
          300: "hsl(40, 30%, 60%)",
          500: "hsl(40, 38%, 45%)",
          700: "hsl(40, 30%, 40%)",
          900: "hsl(40, 30%, 20%)",
        },
        weapons: {
          100: "hsl(220, 15%, 80%)",
          300: "hsl(220, 15%, 50%)",
          500: "hsl(220, 15%, 40%)",
          700: "hsl(220, 15%, 30%)",
          900: "hsl(220, 15%, 20%)",
        },
        technology: {
          100: "hsl(270, 30%, 80%)",
          300: "hsl(270, 30%, 60%)",
          500: "hsl(270, 30%, 45%)",
          700: "hsl(270, 30%, 40%)",
          900: "hsl(270, 30%, 30%)",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
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
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
