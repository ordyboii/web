import SEO from "@/components/seo";
import dynamic from "next/dynamic";
import Link from "next/link";

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

export default function ErrorPage() {
  return (
    <section className='flex flex-col items-center sm:flex-row'>
      <SEO />
      <div className=''>
        {/* @ts-ignore */}
        <LazyPlayer autoplay loop src='/dragon.json' className='w-full' />
      </div>
      <div className='flex flex-col gap-6'>
        <h1 className='flex-1'>
          Error 404: It appears you are lost, I cannot seem to find that page
        </h1>
        <Link href='/' className='link'>
          Go back to the homepage
        </Link>
      </div>
    </section>
  );
}
