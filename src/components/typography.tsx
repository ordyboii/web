import type { JSX, ParentComponent } from "solid-js";

export const HeadingOne: ParentComponent<
  JSX.HTMLAttributes<HTMLHeadingElement>
> = props => {
  return (
    <h1 class='w-fit text-3xl font-black !leading-snug sm:text-4xl' {...props}>
      {props.children}
    </h1>
  );
};

export const HeadingTwo: ParentComponent<
  JSX.HTMLAttributes<HTMLHeadingElement>
> = props => {
  return (
    <h2 class='w-fit text-3xl font-bold' {...props}>
      {props.children}
    </h2>
  );
};

export const HeadingThree: ParentComponent<
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

export const Text: ParentComponent<
  JSX.HTMLAttributes<HTMLParagraphElement> & { weight?: Weights }
> = ({ weight = "regular", ...props }) => {
  return (
    <p class={`text-lg leading-relaxed ${TEXT_WEIGHTS[weight]}`} {...props}>
      {props.children}
    </p>
  );
};

type LinkType = "default" | "inverse";

const LINK_TYPES: Record<LinkType, string> = {
  default: "hover:text-sky-900",
  inverse: "hover:text-gray-900"
};

export const Link: ParentComponent<
  JSX.HTMLAttributes<HTMLAnchorElement> & { variant?: "icon"; type?: LinkType }
> = ({ type = "default", ...props }) => {
  return (
    <a class={`w-fit font-bold underline ${LINK_TYPES[type]}`} {...props}>
      {props.variant === "icon" ? (
        <div class='flex items-center gap-2 pt-2'>
          View project
          {/* View project <HiExternalLink className='h-5 w-5' /> */}
        </div>
      ) : (
        props.children
      )}
    </a>
  );
};

export const NavLink: ParentComponent<
  JSX.HTMLAttributes<HTMLAnchorElement> & {
    inverse?: boolean;
    pathname: string;
    path: string;
  }
> = props => {
  const navClass = (path: string) =>
    `px-3 py-2 rounded-md transition ease-in cursor-pointer ${
      props.inverse ? "hover:bg-sky-500" : "hover:bg-sky-900 hover:text-white"
    } ${!props.inverse && props.pathname === path && "bg-sky-900 text-white"} ${
      props.inverse && props.pathname === path && "bg-sky-500 text-white"
    }`;

  return (
    <a class={navClass(props.path)} {...props}>
      {props.children}
    </a>
  );
};
