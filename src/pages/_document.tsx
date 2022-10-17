import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang='en' className='scroll-smooth'>
      <Head />
      <body className='min-h-screen bg-amber-100 font-body'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
