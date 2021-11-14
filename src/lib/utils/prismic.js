import prismic from '@prismicio/client'

export default prismic.client(import.meta.env.VITE_PRISMIC_API)
