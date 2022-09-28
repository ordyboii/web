import Image from "next/future/image";
import dynamic from "next/dynamic";
import SEO from "components/seo";
import ProjectsGrid from "components/projects-grid";
import { getProjects, getSides } from "utils/markdown";
import { InferGetStaticPropsType } from "next";
import { RefObject, useEffect, useMemo, useRef, useState } from "react";
import { useTranslate } from "utils/translate";
import { annotate } from "rough-notation";
import { HiExternalLink } from "react-icons/hi";

const useAnnotation = (
  ref: RefObject<HTMLElement>,
  type: "box" | "underline"
) => {
  useEffect(() => {
    if (ref.current) {
      const annotation = annotate(ref.current, {
        type: type,
        color: "#0ea5e9"
      });

      annotation.show();
      return () => annotation.remove();
    }
  }, [ref, type]);
};

const LazyPlayer = dynamic(
  () =>
    import("@lottiefiles/react-lottie-player").then(
      imports => imports.Player
    ) as any,
  {
    ssr: false,
    loading: () => <p className='justify-center'>Loading animation...</p>
  }
);

const Hero = () => {
  const { english } = useTranslate();

  const textRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLAnchorElement>(null);

  useAnnotation(textRef, "box");
  useAnnotation(contactRef, "box");

  return (
    <section className='flex flex-col items-center gap-4 py-12 min-h-[600px] md:flex-row md:gap-20'>
      <div className='space-y-6 max-w-xl'>
        <h1>
          A <span ref={textRef}>UX Designer</span> based in Newcastle Upon Tyne.
        </h1>

        <p className='text-lg'>
          Blending together product strategy, visual design, accessibility and
          web prototyping to deliver research-validated solutions. Creating
          experiences that drive user/business growth. Currently a UX Designer
          at{" "}
          <a
            className='link'
            href='https://www.def.co.uk'
            target='_blank'
            rel='noreferrer'
          >
            DEF Software.
          </a>{" "}
          But have previously worked for{" "}
          <a
            className='link'
            href='https://rgb-ltd.co.uk/'
            target='_blank'
            rel='noreferrer'
          >
            R.G.B Media.
          </a>
        </p>

        <p className='font-bold text-lg'>
          {!english && "少し日本語も話せます。"}
          {english && "I also speak a little Japanese"}
        </p>

        <div className='flex flex-col gap-8 sm:flex-row sm:items-center'>
          <a href='#work' className='button'>
            View my work
          </a>
          <a
            ref={contactRef}
            href='mailto:jake.ord345@gmail.com'
            className='link w-fit'
          >
            Or contact me
          </a>
        </div>
      </div>

      {/* @ts-ignore */}
      <LazyPlayer autoplay loop src='/dragon.json' className='w-full' />
    </section>
  );
};

export const getStaticProps = async () => {
  return {
    props: { projects: getProjects(), sides: getSides() }
  };
};

export default function Home({
  projects,
  sides
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { english } = useTranslate();
  const [sideShowing, setSideShowing] = useState(sides[0].data.title);

  const filteredSide = useMemo(
    () => sides.filter(side => side.data.title === sideShowing)[0],
    [sideShowing, sides]
  );

  const workRef = useRef<HTMLHeadingElement>(null);
  const aboutRef = useRef<HTMLHeadingElement>(null);
  const sideRef = useRef<HTMLHeadingElement>(null);

  useAnnotation(workRef, "underline");
  useAnnotation(aboutRef, "underline");
  useAnnotation(sideRef, "underline");

  return (
    <>
      <Hero />
      <SEO />

      <section id='work' className='py-12 space-y-8'>
        <h2 className='inline' ref={workRef}>
          Select Work
        </h2>

        <ProjectsGrid projects={projects} />
      </section>

      <section id='work' className='py-12 space-y-8'>
        <div className='space-y-6'>
          <h2 className='inline' ref={sideRef}>
            Side work
          </h2>
          <p>Older projects and apps I have built to scratch my own itch.</p>
        </div>

        <div className='space-y-4'>
          <div className='flex gap-4 flex-col sm:flex-row'>
            {sides.map(side => (
              <button
                key={side.data.title}
                onClick={() => setSideShowing(side.data.title)}
                className={`px-4 py-2 rounded border border-sky-500 ${
                  sideShowing === side.data.title
                    ? "bg-sky-500 text-white shadow-lg shadow-sky-500/50"
                    : "hover:bg-sky-200"
                }`}
              >
                {side.data.title}
              </button>
            ))}
          </div>
          {sideShowing && (
            <div className='flex flex-col md:flex-row bg-white border-2 border-gray-600'>
              <Image
                src={filteredSide.data.image}
                alt={filteredSide.data.title}
                width={1000}
                height={1000}
                className='object-cover w-full sm:max-w-xl h-96 transition'
              />
              <div className='px-8 py-4 space-y-4'>
                <h3>{filteredSide.data.title}</h3>
                {filteredSide.data.link && (
                  <a
                    href={filteredSide.data.link}
                    target='_blank'
                    rel='noreferrer'
                    className='link flex items-center gap-2'
                  >
                    View project <HiExternalLink className='w-5 h-5' />
                  </a>
                )}
                <article
                  dangerouslySetInnerHTML={{ __html: filteredSide.content }}
                />
              </div>
            </div>
          )}
        </div>
      </section>

      <section className='py-12 space-y-8'>
        <h2 className='inline' ref={aboutRef}>
          About Jake
        </h2>
        <div className='flex flex-col gap-12 md:flex-row'>
          <Image
            src='/me.jpg'
            alt='Jake Ord standing on some stairs in Edinburgh'
            width={1000}
            height={1000}
            className='object-cover sm:w-2/4 border-2 rounded border-gray-900'
          />

          <div className='space-y-4'>
            <p className='font-semibold'>
              {english && "Nice to meet you"}
              {!english && "初めまして。"}
            </p>

            <p>
              I am a British-born designer based in Newcastle, UK. I am driven
              by design that impacts people in a positive way, I thrive on team
              collaboration and pushing boundaries. Always thinking of ways to
              improve products and services in my everyday life.
            </p>

            <p>
              I currently work for{" "}
              <a
                href='https://def.co.uk'
                target='_blank'
                rel='noreferrer'
                className='link'
              >
                DEF Software
              </a>{" "}
              by day but by night you will find me hacking on some side project
              (may involve code).
            </p>

            <p>
              But who works all the time, right? In my downtime I am either late
              night driving, studying Japanese, cooking up some crazy dishes or
              expanding my figure collection.
            </p>

            <h3>What&apos;s up with the dragons?</h3>
            <p>
              Dragons are my favourite mythological creatures. I have always
              been fascinated by them in movies, games and Asian culture. To me,
              they were the beginning of my journey into design and what led me
              towards art/graphics.
            </p>

            <h3>
              I noticed Japanese phrases on your website - do you speak it?
            </h3>
            <p>
              {english && `Only a little bit. I'm studying a lot`}
              {!english && `ちょっとだけ。たくさん勉強しています。`}
            </p>
          </div>
        </div>

        <div className='flex gap-4'>
          <a
            href='/jakeord-cv.pdf'
            rel='noreferrer'
            target='_blank'
            className='block link'
          >
            Read my CV
          </a>
          <a href='mailto:jake.ord345@gmail.com' className='block link'>
            Contact me
          </a>
        </div>
      </section>
    </>
  );
}
