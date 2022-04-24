import "styles/globals.css";
import type { AppProps } from "next/app";
import "@fontsource/fira-sans/700.css";
import "@fontsource/fira-sans/500.css";
import "@fontsource/public-sans/500.css";
import "@fontsource/public-sans/400.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
