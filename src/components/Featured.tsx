import SectionTag from "components/SectionTag";
import Card from "components/Card";

interface Props {
  data: any[];
  tag: string;
  title: string;
  subtitle: string;
}

export default function Featured({ data, tag, title, subtitle }: Props) {
  return (
    <section className='featured' id='work'>
      <div className='container space-y'>
        <div className='grid'>
          <SectionTag>{tag}</SectionTag>
          <div className='intro space-y'>
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>
        </div>

        <div className='grid item-grid'>
          {data.map((item, idx) => (
            <Card key={idx} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
