import type { ParentComponent, JSX } from "solid-js";

export const Button: ParentComponent<
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

export const ButtonLink: ParentComponent<
  JSX.AnchorHTMLAttributes<HTMLAnchorElement>
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
