import NextLink from "next/link";
import { FC, PropsWithChildren } from "react";

const Link: FC<PropsWithChildren<{ href: string; active?: boolean }>> = ({
  href,
  active,
  children
}) => {
  if (active) {
    return (
      <NextLink
        href={href}
        className='font-bold border-b-2 border-blue-400 pb-1'
      >
        {children}
      </NextLink>
    );
  }

  return (
    <NextLink
      href={href}
      className='opacity-60 hover:opacity-100 focus:opacity-100'
    >
      {children}
    </NextLink>
  );
};

export default Link;
