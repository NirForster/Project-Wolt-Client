/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontSize: {
        base: ".875rem",
      },
      lineHeight: {
        base: "1.25rem",
      },
      fontFamily: {
        woltHeader: ["Omnes Bold", "var(--cb-font-family-brand)", "sans-serif"],
        brand: ["Omnes Bold", "var(--cb-font-family-brand)", "sans-serif"],
        sans: ["var(--cb-font-family-sans)", "sans-serif"],
        mono: ["var(--cb-font-family-mono)", "monospace"],
      },
      fontWeight: {
        bold: "var(--cb-font-weight-bold)",
        semibold: "var(--cb-font-weight-semibold)",
        medium: "var(--cb-font-weight-medium)",
        regular: "var(--cb-font-weight-regular)",
      },
      lineHeight: {
        medium: "var(--cb-font-leading-medium)",
        small: "var(--cb-font-leading-small)",
      },
      colors: {
        // main colors
        BlueBackgroundAndText: "#009de0",
        BlueLightBackground: "#ebf7fd",
        BlueBackgroundOnHover: "#d6effa",

        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
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
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        woltColors: {
          white: "#fff",
          black: "#000",
          transparent: "transparent",
          current: "currentColor",
          facebookBlueBg: "rgba(57, 117, 234, 1)",
          facebookBlueBgHover: "rgba(57, 117, 234, 0.88)",
          facebookBlueTextHover: "rgba(57, 117, 234, 0.88)",

          // Background Colors
          bgDefault: "#fff",
          bgSurface: "#ededee",
          bgSurfaceHovered: "#dbdbdc",
          bgSurfacePressed: "#c9cacb",
          bgSurfaceSelected: "#e4e4e5",
          bgSurfaceDisabled: "#f6f6f6",
          bgSurfaceSecondary: "#f6f6f6",
          bgSurfaceSecondaryHovered: "#ededee",
          bgSurfaceSecondaryPressed: "#dbdbdc",
          bgSurfaceSecondarySelected: "#e4e4e5",
          bgSurfaceSecondaryDisabled: "#f6f6f6",
          bgSurfaceTertiary: "#fff0",
          bgSurfaceTertiaryHovered: "#f6f6f6",
          bgSurfaceTertiaryPressed: "#e4e4e4",
          bgSurfaceTertiarySelected: "#eee",
          bgSurfaceTertiaryDisabled: "#fff0",
          bgFill: "#000",
          bgFillHovered: "#1f1f1f",
          bgFillPressed: "#333",
          bgFillSelected: "#292929",
          bgFillDisabled: "#5c5c5c",

          // Brand Colors
          brandBg: "#009de0",
          brandHovered: "#1fa9e4",
          brandPressed: "#33b1e6",
          brandSelected: "#29ade5",
          brandDisabled: "#5cc0eb",

          // Text Colors
          textDefault: "#202125",
          textHovered: "#202125eb",
          textPressed: "#202125cc",
          textSelected: "#202125e0",
          textSubdued: "#202125a3",
          textDisabled: "#20212566",
          textOnFill: "#fff",
          textOnFillHovered: "#fff",
          textOnFillPressed: "#fff",
          textOnFillSelected: "#fff",
          textOnFillDisabled: "#9d9d9d",

          // Border Colors
          borderDefault: "#e4e4e5",
          borderHovered: "#c9cacb",
          borderPressed: "#b8b8b9",
          borderSelected: "#009de0",
          borderDisabled: "#ededee",
          borderSubdued: "#ededee",
          borderNegative: "#f93a25",

          // Overlay Colors
          overlay: "#00000052",
        },
        boxShadow: {
          DEFAULT:
            "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
          brand:
            "0 4px 6px -1px rgba(0, 157, 224, 0.1), 0 2px 4px -1px rgba(0, 157, 224, 0.06)",
          negative:
            "0 4px 6px -1px rgba(249, 58, 37, 0.1), 0 2px 4px -1px rgba(249, 58, 37, 0.06)",
          positive:
            "0 4px 6px -1px rgba(31, 199, 10, 0.1), 0 2px 4px -1px rgba(31, 199, 10, 0.06)",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
