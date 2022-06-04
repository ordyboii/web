import { Fragment } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Social() {
  return (
    <Fragment>
      <a href='/awd' className='hover:opacity-60 focus:opacity-60'>
        <FaLinkedin size={24} />
      </a>
      <a href='/awd' className='hover:opacity-60 focus:opacity-60'>
        <FaGithub size={24} />
      </a>
    </Fragment>
  );
}
