/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true
    },
    fontFamily: {
      body: ["Noto Sans", "sans-serif"]
    },
    extend: {
      animation: {
        "fade-up": "fade-up 500ms linear"
      },
      keyframes: {
        "fade-up": {
          from: { opacity: 0, transform: "translateY(50px)" },
          to: { opacity: 1, transform: "translateY(0px)" }
        }
      }
    }
  },
  plugins: []
};
