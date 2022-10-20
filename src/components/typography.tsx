import { useRouter } from "next/router";
import {
  type AnchorHTMLAttributes,
  type DetailedHTMLProps,
  forwardRef,
  type HTMLAttributes
} from "react";
import { HiExternalLink } from "react-icons/hi";

export const HeadingOne = forwardRef<
  HTMLHeadingElement,
  DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
>((props, ref) => {
  return (
    <h1
      ref={ref}
      className='w-fit text-3xl font-black !leading-snug sm:text-4xl'
      {...props}
    >
      {props.children}
    </h1>
  );
});

export const HeadingTwo = forwardRef<
  HTMLHeadingElement,
  DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
>((props, ref) => {
  return (
    <h2 ref={ref} className='w-fit text-3xl font-bold' {...props}>
      {props.children}
    </h2>
  );
});

export const HeadingThree = forwardRef<
  HTMLHeadingElement,
  DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
>((props, ref) => {
  return (
    <h3 ref={ref} className='w-fit text-xl font-black' {...props}>
      {props.children}
    </h3>
  );
});

type Weights = "bold" | "regular";

const TEXT_WEIGHTS: Record<Weights, string> = {
  regular: "font-normal",
  bold: "font-semibold"
};

export const Text = forwardRef<
  HTMLParagraphElement,
  DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > & { weight?: Weights }
>(({ weight = "regular", ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={`text-lg leading-relaxed ${TEXT_WEIGHTS[weight]}`}
      {...props}
    >
      {props.children}
    </p>
  );
});

type LinkType = "default" | "inverse";

const LINK_TYPES: Record<LinkType, string> = {
  default: "hover:text-sky-900",
  inverse: "hover:text-gray-900"
};

export const Link = forwardRef<
  HTMLAnchorElement,
  DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > & { variant?: "icon"; type?: LinkType }
>(({ type = "default", ...props }, ref) => {
  return (
    <a
      ref={ref}
      className={`w-fit font-bold underline ${LINK_TYPES[type]}`}
      {...props}
    >
      {props.variant === "icon" ? (
        <div className='flex items-center gap-2 pt-2'>
          View project <HiExternalLink className='h-5 w-5' />
        </div>
      ) : (
        props.children
      )}
    </a>
  );
});

export const NavLink = forwardRef<
  HTMLAnchorElement,
  DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > & { inverse?: boolean; path: string }
>((props, ref) => {
  const { pathname } = useRouter();

  const navClass = (path: string) =>
    `px-3 py-2 rounded-md transition ease-in cursor-pointer ${
      props.inverse ? "hover:bg-sky-500" : "hover:bg-sky-900 hover:text-white"
    } ${
      !props.inverse && pathname === path && "font-bold bg-sky-900 text-white"
    } ${
      props.inverse && pathname === path && "font-bold bg-sky-500 text-white"
    }`;

  return (
    <a ref={ref} className={navClass(props.path)} {...props}>
      {props.children}
    </a>
  );
});
