import { PropsWithChildren } from "react";
import { GiSeaDragon } from "react-icons/gi";
import Footer from "./footer";
import Header from "./header";
import SkipLink from "./skip-link";
import SEO from "./seo";

export default function Layout({
  title,
  description,
  children
}: PropsWithChildren<{ title?: string; description?: string }>) {
  return (
    <div className='grid grid-rows-[auto_1fr_auto] min-h-screen max-w-2xl mx-auto p-8 md:px-0'>
      <SkipLink />
      <SEO title={title} description={description} />

      <Header />
      <main className='container' id='content'>
        {children}
      </main>
      <Footer />

      {/* Background Icon */}
      <GiSeaDragon
        className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 -z-10 
        w-80 h-80 sm:w-[30rem] sm:h-[30rem] md:h-[44rem] md:w-[44rem]'
      />
    </div>
  );
}
