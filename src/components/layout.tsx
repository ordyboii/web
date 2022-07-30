import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { PropsWithChildren, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { GiSeaDragon } from "react-icons/gi";
import { HiOutlineMenuAlt4, HiX } from "react-icons/hi";

const Social = () => {
  return (
    <>
      <a
        href='https://www.linkedin.com/in/jorddy'
        className='hover:opacity-60 focus:opacity-60'
        aria-label='Link to my LinkedIn page'
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href='https://www.instagram.com/jakeorddy'
        className='hover:opacity-60 focus:opacity-60'
        aria-label='Link to my Instagram page'
      >
        <FaInstagram size={24} />
      </a>
      <a
        href='https://github.com/jorddy'
        className='hover:opacity-60 focus:opacity-60'
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
        <Link href='/' className={`link ${pathname === "/" && "active"}`}>
          Home
        </Link>
      </li>
      <li>
        <Link
          href='/projects'
          className={`link ${pathname === "/projects" && "active"}`}
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          href='/blog'
          className={`link ${pathname === "/blog" && "active"}`}
        >
          Blog
        </Link>
      </li>
      <li>
        <Link href='/cv.pdf'>CV</Link>
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
        className='relative w-12 h-10 hover:opacity-60 focus:opacity-60'
      >
        <Image layout='fill' src='/images/dragon.svg' alt='dragon icon' />
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
        bg-gray-700 border border-gray-500 animate-fade'
        >
          <div className='relative flex justify-between items-center'>
            <Image
              className='h-8'
              layout='fill'
              src='/images/logo.svg'
              alt='Jake Ord logo'
            />
            <button onClick={() => setIsMenuOpen(false)}>
              <HiX size={28} />
            </button>
          </div>

          <div className='flex flex-wrap gap-8 justify-between'>
            <ul className='flex gap-4'>
              <MenuItems />
            </ul>
          </div>
        </nav>
      )}
    </header>
  );
};

const Footer = () => {
  return (
    <footer
      className='mt-12 pt-4 border-t border-gray-500 flex flex-col gap-4
      justify-between md:mt-24 sm:flex-row sm:gap-0'
    >
      <h3>© Copyright Jake Ord, {new Date().getFullYear()}</h3>
      <div className='flex gap-4'>
        <Social />
      </div>
    </footer>
  );
};

const SkipLink = () => {
  return (
    <a
      href='#content'
      className='absolute top-4 left-4 p-4 rounded-sm bg-gray-900 opacity-0 focus:opacity-100'
    >
      Skip to Content
    </a>
  );
};

export default function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <div className='grid grid-rows-[auto_1fr_auto] min-h-screen container mx-auto p-8'>
      <SkipLink />
      <Header />
      <main className='container' id='content'>
        {children}
      </main>
      <Footer />

      {/* Background Icon */}
      <GiSeaDragon
        className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 -z-10 
        w-80 h-80 sm:w-[30rem] sm:h-[30rem] md:h-[44rem] md:w-[44rem]'
      />
    </div>
  );
}
