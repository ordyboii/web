import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang='en' className='scroll-smooth'>
      <Head />
      <body className='font-body min-h-screen bg-amber-100'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
