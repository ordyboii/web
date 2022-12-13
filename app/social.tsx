import { ExternalLink } from "./typography";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

type Props = {
  inverse?: boolean;
};

export default function Social({ inverse }: Props) {
  const socialClass = `h-6 w-6 ${
    inverse
      ? "hover:text-sky-500 focus:text-sky-500"
      : "hover:text-sky-900 focus:text-sky-900"
  }`;

  return (
    <>
      <ExternalLink
        href='https://twitter.com/ordyboii'
        target='_blank'
        rel='noreferrer'
        type={inverse ? "inverse" : "default"}
        aria-label='ExternalLink to my Twitter page'
      >
        <FaTwitter className={socialClass} />
      </ExternalLink>
      <ExternalLink
        href='https://www.Externallinkedin.com/in/ordyboii'
        target='_blank'
        rel='noreferrer'
        type={inverse ? "inverse" : "default"}
        aria-label='ExternalLink to my ExternalLinkedIn page'
      >
        <FaLinkedin className={socialClass} />
      </ExternalLink>
      <ExternalLink
        href='https://github.com/ordyboii'
        target='_blank'
        rel='noreferrer'
        type={inverse ? "inverse" : "default"}
        aria-label='ExternalLink to my Github page'
      >
        <FaGithub className={socialClass} />
      </ExternalLink>
    </>
  );
}
