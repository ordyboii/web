import type { ReactNode } from "react";
import Head from "next/head";
import Header from "components/header";
import Footer from "components/footer";
import { AnimatePresence, motion } from "framer-motion";

export default function Layout({ children }: { children: ReactNode }) {
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

      <AnimatePresence exitBeforeEnter>
        <motion.div
          className='app'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Header />
          <main id='content'>{children}</main>
          <Footer />
        </motion.div>
      </AnimatePresence>
    </>
  );
}
