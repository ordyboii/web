import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { PropsWithChildren, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiOutlineMenuAlt4, HiX } from "react-icons/hi";

const Social = () => {
  return (
    <>
      <a
        href='https://www.linkedin.com/in/jorddy'
        target='_blank'
        rel='noreferrer'
        className='link'
        aria-label='Link to my LinkedIn page'
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href='https://www.instagram.com/jakeorddy'
        target='_blank'
        rel='noreferrer'
        className='link'
        aria-label='Link to my Instagram page'
      >
        <FaInstagram size={24} />
      </a>
      <a
        href='https://github.com/jorddy'
        target='_blank'
        rel='noreferrer'
        className='link'
        aria-label='Link to my Github page'
      >
        <FaGithub size={24} />
      </a>
    </>
  );
};

const MenuItems = () => {
  const { pathname } = useRouter();

  return (
    <>
      <li>
        <Link href='/' className={`nav-link ${pathname === "/" && "active"}`}>
          Home
        </Link>
      </li>
      <li>
        <Link
          href='/projects'
          className={`nav-link ${pathname === "/projects" && "active"}`}
        >
          Projects
        </Link>
      </li>
      <li>
        <a
          href='/jake-ord-cv-2022.pdf'
          target='_blank'
          rel='noopener'
          className='nav-link'
        >
          CV
        </a>
      </li>
      <li className='flex gap-4'>
        <Social />
      </li>
    </>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='flex gap-4 justify-between items-center'>
      <Link
        href='/'
        className='relative w-16 h-10 hover:opacity-60 focus:opacity-60'
      >
        <Image src='/images/dragon.svg' alt='dragon icon' layout='fill' />
      </Link>
      <ul role='navigation' className='hidden sm:flex gap-8'>
        <MenuItems />
      </ul>

      <button onClick={() => setIsMenuOpen(true)} className='sm:hidden'>
        <HiOutlineMenuAlt4 size={32} />
      </button>

      {isMenuOpen && (
        <nav
          className='absolute z-10 top-2 left-2 right-2 p-6 space-y-4 rounded-sm 
        bg-sky-500 text-white border-2 border-gray-900 animate-fade'
        >
          <div className='flex justify-between items-center'>
            <div className='relative '>
              <Image
                className='h-8'
                layout='fill'
                src='/images/logo.svg'
                alt='Jake Ord logo'
              />
            </div>
            <button onClick={() => setIsMenuOpen(false)}>
              <HiX size={28} />
            </button>
          </div>

          <ul className='flex gap-4'>
            <MenuItems />
          </ul>
        </nav>
      )}
    </header>
  );
};

export default function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <div className='container mx-auto p-8'>
      <a
        href='#content'
        className='absolute -top-24 left-4 p-4 rounded-sm bg-purple-800 text-white z-50 focus:top-4'
      >
        Skip to Content
      </a>

      <Header />

      <main className='container' id='content'>
        {children}
      </main>

      <footer
        className='pt-4 border-t border-gray-500 flex flex-col gap-4
        justify-between md:mt-24 sm:flex-row sm:gap-0'
      >
        <h3>© {new Date().getFullYear()}, Made with ❤️ and 🐉 by Jake Ord</h3>

        <a
          href='https://www.flaticon.com/free-icons/dragon'
          target='_blank'
          rel='noreferrer'
          className='link'
        >
          Dragon icon created by max.icons
        </a>

        <div className='flex gap-4'>
          <Social />
        </div>
      </footer>
    </div>
  );
}
