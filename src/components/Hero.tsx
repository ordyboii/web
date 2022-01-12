import Button from "components/Button";
import Divider from "components/Divider";

export default function Hero() {
  return (
    <section className='hero'>
      <div className='container space-y animate-slide-up'>
        <p>Hi I&apos;m Jake Ord</p>
        <h1>
          An aloud <span>thinker</span> & <span>creative</span> go-getter
        </h1>
        <p>
          A UX designer based in Newcastle-Upon-Tyne. I focus on creating
          experiences that matter, that are both accessible and easy to use. I
          love solving problems and creating products that deliver value.
        </p>
        <Button link secondary href='#work'>
          View my work
        </Button>
      </div>

      <Divider />
    </section>
  );
}
