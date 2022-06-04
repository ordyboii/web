module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      body: ["Inter", "sans-serif"]
    },
    extend: {
      animation: {
        fade: "fade 200ms linear"
      },
      keyframes: {
        fade: {
          from: { opacity: 0, transform: "translateY(30px)" },
          to: { opacity: 1, transform: "translateX(0)" }
        }
      }
    }
  },
  plugins: []
};
