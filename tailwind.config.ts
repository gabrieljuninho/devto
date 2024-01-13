import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./common/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "layout-1": "100%",
        "layout-2": "2fr 5fr",
        "layout-3": "240px 2fr 1fr",
      },
      minHeight: {
        body: "calc(100vh - 56px)",
      },
      maxHeight: {
        billboard: "calc(100vh - 56px - 2 * 1rem)",
      },
      height: {
        logo: "calc(56px - 0.5rem * 2)",
      },
      spacing: {
        heading: "calc(1.25rem / 2)",
        "border-0-sm": "calc(0.25rem - 0)",
        "border-1.5": "calc(0.5em - 1.5px)",
        "border-1-sm": "calc(0.5rem - 1px)",
        "border-1-md": "calc(1rem - 1px)",
        "icon-sm": "calc(0.5rem * -1)",
      },
      backgroundColor: {
        body: "rgb(245, 245, 245)",
        hover: "rgba(59, 73, 223, 0.1)",
        "cta-branded": "rgb(59, 73, 223)",
        "ghost-hover": "rgba(0, 0, 0, 0.035)",
      },
      borderRadius: {
        card: "Max(0px, Min(0.375rem, calc((100vw - 4px - 100%) * 9999))) / 0.375rem",
      },
      boxShadow: {
        card: "0 10px 15px -3px rgba(0, 0, 0 , 0.1), 0 4px 6px -2px rgba(0, 0, 0 , 0.05), 0 0 0 1px rgba(0, 0, 0 , 0.1)",
      },
      fontFamily: {
        app: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
        ],
      },
      colors: {
        body: "rgb(23, 23, 23)",
        normal: "rgb(38, 38, 38)",
        hover: "rgb(47, 58, 178)",
        form: "rgb(212, 212, 212)",
        primary: "rgb(64, 64, 64)",
        secondary: "rgb(115, 115, 115)",
        ghost: "#3D3D3D",
        "base-70": "#575757",
        "base-90": "#242424",
        "base-100": "#090909",
        "link-branded": "rgb(47, 58, 178)",
        "cta-branded": "rgb(59, 73, 223)",
        "label-secondary": "rgb(82, 82, 82)",
      },
      transitionTimingFunction: {
        modifier: "cubic-bezier(0.17, 0.67, 0.5, 0.71)",
      },
    },
  },
  plugins: [],
};

export default config;
