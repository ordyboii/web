import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'

export default function SocialLinks({ inverse }) {
  return (
    <ul className='flex items-center gap-4'>
      <li>
        <a href='https://www.linkedin.com/in/jake-o-853626196' target='_blank'>
          <FaLinkedin
            className={`text-2xl hover:opacity-70 hover:scale-105 transition ${
              inverse && 'text-white'
            }`}
            aria-label='Link to Jake Ord Linkedin'
          />
        </a>
      </li>
      <li>
        <a href='https://www.instagram.com/jakeorddesign' target='_blank'>
          <FaInstagram
            className={`text-2xl hover:opacity-70 hover:scale-105 transition ${
              inverse && 'text-white'
            }`}
            aria-label='Link to Jake Ord Instagram'
          />
        </a>
      </li>
      <li>
        <a href='https://github.com/jorddy' target='_blank'>
          <FaGithub
            className={`text-2xl hover:opacity-70 hover:scale-105 transition ${
              inverse && 'text-white'
            }`}
            aria-label='Link to Jake Ord Github'
          />
        </a>
      </li>
    </ul>
  )
}
