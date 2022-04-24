import styles from "styles/components/social-links.module.css";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

interface Props {
  inverse?: boolean;
}

export default function SocialLinks({ inverse }: Props) {
  return (
    <ul className={styles.ul}>
      <li>
        <a
          aria-label='Link to my Linkedin'
          rel='noreferrer'
          href='https://www.linkedin.com/in/jake-o-853626196'
          target='_blank'
        >
          <FaLinkedin
            size={24}
            color={inverse ? "var(--clrWhite)" : "var(--clrLightBlue)"}
          />
        </a>
      </li>
      <li>
        <a
          aria-label='Link to my Instagram'
          rel='noreferrer'
          href='https://www.instagram.com/jakeorddesign'
          target='_blank'
        >
          <FaInstagram
            size={24}
            color={inverse ? "var(--clrWhite)" : "var(--clrLightBlue)"}
          />
        </a>
      </li>
      <li>
        <a
          aria-label='Link to my Github'
          rel='noreferrer'
          href='https://github.com/jorddy'
          target='_blank'
        >
          <FaGithub
            size={24}
            color={inverse ? "var(--clrWhite)" : "var(--clrLightBlue)"}
          />
        </a>
      </li>
    </ul>
  );
}
