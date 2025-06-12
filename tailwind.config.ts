/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],

  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", ...fontFamily.sans],
        archivo: ["var(--font-archivo)", ...fontFamily.sans],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        brightRed: {
          "100": "hsl(var(--bright-red-100))",
          "200": "hsl(var(--bright-red-200))",
          "300": "hsl(var(--bright-red-300))",
          "400": "hsl(var(--bright-red-400))",
          "500": "hsl(var(--bright-red-500))",
        },
        naplesYellow: {
          "100": "hsl(var(--naples-yellow-100))",
          "200": "hsl(var(--naples-yellow-200))",
          "300": "hsl(var(--naples-yellow-300))",
          "400": "hsl(var(--naples-yellow-400))",
          "500": "hsl(var(--naples-yellow-500))",
        },
        pictonBlue: {
          "100": "hsl(var(--picton-blue-100))",
          "200": "hsl(var(--picton-blue-200))",
          "300": "hsl(var(--picton-blue-300))",
          "400": "hsl(var(--picton-blue-400))",
          "500": "hsl(var(--picton-blue-500))",
        },
        primary: {
          "10": "hsl(var(--primary)/0.1)",
          "15": "hsl(var(--primary)/0.15)",
          DEFAULT: "hsl(var(--primary))",
          hover: "hsl(var(--primary-hover))",
          focus: "hsl(var(--primary-focus))",
          foreground: "hsl(var(--primary-foreground))",
          lightGrey: "hsl(var(--primary-light-grey))",
          midGrey: "hsl(var(--primary-mid-grey))",
          darkGrey: "hsl(var(--primary-dark-grey))",
          voidGrey: "hsl(var(--primary-void-grey))",
          brightRed: "hsl(var(--primary-bright-red))",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover)/0.05)",
          foreground: "hsl(var(--popover-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary)/0.1)",
          hover: "hsl(var(--secondary-hover)/0.2)",
          focus: "hsl(var(--secondary-focus)/0.05)",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          "10": "hsl(var(--muted-10)/0.1)",
          "20": "hsl(var(--muted-20)/0.2)",
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
          "border-50": "hsl(var(--destructive-foreground)/0.5)",
        },
        border: "hsla(var(--border)/0.3)",
        input: "hsl(var(--input)/0.4)",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/container-queries"),
  ],
}

export default config
