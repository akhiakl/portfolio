import type { Config } from 'tailwindcss'
const { fontFamily } = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      rotate: {
        65: "65deg",
      },
      maxWidth: {
        72: "18rem",
      },
      height: {
        86: "22.5rem",
      },
      fontFamily: {
        karla: ['var(--font-karla)', ...fontFamily.sans],
        'unica-one': ['var(--font-unica-one)', "cursive"],
      },
      backgroundImage: () => ({
        profile: "url('/img/profile-bg.png')",
        "black-50-dotted": "url('/img/black-dotted.svg')",
      }),
      transitionProperty: {
        size: "transform, height, width",
      },
      colors: {
        "black-50": "#0E0E0E",
      },
      zIndex: {
        "-1": "-1",
        "-10": "-10",
      },
      keyframes: {
        dim: {
          "0%, 100%": {
            opacity: '1',
          },
          "50%": {
            opacity: '0',
          },
        },
      },
      animation: {
        dim: "dim 3s ease-in-out infinite",
      },
      fontSize: {
        "10xl": "9rem",
        "11xl": "10rem",
        "12xl": "11rem"
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ["hover"],
      width: ["hover", "group-hover"],
      translate: ["hover", "group-hover"],
      ringColor: ["hover", "group-hover"],
      display: ["hover", "group-hover"],
      visibility: ["hover", "group-hover"],
      padding: ["odd", "even"],
    },
  },
  plugins: [],
}
export default config
