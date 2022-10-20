import NextLink from "next/link";
import { useTranslate } from "utils/translate";
import { type PropsWithChildren, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsArrow90DegDown } from "react-icons/bs";
import { HiOutlineMenuAlt4, HiX } from "react-icons/hi";
import { Link, NavLink, Text } from "./typography";

type ItemProps = { inverse?: boolean };

const Social = ({ inverse }: ItemProps) => {
  const socialClass = `h-6 w-6 ${
    inverse ? "hover:text-sky-500" : "hover:text-sky-900"
  }`;

  return (
    <>
      <Link
        href='https://www.linkedin.com/in/jorddy'
        target='_blank'
        rel='noreferrer'
        type={inverse ? "inverse" : "default"}
        aria-label='Link to my LinkedIn page'
      >
        <FaLinkedin className={socialClass} />
      </Link>
      <Link
        href='https://github.com/jorddy'
        target='_blank'
        rel='noreferrer'
        type={inverse ? "inverse" : "default"}
        aria-label='Link to my Github page'
      >
        <FaGithub className={socialClass} />
      </Link>
    </>
  );
};

const MenuItems = ({ inverse }: ItemProps) => {
  return (
    <>
      <li className='flex gap-2'>
        <NextLink href={{ pathname: "/projects" }}>
          <NavLink inverse={inverse} path='/projects'>
            My Work
          </NavLink>
        </NextLink>

        <NextLink href={{ pathname: "/blog" }}>
          <NavLink inverse={inverse} path='/blog'>
            Blog
          </NavLink>
        </NextLink>

        <NavLink
          path='/cv'
          inverse={inverse}
          href='/jakeord-cv.pdf'
          target='_blank'
          rel='noopener'
        >
          My CV
        </NavLink>
      </li>

      <li className='flex gap-3'>
        <Social inverse={inverse} />
      </li>
    </>
  );
};

const Header = () => {
  const { english } = useTranslate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='flex items-center justify-between gap-8'>
      <NextLink href={{ pathname: "/" }}>
        <a className='text-3xl font-bold hover:opacity-60 focus:opacity-60'>
          {english ? "Jake Ord" : "オードジェイク"}
        </a>
      </NextLink>

      <ul role='navigation' className='hidden gap-4 md:flex md:items-center'>
        <MenuItems />
      </ul>

      <button
        onClick={() => setIsMenuOpen(true)}
        className='flex items-center gap-2 rounded-md bg-sky-900 px-3 py-2 
        text-white transition hover:bg-sky-500 md:hidden'
      >
        <Text>Menu</Text>
        <HiOutlineMenuAlt4 className='h-7 w-7' />
      </button>

      {isMenuOpen && (
        <nav
          className='absolute inset-x-2 top-2 z-10 animate-fade-down space-y-4 rounded-sm 
          bg-sky-900 p-6 text-white shadow-xl'
        >
          <div className='flex items-center justify-between text-lg font-bold'>
            {english ? "Jake Ord" : "オルドジェイク"}
            <button onClick={() => setIsMenuOpen(false)}>
              <HiX className='h-8 w-8' />
            </button>
          </div>

          <ul className='flex flex-wrap items-center justify-between gap-4'>
            <MenuItems inverse />
          </ul>
        </nav>
      )}
    </header>
  );
};

export default function Layout({ children }: PropsWithChildren) {
  const { english, setEnglish } = useTranslate();

  return (
    <div className='mx-auto max-w-5xl p-8'>
      <a
        href='#content'
        className='absolute -top-24 left-4 z-50 rounded-sm bg-sky-900 p-4 text-white focus:top-4'
      >
        Skip to Content
      </a>

      <aside className='fixed bottom-4 right-4 z-50 flex flex-col items-center gap-4'>
        <div className='hidden animate-bounce items-center gap-4 xl:flex'>
          <BsArrow90DegDown className='h-5 w-5' />
          <p>Translate</p>
        </div>
        <li className='flex gap-4 rounded-xl border-2 border-gray-600 bg-white p-4'>
          <strong>JP</strong>
          <button
            onClick={() => setEnglish(!english)}
            className={`${
              english ? "bg-sky-900" : "bg-gray-300"
            } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span
              className={`${
                english ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 rounded-full bg-white transition ease-out`}
            />
          </button>
          <strong>EN</strong>
        </li>
      </aside>

      <Header />

      <main id='content'>{children}</main>

      <footer
        className='flex flex-col justify-between gap-4 border-t border-gray-500
        pt-4 sm:flex-row sm:gap-0'
      >
        <Text>
          © {new Date().getFullYear()}, Made with ❤️ and 🐉 by Jake Ord
        </Text>
        <div className='flex gap-4'>
          <Social />
        </div>
      </footer>
    </div>
  );
}
