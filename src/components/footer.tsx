import Social from "./social";

const Footer = () => {
  return (
    <footer
      className='mt-12 pt-4 border-t border-gray-500 flex flex-col gap-4
      justify-between md:mt-24 sm:flex-row sm:gap-0'
    >
      <h3>© Copyright Jake Ord, {new Date().getFullYear()}</h3>
      <div className='flex gap-4'>
        <Social />
      </div>
    </footer>
  );
};

export default Footer;
