module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.svelte'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: 'true',
      padding: '2rem'
    },
    fontFamily: {
      heading: ['Fira Sans', 'sans-serif'],
      body: ['Public Sans', 'sans-serif']
    },
    extend: {
      animation: {
        slide: 'slide 0.5s ease-in forwards'
      },
      keyframes: {
        slide: {
          from: { opacity: 0, transform: 'translateY(8rem)' },
          to: { opacity: 1, transform: 'translateY(0)' }
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
