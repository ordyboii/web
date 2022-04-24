import styles from "styles/components/hero.module.css";
import Button from "components/button";

export default function Hero() {
  return (
    <section className={styles.section}>
      <div className='container animate-slide-up'>
        <div className='space-y-6'>
          <p>Hi I&apos;m Jake Ord</p>
          <h1>
            An aloud <span>thinker</span> & <span>creative</span> go-getter
          </h1>
          <p>
            A UX designer based in Newcastle-Upon-Tyne. I focus on creating
            experiences that matter, that are both accessible, approchable and
            easy to use. I love solving problems and creating products that
            deliver value. Oh, and I like dragons in case you didn&apos;t know!
          </p>
          <div className={styles.buttons}>
            <Button link secondary href='#work'>
              View my work
            </Button>
            <a rel='norefferer' target='_blank' href='/Jake_Ord_Design_CV.pdf'>
              Or view my CV
            </a>
          </div>
        </div>

        <div className={styles.dragonContainer}>
          <div className={styles.dragon} />
        </div>
      </div>
    </section>
  );
}
