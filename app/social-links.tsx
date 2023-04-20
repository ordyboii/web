import { config } from "~/.contentlayer/generated";

export default function SocialLinks() {
  return (
    <nav aria-label='Social links'>
      <ul className='social-links stack'>
        <li>
          <a href={config.twitter} aria-label='Link to my Twitter page'>
            <svg width='24' height='24'>
              <use stroke='currentColor' href='/twitter.svg#twitter'></use>
            </svg>
          </a>
        </li>
        <li>
          <a href={config.linkedin} aria-label='Link to my LinkedIn page'>
            <svg width='24' height='24'>
              <use stroke='currentColor' href='/linkedin.svg#linkedin'></use>
            </svg>
          </a>
        </li>
        <li>
          <a href={config.github} aria-label='Link to my Github page'>
            <svg width='24' height='24'>
              <use stroke='currentColor' href='/github.svg#github'></use>
            </svg>
          </a>
        </li>
        <li>
          <a href={`mailto:${config.email}`} aria-label='Email me!'>
            <svg width='24' height='24'>
              <use stroke='currentColor' href='/mail.svg#mail'></use>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
}
