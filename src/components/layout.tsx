import { useLanguage } from "@/utils/language";
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

type Props = {
  inverse?: boolean;
};

const MenuItems = ({ inverse }: Props) => {
  const { pathname } = useRouter();
  const { english, setEnglish } = useLanguage();

  const navClass = (path: string) =>
    `nav-link ${inverse && "nav-link-inverse"} ${
      !inverse && pathname === path && "active"
    } ${inverse && pathname === path && "active-inverse"}`;

  return (
    <>
      <li>
        <Link href='/' className={navClass("/")}>
          Home
        </Link>
      </li>

      <li>
        <Link href='/projects' className={navClass("/projects")}>
          Projects
        </Link>
      </li>

      <li>
        <a
          href='/jake-ord-cv-2022.pdf'
          target='_blank'
          rel='noopener'
          className={navClass("/cv")}
        >
          CV
        </a>
      </li>

      <li className='flex gap-4'>
        <Social />
      </li>

      <li className='flex gap-4'>
        <strong>JP</strong>
        <button
          onClick={() => setEnglish(!english)}
          className={`${
            english ? "bg-sky-500" : "bg-red-500"
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
    </>
  );
};

const Header = () => {
  const { english } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='flex gap-4 justify-between items-center'>
      <Link
        href='/'
        className='text-3xl text-sky-500 font-bold hover:opacity-60 focus:opacity-60'
      >
        {english && "Jake Ord"}
        {!english && "オルドジェイク"}
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
            <div className='relative w-8 h-8'>
              <Image
                layout='fill'
                src='/images/dragon.svg'
                alt='Jake Ord logo'
              />
            </div>
            <button onClick={() => setIsMenuOpen(false)}>
              <HiX size={28} />
            </button>
          </div>

          <ul className='flex gap-4'>
            <MenuItems inverse />
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

      <main id='content'>{children}</main>

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
}
