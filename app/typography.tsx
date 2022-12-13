import {
  AnchorHTMLAttributes,
  forwardRef,
  PropsWithChildren,
  type HTMLAttributes
} from "react";
import { HiOutlineExternalLink } from "react-icons/hi";
import Link, { LinkProps } from "next/link";

export const HeadingOne = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>((props, ref) => {
  return (
    <h1
      ref={ref}
      className={`w-fit text-3xl font-black !leading-snug sm:text-4xl ${props.className}`}
      {...props}
    >
      {props.children}
    </h1>
  );
});

export const HeadingTwo = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>((props, ref) => {
  return (
    <h2
      ref={ref}
      className={`w-fit text-3xl font-bold ${props.className}`}
      {...props}
    >
      {props.children}
    </h2>
  );
});

export const HeadingThree = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>((props, ref) => {
  return (
    <h3
      ref={ref}
      className={`w-fit text-xl font-black ${props.className}`}
      {...props}
    >
      {props.children}
    </h3>
  );
});

type Weights = "bold" | "regular";

const TEXT_WEIGHTS: Record<Weights, string> = {
  regular: "font-normal",
  bold: "font-semibold"
};

export const Text = ({
  weight = "regular",
  ...props
}: HTMLAttributes<HTMLParagraphElement> & { weight?: Weights }) => {
  return (
    <p
      className={`text-lg leading-relaxed ${TEXT_WEIGHTS[weight]} ${props.className}`}
      {...props}
    >
      {props.children}
    </p>
  );
};

type Link = "default" | "inverse";

const LINKS: Record<Link, string> = {
  default: "hover:text-sky-900 focus:text-sky-900",
  inverse: "hover:text-gray-900 focus:text-gray-900"
};

export const PageLink = ({
  link = "default",
  ...props
}: PropsWithChildren<LinkProps> & {
  variant?: "icon";
  link?: "default" | "inverse";
}) => {
  return (
    <Link className={`w-fit font-bold underline ${LINKS[link]}`} {...props}>
      {props.children}
    </Link>
  );
};

export const ExternalLink = ({
  link = "default",
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "icon";
  link?: "default" | "inverse";
}) => {
  return (
    <a
      className={`w-fit font-bold underline ${LINKS[link]}`}
      target='_blank'
      rel='noreferrer'
      {...props}
    >
      {props.variant === "icon" ? (
        <div className='flex items-center gap-2 pt-2'>
          View project <HiOutlineExternalLink className='w-5 h-5' />
        </div>
      ) : (
        props.children
      )}
    </a>
  );
};
