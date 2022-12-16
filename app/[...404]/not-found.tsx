import Animate from "@app/animate";
import Dragon from "../dragon";
import { HeadingOne, PageLink } from "../typography";

export default function NotFound() {
  return (
    <Animate>
      <section className='flex flex-col-reverse items-center gap-12 py-16 sm:flex-row'>
        <Dragon size={400} />
        <div className='flex flex-col gap-6'>
          <HeadingOne>
            Error 404: It appears you are lost, I cannot seem to find that page
          </HeadingOne>
          <PageLink href='/'>Go to homepage</PageLink>
        </div>
      </section>
    </Animate>
  );
}
