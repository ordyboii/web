import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

interface Props {
  inverse?: boolean;
}

export default function SocialLinks({ inverse }: Props) {
  return (
    <ul className='social-links'>
      <li>
        <a
          aria-label='Link to my Linkedin'
          rel='noreferrer'
          href='https://www.linkedin.com/in/jake-o-853626196'
          target='_blank'
        >
          <FaLinkedin
            size={28}
            color={inverse ? "var(--clrWhite)" : "var(--clrBlue)"}
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
            size={28}
            color={inverse ? "var(--clrWhite)" : "var(--clrBlue)"}
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
            size={28}
            color={inverse ? "var(--clrWhite)" : "var(--clrBlue)"}
          />
        </a>
      </li>
    </ul>
  );
}
