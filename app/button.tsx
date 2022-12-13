import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

export const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`max-w-fit rounded-sm bg-sky-900 px-4 py-3 text-white transition 
      hover:scale-95 focus:scale-95 ${props.className}`}
      {...props}
    >
      {props.children}
    </button>
  );
};

export const ButtonLink = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a
      className={`max-w-fit rounded-sm bg-sky-900 px-4 py-3 text-white transition 
      hover:scale-95 focus:scale-95 ${props.className}`}
      {...props}
    >
      {props.children}
    </a>
  );
};
