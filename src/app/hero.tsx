"use client";

import { ButtonLink } from "app/button";
import { HeadingOne, Text } from "./typography";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useRef } from "react";
import { useAnnotation } from "utils/annotation";
import { useTranslate } from "utils/translate";
import meProfile from "../../public/me-tenerife-profile.jpg";

const Dragon = dynamic(() => import("./dragon"), {
  suspense: true
});

export default function Hero() {
  const { english } = useTranslate();
  const textRef = useRef<HTMLElement>(null);
  useAnnotation(textRef, "box");

  return (
    <section className='flex min-h-[600px] flex-col items-center gap-10 py-12 sm:gap-6 md:flex-row md:gap-20'>
      <div className='max-w-xl space-y-6'>
        <HeadingOne>
          Hi I&apos;m Jake, a <span ref={textRef}>multidisciplinary</span>{" "}
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
            src={meProfile}
            alt='Jake Ord standing on some stairs in Edinburgh'
            placeholder='blur'
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
}
