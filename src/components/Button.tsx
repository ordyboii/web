interface Props {
  children: JSX.Element | string;
  secondary: boolean;
  link: boolean;
  href: string;
  onClick?: () => void;
}

export default function Button({
  children,
  secondary,
  onClick,
  link,
  href
}: Props) {
  if (link)
    return (
      <a className={`btn-link ${secondary && "secondary"}`} href={href}>
        {children}
      </a>
    );

  return (
    <button className={`btn ${secondary && "secondary"}`} onClick={onClick}>
      <slot />
    </button>
  );
}
