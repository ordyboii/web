import styles from "styles/components/contact-card.module.css";
import Button from "components/button";

export default function ContactCard() {
  return (
    <aside className={`${styles.aside} space-y`} aria-labelledby='Contact me'>
      <h4>Want to contact me!</h4>
      <p>
        Get in touch with me below and I&apos;ll aim to respond back as soon as
        I can
      </p>
      <Button secondary link href='mailto:jake.ord345@gmail.com'>
        Get in touch!
      </Button>
    </aside>
  );
}
