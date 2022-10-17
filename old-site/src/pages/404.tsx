import SEO from "../old-site/src/components/seo";
import { HeadingOne, Link } from "../old-site/src/components/typography";
import NextLink from "next/link";
import dynamic from "next/dynamic";

const LazyPlayer = dynamic(
  () =>
    import("@lottiefiles/react-lottie-player").then(
      imports => imports.Player
    ) as any,
  {
    ssr: false,
    loading: () => <p className='justify-center'>Loading animation...</p>
  }
);

export default function Error() {
  return (
    <section className='flex flex-col-reverse items-center gap-12 py-16 sm:flex-row'>
      <SEO />
      {/* @ts-ignore */}
      <LazyPlayer autoplay loop src='/dragon.json' />
      <div className='flex flex-col gap-6'>
        <HeadingOne className='flex-1'>
          Error 404: It appears you are lost, I cannot seem to find that page
        </HeadingOne>
        <NextLink href={{ pathname: "/" }}>
          <Link>Go back to the homepage</Link>
        </NextLink>
      </div>
    </section>
  );
}
