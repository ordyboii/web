import styles from "styles/components/section-tag.module.css";
import type { ReactNode } from "react";

export default function SectionTag({ children }: { children: ReactNode }) {
  return (
    <div className={styles.p}>
      <p>{children}</p>
    </div>
  );
}
