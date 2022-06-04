import Image from "next/image";
import { useRouter } from "next/router";
import { HiOutlineMenuAlt4, HiX } from "react-icons/hi";
import NextLink from "next/link";
import Link from "./link";
import { useState } from "react";
import Social from "./social";

export default function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='flex gap-4 justify-between items-center'>
      <NextLink href='/'>
        <a className='hover:opacity-60 focus:opacity-60'>
          <Image
            src='/images/logo.svg'
            alt='Jake Ord logo'
            width={100}
            height={50}
          />
        </a>
      </NextLink>
      <ul role='navigation' className='hidden sm:flex gap-8'>
        <li>
          <Link href='/' active={router.pathname === "/"}>
            Home
          </Link>
        </li>
        <li>
          <Link href='/work' active={router.pathname === "/work"}>
            Work
          </Link>
        </li>
        <li>
          <Link href='/blog' active={router.pathname === "/blog"}>
            Blog
          </Link>
        </li>
        <li className='flex gap-4'>
          <Social />
        </li>
      </ul>

      <button onClick={() => setIsMenuOpen(true)} className='sm:hidden'>
        <HiOutlineMenuAlt4 size={32} />
      </button>

      {isMenuOpen && (
        <nav
          className='absolute top-2 left-2 right-2 p-6 space-y-4 rounded-sm 
        bg-gray-700 border border-gray-500 animate-fade'
        >
          <div className='flex justify-between items-center'>
            <Image
              src='/images/logo.svg'
              alt='Jake Ord logo'
              width={100}
              height={50}
            />
            <button onClick={() => setIsMenuOpen(false)}>
              <HiX size={28} />
            </button>
          </div>

          <div className='flex gap-2 justify-between'>
            <ul className='flex gap-4'>
              <li>
                <Link href='/' active={router.pathname === "/"}>
                  Home
                </Link>
              </li>
              <li>
                <Link href='/work' active={router.pathname === "/work"}>
                  Work
                </Link>
              </li>
              <li>
                <Link href='/blog' active={router.pathname === "/blog"}>
                  Blog
                </Link>
              </li>
            </ul>

            <div className='flex gap-4'>
              <Social />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
