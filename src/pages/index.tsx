import Hero from "@/components/hero";
import Layout from "@/components/layout";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function Index() {
  return (
    <Layout>
      <Hero />

      <section className='mt-12 md:mt-24 space-y-8'>
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

      <section className='mt-12 md:mt-24'>
        <div className='space-y-2'>
          <h2 className='text-2xl font-bold'>About Me</h2>
          <p>Here Be Dragons...</p>
        </div>
      </section>
    </Layout>
  );
}
