import Animate from "./animate";
import DragonAnimation from "./dragon";

export default function RootLoading() {
  return (
    <Animate>
      <section className='min-h-screen grid place-content-center'>
        <DragonAnimation size={200} />
      </section>
    </Animate>
  );
}
