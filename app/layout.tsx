import "./globals.css";
import Image from "next/image";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";
import { Metadata } from "next";

const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
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
      <body className={`${inter.className} bg-gray-950 text-white`}>
        <a
          className="sr-only underline text-gray-950 bg-yellow-400 focus:block focus:p-2 focus:not-sr-only"
          href="#main-content"
        >
          Skip to content
        </a>
        <div className="max-w-xl mx-auto py-8">
          <header className="flex items-center gap-4">
            <Image
              src="/logo.svg"
              alt=""
              width="40"
              height="50"
              aria-hidden="true"
            />
            <h1 className="text-2xl font-bold">
              Jake Ord
              <br />
              <span className="text-gray-400">Interaction Designer</span>
            </h1>
          </header>
          <main id="main-content">{props.children}</main>
        </div>
      </body>
    </html>
  );
}
