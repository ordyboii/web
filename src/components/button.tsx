import {
  forwardRef,
  type DetailedHTMLProps,
  type ButtonHTMLAttributes,
  type AnchorHTMLAttributes
} from "react";

export const Button = forwardRef<
  HTMLButtonElement,
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>((props, ref) => {
  return (
    <button
      ref={ref}
      className='max-w-fit rounded-sm bg-sky-500 px-4 py-3 text-white transition hover:scale-95'
      {...props}
    >
      {props.children}
    </button>
  );
});

export const ButtonLink = forwardRef<
  HTMLAnchorElement,
  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
>((props, ref) => {
  return (
    <a
      ref={ref}
      className='max-w-fit rounded-sm bg-sky-500 px-4 py-3 text-white transition hover:scale-95'
      {...props}
    >
      {props.children}
    </a>
  );
});
