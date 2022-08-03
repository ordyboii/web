import Link from "next/link";
import Image from "next/future/image";
import dynamic from "next/dynamic";
import SEO from "@/components/seo";
import ProjectsGrid from "@/components/projects-grid";
import { GetStaticPropsResult } from "next";
import { RefObject, useEffect, useRef } from "react";
import { getMarkdown } from "@/utils/markdown";
import { Project } from "@/utils/types";
import { useTranslate } from "@/utils/translate";
import { annotate } from "rough-notation";

function useAnnotation(ref: RefObject<any>) {
  useEffect(() => {
    if (ref.current) {
      const annotation = annotate(ref.current as HTMLElement, {
        type: "box",
        color: "#0ea5e9"
      });

      annotation.show();
      return () => annotation.remove();
    }
  }, [ref]);
}

const LazyPlayer = dynamic(
  () =>
    import("@lottiefiles/react-lottie-player").then(
      imports => imports.Player
    ) as any,
  {
    ssr: false
  }
);

function Hero() {
  const { english } = useTranslate();

  const textRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLAnchorElement>(null);

  useAnnotation(textRef);
  useAnnotation(contactRef);

  return (
    <section className='flex flex-col items-center gap-4 py-12 md:flex-row md:gap-20'>
      <div className='space-y-6 max-w-xl'>
        <p className='text-lg'>Hi I&apos;m Jake,</p>

        <h1>
          A <span ref={textRef}>UX Designer</span> based in Newcastle Upon Tyne.
        </h1>

        <p className='font-bold text-lg'>
          {!english && "少し日本語も話せます。"}
          {english && "I also speak a little Japanese"}
        </p>

        <p className='text-lg'>
          Creating experiences that are accessible, approachable and drive
          business growth whether through visual design or collaborating with
          users on research. I am currently a UX Designer at{" "}
          <a
            className='link'
            href='https://www.def.co.uk'
            target='_blank'
            rel='noreferrer'
          >
            DEF Software Ltd.
          </a>{" "}
          But have previously worked at{" "}
          <a
            className='link'
            href='https://rgb-ltd.co.uk/'
            target='_blank'
            rel='noreferrer'
          >
            R.G.B Media.
          </a>
        </p>

        <div className='flex flex-col gap-8 sm:flex-row sm:items-center'>
          <a href='#work' className='button'>
            View my work
          </a>
          <a
            ref={contactRef}
            href='mailto:jake.ord345@gmail.com'
            className='link'
          >
            Or contact me
          </a>
        </div>
      </div>

      {/* @ts-ignore */}
      <LazyPlayer autoplay loop src='/dragon.json' className='w-full' />
    </section>
  );
}

type Props = {
  projects: Project[];
};

export function getStaticProps(): GetStaticPropsResult<Props> {
  const projects = getMarkdown();
  return {
    props: { projects }
  };
}

export default function Index({ projects }: Props) {
  const { english } = useTranslate();

  return (
    <>
      <Hero />
      <SEO />

      <section id='work' className='py-12 space-y-8'>
        <div className='space-y-4'>
          <h2>Projects</h2>
          <p className='text-lg'>
            Some of the work I&apos;m working on and been involved in:
          </p>
        </div>

        <ProjectsGrid projects={projects} />

        <Link href='/projects' className='block link'>
          View all projects
        </Link>
      </section>

      <section className='py-12 space-y-8'>
        <h2>A little about me</h2>
        <div className='flex flex-col gap-12 md:flex-row'>
          <Image
            src='/images/me2.jpg'
            alt='Jake Ord standing on some stairs in Edinburgh'
            width={1000}
            height={1000}
            className='object-cover w-full border-2 rounded border-gray-900'
          />

          <div className='space-y-4'>
            <p className='font-semibold'>
              {english && "Nice to meet you, I'm Jake"}
              {!english && "初めまして、ジェイクですよろしくお願いします。"}
            </p>

            <p>
              I&apos;m a British-born UX designer based in Newcastle, UK. I am
              driven by approachable design, driving business growth and pushing
              expectations. Designing an experience so good - users never
              question it.
            </p>

            <p>
              I currently work for{" "}
              <a
                href='https://def.co.uk'
                target='_blank'
                rel='noreferrer'
                className='link'
              >
                DEF Software Ltd
              </a>{" "}
              by day but by night you&apos;ll find me tinkering with code or
              learning to read/write Japanese.
            </p>

            <p>
              But who works all the time, right? In my downtime I&apos;m either
              binging Netflix, collecting figures, trying to beat my Duolingo
              streak or cooking some crazy new dish I thought of.
            </p>

            <h3>Hold up...do you actually code?</h3>
            <p>
              Yes! I built this entire website from the ground up myself using{" "}
              <a
                href='https://nextjs.org/'
                target='_blank'
                rel='noreferrer'
                className='link'
              >
                Next.js
              </a>{" "}
              and Markdown. I learned to code because I wanted to build the
              stuff I was designing.
            </p>

            <h3>What&apos;s up with the dragons?</h3>
            <p>
              Dragons are my favourite mythological creatures. I&apos;ve always
              been fascinated by them in movies, games and Asian culture. To me,
              they were the beginning of my journey into design and what led me
              towards art/graphics.
            </p>

            <h3>I noticed Japanese on your website - do you speak it?</h3>
            <p>
              {english &&
                `Only a little bit. I'm nowhere near conversational but I can speak, read 
                and understand common phrases.`}
              {!english &&
                `ちょっとだけ。僕は会話にはほど遠いですが、一般的なフレーズを話しり、
                読んだ、理解したりすることはできます。`}
            </p>
          </div>
        </div>

        <div className='flex gap-4'>
          <a href='/cv.pdf' className='block link'>
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
