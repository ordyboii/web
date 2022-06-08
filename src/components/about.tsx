import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function About() {
  return (
    <section className='mt-12 md:mt-24'>
      <div className='space-y-6'>
        <h2 className='text-2xl font-bold'>A little about me</h2>

        <div className='border-4 border-gray-900 relative w-3/4 h-64 sm:w-1/4'>
          <Image
            src='/images/me2.jpg'
            alt='Jake Ord standing on some stairs in Edinburgh'
            layout='fill'
            objectFit='cover'
          />
        </div>

        <p className='font-semibold'>
          初めましてジェイクです。 (I&apos;m Jake, nice to meet you)
        </p>

        <p>
          I&apos;m a British born UX designer based in Newcastle, UK. I am
          passionate about creating experiences that matter and experimenting
          with new stuff. Oh, and I like dragons too - in case you hadn&apos;t
          noticed!
        </p>

        <p>
          I currently work for{" "}
          <a
            href='https://def.co.uk'
            target='_blank'
            rel='noreferrer'
            className='text-blue-400 underline font-semibold'
          >
            DEF Software Ltd
          </a>{" "}
          by day but by night you&apos;ll find me tinkering with code or
          learning to read/write Japanese.
        </p>

        <p>
          But who works all the time, right? In my downtime I&apos;m either
          binging Netflix, collecting figures, trying to keep my Duolingo streak
          or cooking some crazy new dish I thought of.
        </p>

        <a
          href='/cv.pdf'
          className='flex items-center gap-2 underline hover:text-blue-400'
        >
          Read my CV <HiArrowNarrowRight size={24} />
        </a>
      </div>
    </section>
  );
}
