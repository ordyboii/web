import "styles/globals.css";
import "@fontsource/fira-sans/700.css";
import "@fontsource/fira-sans/500.css";
import "@fontsource/public-sans/500.css";
import "@fontsource/public-sans/400.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "components/Header";
import Footer from "components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Jake Ord | UX Designer</title>
        <meta
          name='description'
          content='UX/UI designer based in Newcastle-Upon-Tyne.  focus on creating experiences that matter, that
          are both accessible and easy to use. I love solving problems and creating products that
          deliver value. An aloud thinker and creative go-getter.'
        />
        <meta
          name='keywords'
          content='UX/UI, designer, Newcastle, Newcastle-Upon-Tyne, graphics, web, code'
        />
      </Head>

      <a href='#content' className='skip-link'>
        Skip to content
      </a>

      <Header />
      <main id='content'>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
export default MyApp;
