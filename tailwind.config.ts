import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      keyframes: {
        'fade-in-top': {
          '0%': {
            transform: 'translateY(-50px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        'fade-in-bottom': {
          '0%': {
            transform: 'translateY(30px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
      },
      animation: {
        'fade-in-top': 'fade-in-top 0.7s ease-out forwards',
        'fade-in-bottom': 'fade-in-bottom 0.7s ease-out forwards',
      },
    },
  },
  plugins: [require("daisyui")],
};

export default config;
