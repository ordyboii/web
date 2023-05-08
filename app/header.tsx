"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
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
            <Link href="/" aria-current={pathname === "/" ? "page" : "false"}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/case-studies"
              aria-current={pathname === "/case-studies" ? "page" : "false"}
            >
              Case Studies
            </Link>
          </li>
          <li>
            <Link
              href="/writing"
              aria-current={pathname === "/writing" ? "page" : "false"}
            >
              Writing
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
