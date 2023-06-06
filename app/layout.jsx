import "./globals.css";
import { Noto_Sans, Noto_Serif } from "next/font/google";
import { cache } from "react";
import matter from "gray-matter";
import fs from "fs";
import NavLink from "./nav-link";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sans",
});

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif",
});

const getConfig = cache(() => {
  return matter(fs.readFileSync("content/config.md", "utf-8"));
});

export function generateMetadata() {
  const { data } = getConfig();
  return {
    metadataBase:
      process.env.NODE_ENV === "production"
        ? data.siteName
        : "http://localhost:3000",
    title: {
      template: `%s | ${data.siteTitle}`,
      default: data.siteTitle,
    },
    description: data.siteDescription,
    openGraph: {
      type: "website",
      title: data.siteTitle,
      description: data.siteDescription,
      images: data.siteImage,
    },
    twitter: {
      card: "summary",
      title: data.siteTitle,
      description: data.siteDescription,
      images: data.siteImage,
    },
  };
}

export default function RootLayout({ children }) {
  const { data } = getConfig();
  return (
    <html lang="en">
      <body className={`${notoSans.variable} ${notoSerif.variable} stack`}>
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        <header className="header stack">
          <svg
            className="flex-shrink-none"
            fill="white"
            width="50"
            height="80"
            min-width="50"
          >
            <title>
              Logo for Jake Ord, features the katakana ジェイク in a square
            </title>
            <use fill="currentColor" href="/logo.svg#logo"></use>
          </svg>
          <nav className="stack" aria-label="Website navigation">
            <ul className="nav stack">
              <li>
                <NavLink href="/">Home</NavLink>
              </li>
              <li>
                <NavLink href="/case-studies">Case Studies</NavLink>
              </li>
              <li>
                <NavLink href="/writing">Writing</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <main className="content grid">
          <nav aria-label="Social links">
            <ul className="social-links stack">
              <li>
                <a href={data.twitter} aria-label="Link to my Twitter page">
                  <svg width="24" height="24">
                    <use
                      stroke="currentColor"
                      href="/twitter.svg#twitter"
                    ></use>
                  </svg>
                </a>
              </li>
              <li>
                <a href={data.linkedin} aria-label="Link to my LinkedIn page">
                  <svg width="24" height="24">
                    <use
                      stroke="currentColor"
                      href="/linkedin.svg#linkedin"
                    ></use>
                  </svg>
                </a>
              </li>
              <li>
                <a href={data.github} aria-label="Link to my Github page">
                  <svg width="24" height="24">
                    <use stroke="currentColor" href="/github.svg#github"></use>
                  </svg>
                </a>
              </li>
              <li>
                <a href={`mailto:${data.email}`} aria-label="Email me!">
                  <svg width="24" height="24">
                    <use stroke="currentColor" href="/mail.svg#mail"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
          <div id="content">{children}</div>
        </main>
      </body>
    </html>
  );
}
