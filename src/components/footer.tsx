import Social from "./social";

export default function Footer() {
  return (
    <footer className='mt-12 pt-4 border-t border-gray-500 flex justify-between md:mt-24'>
      <h3>© Copyright Jake Ord, {new Date().getFullYear()}</h3>
      <div className='flex gap-4'>
        <Social />
      </div>
    </footer>
  );
}
