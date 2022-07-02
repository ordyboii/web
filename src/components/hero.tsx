import dynamic from "next/dynamic";
import { useAnnotation } from "@/hooks/use-annotation";
import { useRef } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Scene = dynamic(() => import("./scene"), {
  loading: () => (
    <div className='flex items-center gap-2'>
      <div className='loader'></div>
      <p>Loading scene...</p>
    </div>
  ),
  ssr: false
});

const Hero = () => {
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
    colour: "#facc15"
  });

  useAnnotation(textRef3, {
    type: "underline",
    colour: "#facc15"
  });

  return (
    <section className='mt-12 flex flex-col items-center gap-12 md:flex-row md:mt-24'>
      <div className='space-y-6 max-w-full lg:max-w-xs'>
        <div className='space-y-2'>
          <h1 className='text-4xl font-bold'>Hi I&apos;m Jake,</h1>
          <h2 className='text-xl'>
            <strong ref={headingRef}>UX Designer</strong> at DEF Software Ltd
          </h2>
        </div>
        <p className='leading-7'>
          Based in <strong ref={textRef}>Newcastle-Upon-Tyne.</strong> I focus
          on creating experiences that are both accessible, approachable and
          easy to use. I love to create experiences that makes people&apos;s
          lives easier and specialise in <strong ref={textRef2}>product</strong>{" "}
          and <strong ref={textRef3}>branding</strong> design for the web
        </p>
        <div className='flex flex-col gap-8 sm:flex-row'>
          <a
            href='mailto:jake.ord345@gmail.com'
            className='bg-gray-900 px-4 py-3 rounded-sm max-w-fit 
            transition hover:bg-blue-400'
          >
            Contact me!
          </a>
          <a
            href='/cv.pdf'
            className='flex items-center gap-2 underline hover:text-blue-400'
          >
            Or read my CV <HiArrowNarrowRight size={24} />
          </a>
        </div>
      </div>

      <Scene />
    </section>
  );
};

export default Hero;
