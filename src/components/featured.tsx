import styles from "styles/components/featured.module.css";
import Card from "components/card";
import SectionTag from "components/section-tag";

interface Props {
  data: any[];
  tag: string;
  title: string;
  subtitle: string;
}

export default function Featured({ data, tag, title, subtitle }: Props) {
  return (
    <section className={styles.section} id='work'>
      <div className='container space-y'>
        <div className={styles.grid}>
          <SectionTag>{tag}</SectionTag>
          <div className={`${styles.intro} space-y`}>
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>
        </div>

        <div className={`${styles.grid} ${styles.itemGrid}`}>
          {data.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
