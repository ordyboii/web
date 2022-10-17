import Image from "next/future/image";
import dynamic from "next/dynamic";
import SEO from "components/seo";
import ProjectsGrid from "components/projects-grid";
import { getProjects, getSides } from "utils/markdown";
import type { InferGetStaticPropsType } from "next";
import { type RefObject, Suspense } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslate } from "utils/translate";
import { annotate } from "rough-notation";
import {
  Link,
  HeadingOne,
  HeadingThree,
  HeadingTwo,
  Text
} from "components/typography";
import { ButtonLink } from "components/button";

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

const Dragon = dynamic(() => import("components/dragon"), {
  suspense: true
});

const Hero = () => {
  const { english } = useTranslate();

  const textRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLAnchorElement>(null);

  useAnnotation(textRef, "box");
  useAnnotation(contactRef, "box");

  return (
    <section className='flex min-h-[600px] flex-col items-center gap-4 py-12 md:flex-row md:gap-20'>
      <div className='max-w-xl space-y-6'>
        <HeadingOne>
          A <span ref={textRef}>UX Designer</span> based in Newcastle Upon Tyne.
        </HeadingOne>

        <Text className='text-lg'>
          Blending together product strategy, visual design, accessibility and
          web prototyping to deliver research-validated solutions. Creating
          experiences that drive user/business growth. Currently a UX Designer
          at{" "}
          <Link href='https://www.def.co.uk' target='_blank' rel='noreferrer'>
            DEF Software.
          </Link>{" "}
          But have previously worked for{" "}
          <Link href='https://rgb-ltd.co.uk/' target='_blank' rel='noreferrer'>
            R.G.B Media.
          </Link>
        </Text>

        <Text className='text-lg font-bold'>
          {english
            ? "I also speak a little Japanese"
            : "少し日本語も話せます。"}
        </Text>

        <div className='flex flex-col gap-8 sm:flex-row sm:items-center'>
          <ButtonLink href='#work'>View my work</ButtonLink>
          <Link ref={contactRef} href='mailto:jake.ord345@gmail.com'>
            Or contact me
          </Link>
        </div>
      </div>

      <Suspense fallback={"HERE BE DRAGONS..."}>
        <Dragon size={300} />
      </Suspense>
    </section>
  );
};

export const getStaticProps = async () => {
  return {
    props: { projects: getProjects(), sides: getSides() }
  };
};

type HomeProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Home({ projects, sides }: HomeProps) {
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

      <section id='work' className='space-y-8 py-12'>
        <HeadingTwo ref={workRef}>Select Work</HeadingTwo>
        <ProjectsGrid projects={projects} />
      </section>

      <section className='space-y-8 py-12'>
        <div className='space-y-6'>
          <HeadingTwo ref={sideRef}>Side work</HeadingTwo>
          <Text>
            Older projects and apps I have built to scratch my own itch.
          </Text>
        </div>

        <div className='space-y-4'>
          <div className='flex flex-col gap-4 sm:flex-row'>
            {sides.map(side => (
              <button
                key={side.data.title}
                onClick={() => setSideShowing(side.data.title)}
                className={`rounded border border-sky-500 px-4 py-2 ${
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
            <div className='flex flex-col border-2 border-gray-600 bg-white md:flex-row'>
              <Image
                src={filteredSide.data.image}
                alt={filteredSide.data.title}
                width={1000}
                height={1000}
                className='h-96 w-full object-cover transition sm:max-w-xl'
              />
              <div className='space-y-4 px-8 py-4'>
                <HeadingThree>{filteredSide.data.title}</HeadingThree>
                {filteredSide.data.link && (
                  <Link
                    href={filteredSide.data.link}
                    target='_blank'
                    rel='noreferrer'
                    variant='icon'
                  />
                )}
                <article
                  dangerouslySetInnerHTML={{ __html: filteredSide.content }}
                />
              </div>
            </div>
          )}
        </div>
      </section>

      <section className='space-y-8 py-12'>
        <HeadingTwo ref={aboutRef}>About Jake</HeadingTwo>
        <div className='flex flex-col gap-12 md:flex-row'>
          <Image
            src='/me.jpg'
            alt='Jake Ord standing on some stairs in Edinburgh'
            width={1000}
            height={1000}
            className='rounded border-2 border-gray-900 object-cover sm:w-2/4'
          />

          <div className='space-y-4'>
            <Text weight='bold'>
              {english ? "Nice to meet you" : "初めまして。"}
            </Text>

            <Text>
              I am a British-born designer based in Newcastle, UK. I am driven
              by design that impacts people in a positive way, I thrive on team
              collaboration and pushing boundaries. Always thinking of ways to
              improve products and services in my everyday life.
            </Text>

            <Text>
              I currently work for{" "}
              <Link href='https://def.co.uk' target='_blank' rel='noreferrer'>
                DEF Software
              </Link>{" "}
              by day but by night you will find me hacking on some side project
              (may involve code).
            </Text>

            <Text>
              But who works all the time, right? In my downtime I am either late
              night driving, studying Japanese, cooking up some crazy dishes or
              expanding my figure collection.
            </Text>

            <HeadingThree>What&apos;s up with the dragons?</HeadingThree>
            <Text>
              Dragons are my favourite mythological creatures. I have always
              been fascinated by them in movies, games and Asian culture. To me,
              they were the beginning of my journey into design and what led me
              towards art/graphics.
            </Text>

            <HeadingThree>
              I noticed Japanese phrases on your website - do you speak it?
            </HeadingThree>
            <Text>
              {english
                ? `Only a little bit. I'm studying a lot`
                : "ちょっとだけ。たくさん勉強しています。"}
            </Text>
          </div>
        </div>

        <div className='flex gap-4'>
          <Link href='/jakeord-cv.pdf' rel='noreferrer' target='_blank'>
            Read my CV
          </Link>
          <Link href='mailto:jake.ord345@gmail.com'>Contact me</Link>
        </div>
      </section>
    </>
  );
}
