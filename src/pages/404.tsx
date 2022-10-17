import SEO from "components/seo";
import { HeadingOne, Link } from "components/typography";
import NextLink from "next/link";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Dragon = dynamic(() => import("components/dragon"), {
  suspense: true
});

export default function Error() {
  return (
    <section className='flex flex-col-reverse items-center gap-12 py-16 sm:flex-row'>
      <SEO />
      <Suspense fallback={<p>HERE BE DRAGONS...</p>}>
        <Dragon size={500} />
      </Suspense>
      <div className='flex flex-col gap-6'>
        <HeadingOne>
          Error 404: It appears you are lost, I cannot seem to find that page
        </HeadingOne>
        <NextLink href={{ pathname: "/" }}>
          <Link>Go to homepage</Link>
        </NextLink>
      </div>
    </section>
  );
}
