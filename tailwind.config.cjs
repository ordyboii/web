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
  plugins: [require("@tailwindcss/typography")]
};
