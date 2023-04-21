import "./globals.css";
import { Noto_Sans, Noto_Serif } from "next/font/google";
import { Metadata } from "next";
import Header from "./header";
import SocialLinks from "./social-links";
import { config } from "~/.contentlayer/generated";
import { Analytics } from "@vercel/analytics/react";

export function generateMetadata(): Metadata {
  return {
    metadataBase:
      process.env.NODE_ENV === "production"
        ? new URL(config.siteName)
        : new URL("http://localhost:3000"),
    title: config.siteTitle,
    description: config.siteDescription,
    openGraph: {
      title: config.siteTitle,
      description: config.siteDescription,
      images: config.siteImage,
      siteName: config.siteName,
      locale: "en_GB",
      type: "website"
    },
    twitter: {
      card: "summary",
      site: config.twitterHandle,
      title: config.siteTitle,
      description: config.siteDescription,
      images: config.siteImage
    }
  };
}

const notoSans = Noto_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-sans"
});
const notoSerif = Noto_Serif({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-serif"
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`flow ${notoSans.variable} ${notoSerif.variable}`}>
        <a className='skip-link' href='#content'>
          Skip to content
        </a>
        <Header />
        <main className='content grid'>
          <SocialLinks />
          <div id='content'>{children}</div>
        </main>
        <Analytics />
      </body>
    </html>
  );
}
