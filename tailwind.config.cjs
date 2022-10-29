/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true
    },
    fontFamily: {
      body: ["Noto Sans", "sans-serif"]
    },
    extend: {
      animation: {
        "fade-down": "fade-down 100ms linear"
      },
      keyframes: {
        "fade-down": {
          from: { opacity: 0, transform: "translateY(-30px)" },
          to: { opacity: 1, transform: "translateY(0px)" }
        }
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};
