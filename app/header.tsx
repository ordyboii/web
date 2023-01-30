"use client";

import { usePathname } from "next/navigation";
import { PropsWithChildren, useState } from "react";
import { Text } from "./typography";
import Social from "./social";
import { SkipToTranslate, TranslateText } from "./translate";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import Link from "next/link";

type Props = {
  inverse?: boolean;
};

const MenuItems = ({ inverse }: Props) => {
  const pathname = usePathname();

  const navClass = (path: string) =>
    `px-3 py-2 rounded-md transition ease-in cursor-pointer ${
      inverse
        ? "hover:bg-sky-700 focus:bg-sky-700"
        : "hover:bg-sky-900 hover:text-white focus:bg-sky-900 focus:text-white"
    } ${!inverse && pathname === path && "bg-sky-900 text-white"} ${
      inverse && pathname === path && "bg-sky-700 text-white"
    }`;

  return (
    <>
      <li className={`flex gap-2 ${inverse && "flex-col gap-2"}`}>
        <Link className={navClass("/")} href='/'>
          Home
        </Link>
        <Link className={navClass("/client-work")} href='/client-work'>
          Client Work
        </Link>
        <Link className={navClass("/thoughts")} href='/thoughts'>
          Thoughts
        </Link>
      </li>

      <li className='flex gap-3'>
        <Social inverse={inverse} />
      </li>
    </>
  );
};

const MobileMenu = ({ children }: PropsWithChildren) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsMenuOpen(true)}
        className='flex items-center gap-2 rounded-md bg-sky-900 px-3 py-2 text-white transition hover:bg-sky-500 focus:bg-sky-500 md:hidden'
      >
        <Text>Menu</Text>
        <HiOutlineMenuAlt3 className='w-5 h-5' />
      </button>
      {isMenuOpen && (
        <nav
          className='absolute inset-x-2 top-2 z-10 space-y-4 rounded-sm 
          bg-sky-900 p-6 text-white shadow-xl'
        >
          <div className='flex items-center justify-between text-lg font-bold'>
            <TranslateText en='Jake Ord' jp='オルドジェイク' />
            <button onClick={() => setIsMenuOpen(false)}>
              <HiX className='w-5 h-5' />
            </button>
          </div>

          {children}
        </nav>
      )}
    </>
  );
};

export default function Header() {
  return (
    <header className='max-w-5xl mx-auto p-6 flex items-center justify-between gap-8'>
      <Link
        href='/'
        className='text-3xl font-bold hover:opacity-60 focus:opacity-60'
      >
        <TranslateText en='Jake Ord' jp='オードジェイク' />
      </Link>
      <SkipToTranslate />

      <ul role='navigation' className='hidden gap-4 md:flex md:items-center'>
        <MenuItems />
      </ul>

      <MobileMenu>
        <ul className='space-y-4'>
          <MenuItems inverse />
        </ul>
      </MobileMenu>
    </header>
  );
}
