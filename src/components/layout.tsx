import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslate } from "utils/translate";
import { PropsWithChildren, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiOutlineMenuAlt4, HiX } from "react-icons/hi";

const Social = (props: { inverse?: boolean }) => {
  const socialClass = `link ${props.inverse && "hover:text-gray-900"}`;

  return (
    <>
      <a
        href='https://www.linkedin.com/in/jorddy'
        target='_blank'
        rel='noreferrer'
        className={socialClass}
        aria-label='Link to my LinkedIn page'
      >
        <FaLinkedin className='w-6 h-6' />
      </a>
      <a
        href='https://www.instagram.com/jakeorddy'
        target='_blank'
        rel='noreferrer'
        className={socialClass}
        aria-label='Link to my Instagram page'
      >
        <FaInstagram className='w-6 h-6' />
      </a>
      <a
        href='https://github.com/jorddy'
        target='_blank'
        rel='noreferrer'
        className={socialClass}
        aria-label='Link to my Github page'
      >
        <FaGithub className='w-6 h-6' />
      </a>
    </>
  );
};

const MenuItems = (props: { inverse?: boolean }) => {
  const { pathname } = useRouter();

  const navClass = (path: string) =>
    `hover:text-sky-500 ${props.inverse && "hover:text-gray-900"} ${
      !props.inverse &&
      pathname === path &&
      "font-bold text-sky-500 border-b-2 border-sky-500 pb-1"
    } ${
      props.inverse &&
      pathname === path &&
      "font-bold text-gray-900 border-b-2 border-gray-900 pb-1"
    }`;

  return (
    <>
      <li className='flex gap-6'>
        <Link href='/' className={navClass("/")}>
          Home
        </Link>

        <a
          href='/jakeord-cv.pdf'
          target='_blank'
          rel='noopener'
          className={navClass("/cv")}
        >
          CV
        </a>
      </li>

      <li className='flex gap-4'>
        <Social inverse />
      </li>
    </>
  );
};

const Header = () => {
  const { english } = useTranslate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='flex gap-8 justify-between items-center'>
      <Link
        href='/'
        className='text-3xl font-bold hover:opacity-60 focus:opacity-60'
      >
        {english && "Jake Ord"}
        {!english && "オルドジェイク"}
      </Link>

      <ul role='navigation' className='hidden md:flex gap-10'>
        <MenuItems />
      </ul>

      <button onClick={() => setIsMenuOpen(true)} className='md:hidden'>
        <HiOutlineMenuAlt4 className='w-10 h-10 hover:opacity-60' />
      </button>

      {isMenuOpen && (
        <nav
          className='absolute z-10 top-2 left-2 right-2 p-6 space-y-4 rounded-sm 
        bg-sky-500 text-white border-2 border-gray-900 animate-fade'
        >
          <div className='text-lg font-bold flex justify-between items-center'>
            {english && "Jake Ord"}
            {!english && "オルドジェイク"}
            <button onClick={() => setIsMenuOpen(false)}>
              <HiX className='w-8 h-8' />
            </button>
          </div>

          <ul className='flex gap-6 justify-between flex-col sm:flex-row'>
            <MenuItems inverse />
          </ul>
        </nav>
      )}
    </header>
  );
};

const Layout = (props: PropsWithChildren) => {
  const { english, setEnglish } = useTranslate();

  return (
    <div className='max-w-5xl mx-auto p-8'>
      <a
        href='#content'
        className='absolute -top-24 left-4 p-4 rounded-sm bg-sky-500 text-white z-50 focus:top-4'
      >
        Skip to Content
      </a>

      <li className='flex gap-4 fixed bottom-4 right-4 p-4 bg-white border-2 border-gray-600 rounded-xl z-50'>
        <strong>JP</strong>
        <button
          onClick={() => setEnglish(!english)}
          className={`${
            english ? "bg-sky-500" : "bg-gray-300"
          } relative inline-flex h-6 w-11 items-center rounded-full`}
        >
          <span
            className={`${
              english ? "translate-x-6" : "translate-x-1"
            } transition ease-out inline-block h-4 w-4 transform rounded-full bg-white`}
          />
        </button>
        <strong>EN</strong>
      </li>

      <Header />

      <main id='content'>{props.children}</main>

      <footer
        className='pt-4 border-t border-gray-500 flex flex-col gap-4
        justify-between sm:flex-row sm:gap-0'
      >
        <p>© {new Date().getFullYear()}, Made with ❤️ and 🐉 by Jake Ord</p>
        <div className='flex gap-4'>
          <Social />
        </div>
      </footer>
    </div>
  );
};

export default Layout;
