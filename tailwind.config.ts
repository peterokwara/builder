import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#8dc415",

          secondary: "#ead05d",

          accent: "#b809f7",

          neutral: "#211622",

          "base-100": "#fafafa",

          info: "#4487cf",

          success: "#22875b",

          warning: "#b8980a",

          error: "#fb0e1e",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
