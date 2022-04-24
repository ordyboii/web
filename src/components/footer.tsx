import styles from "styles/components/footer.module.css";
import SocialLinks from "components/social-links";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div>
          <p>© Jake Ord, {new Date().getFullYear()}</p>
          <a rel='norefferer' target='_blank' href='/Jake_Ord_Design_CV.pdf'>
            CV
          </a>
        </div>
        <SocialLinks inverse />
      </div>
    </footer>
  );
}
