import styles from "styles/components/header.module.css";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "components/button";
import SocialLinks from "components/social-links";
import { FaBars } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className='container'>
        <Link href='/'>
          <a>
            <Image
              src='/images/logo.svg'
              alt='Jake Ord Logo'
              width='100%'
              height='100%'
            />
          </a>
        </Link>
        <nav className={styles.mobileNav}>
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
            <FaBars size={24} color='white' />
          </button>
        </nav>
      </div>

      {menuOpen && (
        <motion.nav
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={styles.mobile}
        >
          <ul>
            <li>
              <SocialLinks inverse={false} />
            </li>
            <li>
              <Button link secondary href='mailto:jake.ord345@gmail.com'>
                Get in touch!
              </Button>
            </li>
          </ul>
        </motion.nav>
      )}
    </header>
  );
}
