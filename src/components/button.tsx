import type { FunctionComponent, JSX } from "preact";

export const Button: FunctionComponent<
  JSX.HTMLAttributes<HTMLButtonElement>
> = props => {
  return (
    <button
      class='max-w-fit rounded-sm bg-sky-900 px-4 py-3 text-white transition hover:scale-95'
      {...props}
    >
      {props.children}
    </button>
  );
};

export const ButtonLink: FunctionComponent<
  JSX.HTMLAttributes<HTMLAnchorElement>
> = props => {
  return (
    <a
      class='max-w-fit rounded-sm bg-sky-900 px-4 py-3 text-white transition hover:scale-95'
      {...props}
    >
      {props.children}
    </a>
  );
};
