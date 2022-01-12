import { useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import Button from "components/Button";
import SocialLinks from "components/SocialLinks";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className='header'>
      <div className='container'>
        <Link href='/'>
          <a>
            <Image
              src='/images/logo.svg'
              alt='Jake Ord Logo'
              width='100%'
              height={30}
            />
          </a>
        </Link>
        <nav>
          <ul>
            <li>
              <SocialLinks inverse />
            </li>
            <li>
              <Button link secondary href='mailto:jake.ord345@gmail.com'>
                Get in touch
              </Button>
            </li>
          </ul>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <FaBars size={28} color='white' />
          </button>
        </nav>
      </div>

      {menuOpen && (
        <nav className='mobile'>
          <ul>
            <li>
              <SocialLinks />
            </li>
            <li>
              <Button link secondary href='mailto:jake.ord345@gmail.com'>
                Get in touch!
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
