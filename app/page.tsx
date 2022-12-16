import { getProjects, getSides } from "@content/parse";
import dynamic from "next/dynamic";
import Image from "next/image";
import Animate from "./animate";
import AnnotatedText from "./annotated-text";
import WorkGrid from "./work-grid";
import { ButtonLink } from "./button";
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
      <section className='flex flex-col items-center py-24 gap-6 md:flex-row md:gap-20'>
        <div className='max-w-xl space-y-8'>
          <HeadingOne aria-label='Hi I am Jake, a product designer that loves the web'>
            Hi, I'm Jake. A <AnnotatedText type='box' content='UX designer ' />
            that loves to create digital experiences.
          </HeadingOne>

          <Text>
            I blend together UX, accessibility and data to deliver
            research-validated solutions. Nerdy about all things data, code and
            data visualisation. Oh, and dragons! Currently leading the UX design
            at{" "}
            <ExternalLink
              href='https://www.def.co.uk'
              target='_blank'
              rel='noreferrer'
            >
              DEF Software Ltd.
            </ExternalLink>{" "}
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
                en='Nice to meet you. I also speak a little Japanese'
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
          content='Client work'
        />
        <WorkGrid projects={projects} />
      </section>

      <section className='space-y-8 py-12'>
        <AnnotatedText
          component='HeadingTwo'
          type='underline'
          content="Things I've done on the side"
        />
        <div className='space-y-4'>
          {sides.map((side, idx) => (
            <article
              key={idx}
              id={side.frontmatter.title}
              className='flex flex-col-reverse border-2 border-gray-900 bg-white md:flex-row'
            >
              <div className='space-y-4 px-8 py-4'>
                <HeadingThree>{side.frontmatter.title}</HeadingThree>
                {side.frontmatter.link && (
                  <ExternalLink href={side.frontmatter.link} variant='icon' />
                )}
                <Text>{side.frontmatter.description}</Text>
              </div>
              <Image
                src={side.frontmatter.image}
                alt={side.frontmatter.title}
                width={1000}
                height={1000}
                className='h-96 w-full object-cover transition sm:max-w-xl'
              />
            </article>
          ))}
        </div>
      </section>

      <section className='space-y-8 py-12'>
        <AnnotatedText
          component='HeadingTwo'
          type='underline'
          content='About Jake'
        />
        <div className='flex flex-col gap-12 md:flex-row'>
          <div className='space-y-4'>
            <HeadingThree>"So, who are you?"</HeadingThree>

            <Text>
              I am a British-born designer based in Newcastle, UK. As a child, I
              was fascinated by mythology and art, and how it made people feel.
              In 2011, I began learning illustration and sharing my art on
              DeviantArt, which introduced me to the world of digital
              experiences.
            </Text>

            <Text>
              Many years later, I am still passionate about creating digital
              experiences and have transitioned away from illustration to UX
              design in order to create experiences that positively impact
              people's lives.
            </Text>

            <HeadingThree>
              "That was a nice backstory. But where are you now?"
            </HeadingThree>

            <Text>
              Currently, I work for{" "}
              <ExternalLink href='https://def.co.uk'>
                DEF Software Ltd
              </ExternalLink>{" "}
              during the day, but at night I can often be found playing with
              code and data.
            </Text>

            <Text>
              "But who works all the time, right?" In my free time, I enjoy
              studying Japanese, going to the gym, cooking, and adding to my
              growing collection of figures.
            </Text>

            <HeadingThree>
              What's up with the dragons and Japanese on your site?
            </HeadingThree>
            <Text>
              Dragons are my favorite mythological creatures. I have always been
              fascinated by them in movies, games, and Asian culture. They were
              the first things I ever drew, and to this day, they remain a
              significant part of my journey into the world of art and graphics.
            </Text>

            <Text>
              As for the Japanese on my site,{" "}
              <TranslateText
                en='I can speak a little Japanese. I am still learning.'
                jp='ちょっと話します。勉強していますよ。'
              />
              <SkipToTranslate />
            </Text>

            <div className='flex gap-4'>
              <ExternalLink href='/jakeord-cv.pdf'>Read my CV</ExternalLink>
              <ExternalLink href='mailto:jake.ord345@gmail.com'>
                Contact me
              </ExternalLink>
            </div>
          </div>

          <div className='grid grid-cols-1 gap-6 sm:grid-rows-2'>
            <Image
              src='/me-work.jpg'
              alt='Jake Ord sketching wireframes on a sheet of paper with a sharpie pen'
              width={1000}
              height={1000}
              className='object-cover shadow-xl border-2 border-gray-900'
            />
            <Image
              src='/me-london.jpg'
              alt='Jake Ord looking out towards Trafalgar Square in London'
              width={1000}
              height={1000}
              className='object-cover shadow-xl border-2 border-gray-900'
            />
            <Image
              src='/me-tenerife.jpg'
              alt='Jake Ord posing for a framed shot near some palm trees in Tenerife'
              width={900}
              height={1200}
              className='object-cover shadow-xl border-2 border-gray-900'
            />
          </div>
        </div>
      </section>
    </Animate>
  );
}
