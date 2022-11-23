import type { JSX, FunctionComponent } from "preact";

export const HeadingOne: FunctionComponent<
  JSX.HTMLAttributes<HTMLHeadingElement>
> = props => {
  return (
    <h1 class='w-fit text-3xl font-black !leading-snug sm:text-4xl' {...props}>
      {props.children}
    </h1>
  );
};

export const HeadingTwo: FunctionComponent<
  JSX.HTMLAttributes<HTMLHeadingElement>
> = props => {
  return (
    <h2 class='w-fit text-3xl font-bold' {...props}>
      {props.children}
    </h2>
  );
};

export const HeadingThree: FunctionComponent<
  JSX.HTMLAttributes<HTMLHeadingElement>
> = props => {
  return (
    <h3 class='w-fit text-xl font-black' {...props}>
      {props.children}
    </h3>
  );
};

type Weights = "bold" | "regular";

const TEXT_WEIGHTS: Record<Weights, string> = {
  regular: "font-normal",
  bold: "font-semibold"
};

export const Text: FunctionComponent<
  JSX.HTMLAttributes<HTMLParagraphElement> & { weight?: Weights }
> = ({ weight = "regular", ...props }) => {
  return (
    <p class={`text-lg leading-relaxed ${TEXT_WEIGHTS[weight]}`} {...props}>
      {props.children}
    </p>
  );
};

type Link = "default" | "inverse";

const LINKS: Record<Link, string> = {
  default: "hover:text-sky-900",
  inverse: "hover:text-gray-900"
};

export const Link: FunctionComponent<
  JSX.HTMLAttributes<HTMLElement> & {
    variant?: "icon";
    link?: "default" | "inverse";
  }
> = ({ link = "default", ...props }) => {
  return (
    <a class={`w-fit font-bold underline ${LINKS[link]}`} {...props}>
      {props.variant === "icon" ? (
        <div class='flex items-center gap-2 pt-2'>
          View project{" "}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            class='w-5 h-5'
          >
            <path
              fill-rule='evenodd'
              d='M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z'
              clip-rule='evenodd'
            />
          </svg>
        </div>
      ) : (
        props.children
      )}
    </a>
  );
};
