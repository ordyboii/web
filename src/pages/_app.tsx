import "@/styles/globals.css";
import "@fontsource/noto-sans/400.css";
import "@fontsource/noto-sans/700.css";
import "@fontsource/noto-sans/900.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
