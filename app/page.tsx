import Image from "next/image";

export const runtime = "edge";

export default function Home() {
  return (
    <>
      <section className='home flow'>
        <h1>Hello I&apos;m Jake Ord, UX Designer.</h1>
        <p>
          I make the case for empowering users with intuitive interfaces through
          creating meaningful interactions. Right now, I am a UX designer at{" "}
          <a href='https://def.co.uk'>DEF Software Ltd.</a>
        </p>
        <div className='stack'>
          <Image
            src='/me-profile.jpg'
            alt='Profile shot of Jake Ord with a sunset in the background'
            width={50}
            height={50}
            className='avatar flex-shrink-none'
          />
          <p>
            &quot;I take problems and turn them into simple, research-validated
            solutions that drive business growth and bring value to
            end-users&quot;.
          </p>
        </div>

        <p>
          I achieve this by challenging expectations, engaging in rigorous
          iteration, and thriving on working closely with stakeholders,
          co-workers, and end-users to ensure that the end product is both
          accessible and usable.
        </p>

        <h2>{new Date().getFullYear() - 2019} years doing design</h2>
        <p>
          I have worked on a variety of projects, including back-office
          enterprise SaaS products, mobile apps, and public-facing web
          platforms. In my earlier days, I also worked on brand and marketing
          design.
        </p>
        <p>
          My work involves blending interaction design with user journey
          mapping, data analysis, and code to craft engaging digital
          experiences.
        </p>

        <h2>Outside of work</h2>
        <p>
          You will find me working out, drawing, spending time with family or
          engaged in my Japanese studies.
        </p>

        <details>
          <summary>
            お、ちょっと日本語を話せます。読むくれてありがとう。
          </summary>
          Oh, did I mention I speak a little Japanese. Thank you for reading.
        </details>
      </section>
    </>
  );
}
