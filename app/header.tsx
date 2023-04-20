"use client";

import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className='header stack'>
      <svg
        className='flex-shrink-none'
        fill='white'
        width='50'
        height='80'
        min-width='50'
      >
        <title>
          Logo for Jake Ord, features the katakana ジェイク in a square
        </title>
        <use fill='currentColor' href='/logo.svg#logo'></use>
      </svg>
      <nav className='stack' aria-label='Website navigation'>
        <ul className='nav stack'>
          <li>
            <a href='/' aria-current={pathname === "/" ? "page" : "false"}>
              Home
            </a>
          </li>
          <li>
            <a
              href='/case-studies'
              aria-current={pathname === "/case-studies" ? "page" : "false"}
            >
              Case Studies
            </a>
          </li>
          <li>
            <a
              href='/writing'
              aria-current={pathname === "/writing" ? "page" : "false"}
            >
              Writing
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
