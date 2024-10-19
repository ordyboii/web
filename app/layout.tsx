import "./global.css";
import Image from "next/image";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";
import { Metadata } from "next";

const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Jake Ord - Interaction Designer",
  description:
    "Interaction designer based in Newcastle Upon Tyne, UK working at HMRC.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <a className="ordyboii-skip-link" href="#template-main">
          Skip to content
        </a>
        <div className="ordyboii-container">
          <header className="ordyboii-flex">
            <Image
              src="/logo.svg"
              alt=""
              width="40"
              height="50"
              aria-hidden="true"
            />
            <h1 className="ordyboii-heading">
              Jake Ord
              <br />
              <span className="ordyboii-caption">Interaction Designer</span>
            </h1>
          </header>
          <main id="template-main">{props.children}</main>
        </div>
      </body>
    </html>
  );
}
