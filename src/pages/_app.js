import '@fontsource/fira-sans/600.css'
import '@fontsource/fira-sans/500.css'
import '@fontsource/public-sans'

import 'styles/globals.css'
import Layout from 'components/Layout'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
