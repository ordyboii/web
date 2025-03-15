import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jake Ord - Interaction Designer",
  description:
    "Interaction designer based in Newcastle Upon Tyne, UK working at HMRC.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <a className="ob-skip-link" href="#main-content">
          Skip to main content
        </a>
        <div className="ob-container">
          <header className="ob-cluster">
            <Image
              src="/logo.svg"
              alt=""
              width="40"
              height="50"
              aria-hidden="true"
            />
            <h1>
              Jake Ord
              <br />
              <span style={{ color: "var(--colour-grey)" }}>
                Interaction Designer
              </span>
            </h1>
          </header>
          <main id="main-content">{children}</main>
        </div>
        <Script
          src="https://analytics.jakeord.com/script.js"
          data-website-id="035b8baf-84f6-4736-93c7-3c0035b3a16a"
        />
      </body>
    </html>
  );
}
