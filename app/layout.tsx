import "./globals.css";
import { BsArrow90DegDown } from "react-icons/bs";
import { Noto_Sans } from "@next/font/google";
import { Text } from "./typography";
import Social from "./social";
import { TranslateProvider, TranslateToggle } from "./translate";
import Header from "./header";

const notoSans = Noto_Sans({
  weight: ["400", "600", "700", "900"],
  subsets: ["latin"]
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='scroll-smooth'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${notoSans.className} min-h-screen bg-amber-100`}>
        <a
          href='#translate'
          className='absolute -top-24 left-4 z-50 rounded-sm bg-sky-900 p-4 text-white focus:top-4'
          aria-label='Some phrases of my site are in Japanese click here to skip to translate button'
        >
          Skip to translate button
        </a>
        <a
          href='#content'
          className='absolute -top-24 left-4 z-50 rounded-sm bg-sky-900 p-4 text-white focus:top-4'
        >
          Skip to content
        </a>

        <TranslateProvider>
          <Header />
          <main className='mx-auto max-w-5xl p-8' id='content'>
            {children}
          </main>

          <footer
            className='mx-auto max-w-5xl p-8 flex flex-col justify-between gap-4 border-t 
          border-gray-500 pt-4 sm:flex-row sm:gap-0'
          >
            <Text>
              © {new Date().getFullYear()}, Made with ❤️ and 🐉 by Jake Ord
            </Text>
            <div className='flex gap-4'>
              <Social />
            </div>
          </footer>

          <div className='fixed bottom-4 right-4 z-50 flex flex-col items-center gap-4'>
            <div className='hidden animate-bounce items-center gap-4 motion-reduce:animate-none xl:flex'>
              <BsArrow90DegDown className='h-5 w-5' />
              <p>Translate me!</p>
            </div>
            <aside className='flex gap-4 rounded-xl border-2 border-gray-600 bg-white p-4'>
              <strong>JP</strong>
              <TranslateToggle />
              <strong>EN</strong>
            </aside>
          </div>
        </TranslateProvider>
      </body>
    </html>
  );
}
