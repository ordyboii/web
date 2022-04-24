import styles from "styles/components/button.module.css";
import type { PropsWithChildren } from "react";

interface Props {
  secondary: boolean;
  link: boolean;
  href: string;
  onClick?: () => {} | null;
}

export default function Button({
  link,
  secondary,
  children,
  onClick,
  href
}: PropsWithChildren<Props>) {
  return link ? (
    <a
      className={`${styles.a} ${secondary ? styles.secondary : ""}`}
      href={href}
    >
      {children}
    </a>
  ) : (
    <button
      className={`${styles.button} ${secondary ? styles.secondary : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
