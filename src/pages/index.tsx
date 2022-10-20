import Image from "next/future/image";
import dynamic from "next/dynamic";
import SEO from "components/seo";
import { ProjectsGrid } from "components/grids";
import { getContent, type Side, type Project } from "utils/markdown";
import type { InferGetStaticPropsType } from "next";
import { Suspense } from "react";
import { useMemo, useRef, useState } from "react";
import { useTranslate } from "utils/translate";
import {
  Link,
  HeadingOne,
  HeadingThree,
  HeadingTwo,
  Text
} from "components/typography";
import { ButtonLink } from "components/button";
import { useAnnotation } from "utils/annotation";

const Dragon = dynamic(() => import("components/dragon"), {
  suspense: true
});

const Hero = () => {
  const { english } = useTranslate();
  const textRef = useRef<HTMLElement>(null);
  useAnnotation(textRef, "box");

  return (
    <section className='flex min-h-[600px] flex-col items-center gap-10 py-12 sm:gap-6 md:flex-row md:gap-20'>
      <div className='max-w-xl space-y-6'>
        <HeadingOne>
          Hi I&apos;m Jake, A <span ref={textRef}>multidisciplinary</span>{" "}
          designer that loves the web
        </HeadingOne>

        <Text className='text-lg'>
          I blend together product, usability, accessibility and technical
          design to deliver research-validated solutions that drive business
          growth. Nerdy about all things Typescript. Currently leading the UX
          design at{" "}
          <Link href='https://www.def.co.uk' target='_blank' rel='noreferrer'>
            DEF Software.
          </Link>{" "}
          But have previously worked for{" "}
          <Link href='https://rgb-ltd.co.uk/' target='_blank' rel='noreferrer'>
            R.G.B Media.
          </Link>
        </Text>

        <div className='flex flex-wrap items-center gap-2'>
          <Image
            src='/me-tenerife-profile.jpg'
            alt='Jake Ord standing on some stairs in Edinburgh'
            width={1000}
            height={1000}
            className='h-16 w-16 rounded-full border-2 border-gray-900 object-cover'
          />
          <Text className='text-lg font-bold'>
            {english
              ? "I also speak a little Japanese"
              : "「初めまして、少し日本語も話せます」"}
          </Text>
        </div>

        <div className='flex flex-wrap items-center gap-6'>
          <ButtonLink href='#work'>View my work</ButtonLink>
          <Link href='mailto:jake.ord345@gmail.com'>Or say hello</Link>
        </div>
      </div>

      <Suspense fallback={"HERE BE DRAGONS..."}>
        <Dragon size={300} />
      </Suspense>
    </section>
  );
};

export const getStaticProps = () => {
  const projects = getContent<Project["data"]>("projects");
  const sides = getContent<Side>("sides");

  return {
    props: { projects, sides }
  };
};

type HomeProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Home({ projects, sides }: HomeProps) {
  const { english } = useTranslate();
  const [sideShowing, setSideShowing] = useState(sides[0]?.data.title);

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
        <HeadingTwo ref={workRef}>Select work</HeadingTwo>
        <ProjectsGrid projects={projects} />
      </section>

      <section className='space-y-8 py-12'>
        <div className='space-y-6'>
          <HeadingTwo ref={sideRef}>Side work</HeadingTwo>
          <Text>Projects and apps I&apos;ve built in the past.</Text>
        </div>

        <div className='space-y-4'>
          <div className='flex flex-col gap-4 sm:flex-row'>
            {sides.map(side => (
              <button
                key={side.data.title}
                onClick={() => setSideShowing(side.data.title)}
                className={`rounded border border-sky-900 px-4 py-2 ${
                  sideShowing === side.data.title
                    ? "bg-sky-900 text-white shadow-lg shadow-sky-900/50"
                    : "hover:bg-sky-50"
                }`}
              >
                {side.data.title}
              </button>
            ))}
          </div>
          {sideShowing && filteredSide && (
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
          <div className='isolate grid grid-cols-2 grid-rows-3 gap-4'>
            <Image
              src='/me-work.jpg'
              alt='Jake Ord sketching on projects with a sharpie'
              width={1000}
              height={1000}
              className='col-span-2 row-span-2 h-full object-cover shadow-xl'
            />
            <Image
              src='/me-london.jpg'
              alt='Jake Ord posing for a framed shot in Tenerife'
              width={1000}
              height={1000}
              className='col-span-1 row-span-1 h-full object-cover shadow-xl lg:-mt-44 lg:-ml-12'
            />
            <Image
              src='/me-tenerife.jpg'
              alt='Jake Ord looking out towards Trafalgar Square, London'
              width={1000}
              height={1000}
              className='col-span-1 row-span-1 h-full object-cover shadow-xl lg:-mt-12 lg:-ml-6'
            />
          </div>

          <div className='space-y-4'>
            <HeadingThree>So...who are you?</HeadingThree>

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
              What&apos;s up with the Japanese? Do you speak it?
            </HeadingThree>
            <Text>
              {english
                ? `Only a little bit. I'm studying a lot`
                : "ちょっとだけ。たくさん勉強してるよ。"}
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
