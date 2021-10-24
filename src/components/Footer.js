import SocialLinks from './SocialLinks'

export default function Footer() {
  return (
    <footer className='bg-blue-900 py-8'>
      <div className='container flex flex-col items-center gap-8 sm:flex-row sm:justify-between'>
        <div className='flex items-center'>
          <p className='text-white'>© Jake Ord, {new Date().getFullYear()}</p>
        </div>
        <SocialLinks inverse />
      </div>
    </footer>
  )
}
