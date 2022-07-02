import { Fragment } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Social = () => {
  return (
    <Fragment>
      <a
        href='https://www.linkedin.com/in/jorddy'
        className='hover:opacity-60 focus:opacity-60'
        aria-label='Link to my LinkedIn page'
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href='https://www.instagram.com/jakeorddy'
        className='hover:opacity-60 focus:opacity-60'
        aria-label='Link to my Instagram page'
      >
        <FaInstagram size={24} />
      </a>
      <a
        href='https://github.com/jorddy'
        className='hover:opacity-60 focus:opacity-60'
        aria-label='Link to my Github page'
      >
        <FaGithub size={24} />
      </a>
    </Fragment>
  );
};

export default Social;
