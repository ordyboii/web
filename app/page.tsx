import { getProjects, getSides } from "@content/parse";
import dynamic from "next/dynamic";
import Image from "next/image";
import Animate from "./animate";
import AnnotatedText from "./annotated-text";
import { ButtonLink } from "./button";
import ProjectGrid from "./project-grid";
import Sides from "./sides";
import { SkipToTranslate, TranslateText } from "./translate";
import { ExternalLink, HeadingOne, HeadingThree, Text } from "./typography";

const LazyDragonAnimation = dynamic(() => import("./dragon"), {
  ssr: false,
  loading: () => <Text>Loading animation...</Text>
});

export default async function RootPage() {
  const projects = await getProjects();
  const sides = await getSides();

  return (
    <Animate>
      <section className='flex min-h-[600px] flex-col items-center gap-10 py-12 sm:gap-6 md:flex-row md:gap-20'>
        <div className='max-w-xl space-y-6'>
          <HeadingOne aria-label='Hi I am Jake, a product designer that loves the web'>
            Hi, I'm Jake. A <AnnotatedText type='box' content='UX designer ' />
            that loves the web.
          </HeadingOne>

          <Text className='text-lg'>
            I blend together product, usability, accessibility and technical
            design to deliver research-validated solutions that drive business
            growth. Nerdy about all things Typescript. Currently leading the UX
            design at{" "}
            <ExternalLink
              href='https://www.def.co.uk'
              target='_blank'
              rel='noreferrer'
            >
              DEF Software.
            </ExternalLink>{" "}
            But have previously worked for{" "}
            <ExternalLink
              href='https://rgb-ltd.co.uk/'
              target='_blank'
              rel='noreferrer'
            >
              R.G.B Media.
            </ExternalLink>
          </Text>

          <div className='flex flex-wrap items-center gap-2'>
            <Image
              src='/me-profile.jpg'
              alt='Profile shot of Jake Ord'
              width={1000}
              height={1200}
              className='h-16 w-16 rounded-full border-2 border-gray-900 object-cover'
            />
            <Text className='text-lg font-bold'>
              <TranslateText
                en='I also speak a little Japanese'
                jp='「初めまして、少し日本語も話せます」'
              />
            </Text>
            <SkipToTranslate />
          </div>

          <div className='flex flex-wrap items-center gap-6'>
            <ButtonLink href='#work'>View my work</ButtonLink>
            <ExternalLink href='mailto:jake.ord345@gmail.com'>
              Or say hello
            </ExternalLink>
          </div>
        </div>

        <LazyDragonAnimation size={300} />
      </section>

      <section id='work' className='space-y-8 py-12'>
        <AnnotatedText
          component='HeadingTwo'
          type='underline'
          content='Select work'
        />
        <ProjectGrid projects={projects} />
      </section>

      <section className='space-y-8 py-12'>
        <AnnotatedText
          component='HeadingTwo'
          type='underline'
          content='Side work'
        />
        <Sides sides={sides} />
      </section>

      <section className='space-y-8 py-12'>
        <AnnotatedText
          component='HeadingTwo'
          type='underline'
          content='About Jake'
        />
        <div className='flex flex-col gap-12 md:flex-row'>
          <div className='isolate grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-3 gap-4'>
            <Image
              src='/me-work.jpg'
              alt='Jake Ord sketching wireframes on a sheet of paper with a sharpie pen'
              width={1000}
              height={1000}
              className='sm:col-span-2 sm:row-span-2 object-cover shadow-xl'
            />
            <Image
              src='/me-london.jpg'
              alt='Jake Ord looking out towards Trafalgar Square in London'
              width={1000}
              height={1000}
              className='sm:col-span-1 sm:row-span-1 object-cover shadow-xl lg:-mt-44 lg:-ml-12'
            />
            <Image
              src='/me-tenerife.jpg'
              alt='Jake Ord posing for a framed shot near some palm trees in Tenerife'
              width={900}
              height={1200}
              className='sm:col-span-1 sm:row-span-1 object-cover shadow-xl lg:-mt-24 lg:-ml-6'
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
              <ExternalLink href='https://def.co.uk'>DEF Software</ExternalLink>{" "}
              by day but by night you will find me hacking on some side project
              (may involve code).
            </Text>

            <Text>
              But who works all the time, right? In my downtime I am either late
              night driving, studying Japanese, cooking up some crazy dishes or
              expanding my figure collection.
            </Text>

            <HeadingThree>What's up with the dragons?</HeadingThree>
            <Text>
              Dragons are my favourite mythological creatures. I have always
              been fascinated by them in movies, games and Asian culture. To me,
              they were the beginning of my journey into design and what led me
              towards art/graphics.
            </Text>

            <HeadingThree>
              What's up with the Japanese? Do you speak it?
            </HeadingThree>
            <Text>
              <TranslateText
                en='Only a little bit. I am studying a lot'
                jp='ちょっとだけ。たくさん勉強してるよ。'
              />
            </Text>
            <SkipToTranslate />

            <div className='flex gap-4'>
              <ExternalLink href='/jakeord-cv.pdf'>Read my CV</ExternalLink>
              <ExternalLink href='mailto:jake.ord345@gmail.com'>
                Contact me
              </ExternalLink>
            </div>
          </div>
        </div>
      </section>
    </Animate>
  );
}
