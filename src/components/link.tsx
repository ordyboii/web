import NextLink from "next/link";
import { PropsWithChildren } from "react";

export default function Link({
  href,
  active,
  children
}: PropsWithChildren<{ href: string; active?: boolean }>) {
  if (active) {
    return (
      <NextLink href={href}>
        <a className='font-bold border-b-2 border-blue-400 pb-1'>{children}</a>
      </NextLink>
    );
  }

  return (
    <NextLink href={href}>
      <a className='opacity-60 hover:opacity-100 focus:opacity-100'>
        {children}
      </a>
    </NextLink>
  );
}
