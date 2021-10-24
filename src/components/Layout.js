import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Head>
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
        <title>Jake Ord | UX Designer</title>
      </Head>

      <Header />
      <a href='#content' className='sr-only focus:not-sr-only top-2 left-2 p-4 bg-yellow-300'>
        Skip to content
      </a>
      <main id='content'>{children}</main>
      <Footer />
    </>
  )
}
