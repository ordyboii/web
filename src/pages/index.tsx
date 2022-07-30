import Link from "next/link";
import SEO from "@/components/seo";
import ProjectsGrid from "@/components/projects-grid";
import { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";
import { getMarkdown } from "@/utils/markdown";
import { Project } from "@/utils/types";
import { useAnnotation } from "@/utils/use-annotation";
import { Canvas, GroupProps, MeshProps, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

// const MacBook = (props: MeshProps) => {
//   const { scene } = useGLTF("/models/macbook.gltf");
//   return <primitive object={scene} {...props} />;
// };

// const Book = (props: MeshProps) => {
//   const { scene } = useGLTF("/models/book.gltf");
//   return <primitive object={scene} {...props} />;
// };

// const Dog = (props: MeshProps) => {
//   const { scene } = useGLTF("/models/dog.gltf");
//   return <primitive object={scene} {...props} />;
// };

// const Models = () => {
//   const group = useRef<GroupProps>();

//   useFrame(() => {
//     if (group.current) {
//       group.current.rotation.y -= 0.01;
//     }
//   });

//   return (
//     <group ref={group}>
//       <MacBook receiveShadow scale={1.4} position={[0, -2.3, 0]} />
//       <Book scale={4} position={[2, 0.5, 0]} rotation={[1, 0, 0]} />
//       <Dog castShadow scale={1.4} position={[-1.6, -1.5, 0]} />
//     </group>
//   );
// };

// const Scene = () => {
//   return (
//     <Canvas shadows>
//       <ambientLight />
//       <pointLight castShadow position={[10, 10, 10]} />
//       <OrbitControls />
//       <Models />
//     </Canvas>
//   );
// };

// const LazyScene = dynamic(() => Promise.resolve(Scene), {
//   loading: () => (
//     <div className='flex items-center gap-2'>
//       <div className='loader'></div>
//       <p>Loading scene...</p>
//     </div>
//   ),
//   ssr: false
// });

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
      <div className='space-y-6 max-w-xl'>
        <div className='space-y-2'>
          <p className='text-xl'>Hi I&apos;m Jake,</p>
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

      <Player autoplay loop src='/dragon.json' className='w-full'></Player>
      {/* <LazyScene /> */}
    </section>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const projects = getMarkdown("projects");
  return { props: { projects } };
};

type Props = {
  projects: Project[];
};

export default function Index({ projects }: Props) {
  return (
    <>
      <Hero />
      <SEO />

      <section className='mt-12 md:mt-24 space-y-8'>
        <div className='space-y-2'>
          <h2 className='text-2xl font-bold'>Projects</h2>
          <p>Some of the work I&apos;m working on / been involved in:</p>
        </div>

        <ProjectsGrid projects={projects} />

        <Link
          href='/projects'
          className='flex items-center gap-2 underline hover:text-blue-400'
        >
          Or see all my projects <HiArrowNarrowRight size={24} />
        </Link>
      </section>

      <section className='mt-12 md:mt-24'>
        <div className='space-y-6'>
          <h2 className='text-2xl font-bold'>A little about me</h2>

          <div className='relative'>
            <Image
              className='border-4 border-gray-900 object-cover h-64'
              src='/images/me2.jpg'
              alt='Jake Ord standing on some stairs in Edinburgh'
              layout='fill'
            />
          </div>

          <p className='font-semibold'>
            初めましてジェイクです。 (I&apos;m Jake, nice to meet you)
          </p>

          <p>
            I&apos;m a British born UX designer based in Newcastle, UK. I am
            passionate about creating experiences that matter and experimenting
            with new stuff. Oh, and I like dragons too - in case you hadn&apos;t
            noticed!
          </p>

          <p>
            I currently work for{" "}
            <a
              href='https://def.co.uk'
              target='_blank'
              rel='noreferrer'
              className='text-blue-400 underline font-semibold'
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

          <a
            href='/cv.pdf'
            className='flex items-center gap-2 underline hover:text-blue-400'
          >
            Read my CV <HiArrowNarrowRight size={24} />
          </a>
        </div>
      </section>
    </>
  );
}
