import Layout from "@/components/layout";
import { useAnnotation } from "@/hooks/use-annotation";
import Image from "next/image";
import { useRef } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function Index() {
  const headingRef = useRef<HTMLElement | null>(null);
  const textRef = useRef<HTMLElement | null>(null);
  const textRef2 = useRef<HTMLElement | null>(null);
  const textRef3 = useRef<HTMLElement | null>(null);

  useAnnotation(headingRef, {
    type: "highlight",
    colour: "#60a5fa",
    iterations: 2
  });

  useAnnotation(textRef, {
    type: "underline",
    colour: "#60a5fa"
  });

  useAnnotation(textRef2, {
    type: "underline",
    colour: "#facc15",
    iterations: 4
  });

  useAnnotation(textRef3, {
    type: "underline",
    colour: "#facc15",
    iterations: 4
  });

  return (
    <Layout>
      <section className='my-12 flex flex-col items-center gap-12 md:flex-row md:my-24'>
        <div className='space-y-6'>
          <div className='space-y-2'>
            <h1 className='text-4xl font-bold'>Hi I&apos;m Jake,</h1>
            <h2 className='text-xl'>
              <strong ref={headingRef}>UX Designer</strong> at DEF Software Ltd
            </h2>
          </div>
          <p className='leading-7'>
            Based in <strong ref={textRef}>Newcastle-Upon-Tyne.</strong> I focus
            on creating experiences that are both accessible, approchable and
            easy to use. I specialise in <strong ref={textRef2}>product</strong>{" "}
            and <strong ref={textRef3}>branding</strong> design for the web
          </p>
          <div className='flex gap-8'>
            <a
              href='mailto:jake.ord345@gmail.com'
              className='bg-gray-600 px-4 py-3 rounded-sm hover:bg-blue-400'
            >
              Contact Me!
            </a>
            <a
              href='/cv'
              className='flex items-center gap-2 underline hover:text-blue-400'
            >
              Or read my cv <HiArrowNarrowRight size={24} />
            </a>
          </div>
        </div>

        <div className='border-4 border-gray-900 relative w-full h-64'>
          <Image
            src='/images/me.jpeg'
            alt='Photo of Jake Ord standing in potrait view'
            layout='fill'
            objectFit='cover'
          />
        </div>
      </section>

      <section className='space-y-8'>
        <div className='space-y-2'>
          <h2 className='text-2xl font-bold'>Projects</h2>
          <p>Some of the work I&apos;m working on / been involved in:</p>
        </div>

        <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
          {[...Array(3)].map((item, index) => (
            <article key={index} className='bg-gray-900 rounded-sm p-4'>
              {index}
            </article>
          ))}
        </div>
        <a
          href='/projects'
          className='flex items-center gap-2 underline hover:text-blue-400'
        >
          Or read all posts <HiArrowNarrowRight size={24} />
        </a>
      </section>
    </Layout>
  );
}
