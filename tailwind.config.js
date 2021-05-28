module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  // important: true,
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
        karla: ["Karla", "sans-serif"],
      },
      backgroundImage: (theme) => ({
        profile: "url('/img/profile-bg.png')",
        'black-50-dotted': "url('/img/black-dotted.svg')"
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
            opacity: 1,
          },
          "50%": {
            opacity: 0,
          },
        },
      },
      animation: {
        dim: "dim 3s ease-in-out infinite",
      },
      fontSize: {
        '10xl': ['9rem'],
        '11xl': ['10rem'],
        '12xl': ['11rem']
      }
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
    },
  },
  plugins: [],
};
