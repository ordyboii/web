import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import Button from './Button'
import SocialLinks from './SocialLinks'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header role='banner' className='relative bg-blue-900 text-white py-8'>
      <div className='container flex items-center justify-between'>
        <a href='/' className='hover:opacity-70 hover:scale-95 transition'>
          <img
            src='https://dl.airtable.com/.attachmentThumbnails/a07bb5df94edb43a811ea0c145acbaa5/1114de19.png'
            alt='Jake Ord logo'
          />
        </a>
        <nav>
          <ul className='hidden md:flex items-center gap-8'>
            <li>
              <SocialLinks inverse />
            </li>
            <li>
              <Button link secondary href='https://airtable.com/shrPxJaKvGIqSoD2A'>
                Get in touch
              </Button>
            </li>
          </ul>
          <button className='md:hidden' onClick={() => setMenuOpen(!menuOpen)}>
            <FaBars
              aria-label='navigation menu button'
              className='text-2xl text-white hover:focus:opacity-0.7 focus:hover:scale-105'
            />
          </button>
        </nav>
      </div>

      {menuOpen && (
        <nav className='absolute top-20 bg-white w-full p-8 shadow-md z-10'>
          <ul className='flex flex-col items-center text-black gap-6'>
            <li>
              <SocialLinks />
            </li>
            <li>
              <Button link secondary href='https://airtable.com/shrPxJaKvGIqSoD2A'>
                Get in touch!
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
