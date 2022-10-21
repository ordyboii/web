import Head from "next/head";
import { useRouter } from "next/router";

type Props = {
  title?: string;
  description?: string;
};

export default function SEO({ title, description }: Props) {
  const router = useRouter();
  const titleMeta = title
    ? title
    : "Jake Ord - Multidisciplinary designer that loves the web";
  const canonical = "https://jakeord.space" + router.asPath;
  const descriptionMeta = description
    ? description
    : "Multidisciplinary designer and typescript nerd. Based in Newcastle-Upon-Tyne. I blend together product, usability, accessibility and technical design to deliver research-validated solutions that drive business growth.";

  return (
    <Head>
      <title>{titleMeta}</title>
      <meta name='description' content={descriptionMeta} />
      <meta
        name='keywords'
        content='Jake Ord, jorddy, UX Designer, UX, UX/UI Newcastle-Upon-Tyne, Newcastle, design, coding, typescript, graphics, portfolio, web'
      />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='jakeord' />
      <meta name='twitter:image' content='/images/me-tenerife.jpg' />
      <meta name='og:site_name' content='Jake Ord' />
      <meta name='og:type' content='website' />
      <meta name='og:image' content='/images/me-tenerife.jpg' />
      <meta name='og:url' content={canonical} />
      <meta name='og:title' content={titleMeta} />
      <meta name='og:description' content={descriptionMeta} />
      <link rel='canonical' href={canonical} />
      <link rel='icon' href='/favicon.svg' />
    </Head>
  );
}
