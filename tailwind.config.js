module.exports = {
  plugins: [require("tailwindcss-animate")],
  theme: {
    extend: {
      animation: {
        "marquee-horizontal":
          "marquee-horizontal var(--duration) linear infinite",
        "marquee-vertical":
          "marquee-vertical var(--duration) linear infinite",
      },
      keyframes: {
        "marquee-horizontal": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "marquee-vertical": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
    },
  },

};
