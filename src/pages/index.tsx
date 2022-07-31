import Link from "next/link";
import SEO from "@/components/seo";
import ProjectsGrid from "@/components/projects-grid";
import { GetStaticProps } from "next";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";
import { getMarkdown } from "@/utils/markdown";
import { Project } from "@/utils/types";
import { useAnnotation } from "@/utils/use-annotation";
import { useRef } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { useLanguage } from "@/utils/language";

const Hero = () => {
  const { english } = useLanguage();
  // const textRef2 = useRef<HTMLElement | null>(null);
  // const textRef3 = useRef<HTMLElement | null>(null);

  // useAnnotation(textRef2, {
  //   type: "underline",
  //   colour: "#facc15"
  // });

  // useAnnotation(textRef3, {
  //   type: "underline",
  //   colour: "#facc15"
  // });

  return (
    <section className='flex flex-col items-center gap-4 py-12 animate-fade md:flex-row md:gap-20'>
      <div className='space-y-6 max-w-xl'>
        <p className='text-lg'>Hi I&apos;m Jake,</p>

        <h1>A UX Designer based in Newcastle Upon Tyne</h1>

        <p className='font-bold text-lg text-sky-500'>
          {!english && "日本語も少し話せます。"}
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
          <a href='mailto:jake.ord345@gmail.com' className='link'>
            Or contact me
          </a>
        </div>
      </div>

      <Player autoplay loop src='/dragon.json' className='w-full' />
    </section>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const projects = getMarkdown();
  return { props: { projects } };
};

type Props = {
  projects: Project[];
};

export default function Index({ projects }: Props) {
  const { english } = useLanguage();

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
        <div className='flex flex-col gap-12 sm:flex-row'>
          <div className='relative w-full h-96 border-2 rounded border-gray-900'>
            <Image
              className='object-cover'
              src='/images/me2.jpg'
              alt='Jake Ord standing on some stairs in Edinburgh'
              layout='fill'
            />
          </div>

          <div className='space-y-4'>
            <p className='text-sky-500 font-semibold'>
              {english && "Nice to meet you, I'm Jake"}
              {!english && "初めまして、ジェイクですよろしくお願いします。"}
            </p>

            <p>
              I&apos;m a British born UX designer based in Newcastle, UK. I am
              passionate about creating experiences that matter and
              experimenting with new stuff. Oh, and I like dragons too - in case
              you hadn&apos;t noticed!
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

            <h3>Ok...but why dragons?</h3>
            <p>
              {english && "Dragons"} {!english && "竜"} are my favourite
              creatures from mythology. I&apos;ve always been fascinated by them
            </p>
          </div>
        </div>

        <a href='/cv.pdf' className='block link'>
          Read my CV
        </a>
      </section>
    </>
  );
}
