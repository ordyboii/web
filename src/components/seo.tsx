import Head from "next/head";
import { FC } from "react";
import { useRouter } from "next/router";

const SEO: FC<{ title?: string; description?: string }> = ({
  title,
  description
}) => {
  const router = useRouter();
  const titleMeta = title
    ? title
    : "Jake Ord - UX Designer based in Newcastle Upon Tyne";
  const canonical = "https://jakeord.space" + router.pathname;
  const descriptionMeta = description
    ? description
    : "UX & web designer, UX/UI, web designer, typescript nerd. Based in Newcastle-upon-tyne. I love to create experiences that make people's lives easier.";

  return (
    <Head>
      <title>{titleMeta}</title>
      <meta name='description' content={descriptionMeta} />
      <meta
        name='keywords'
        content='Jake Ord, jorddy, UX Designer, UX, UX/UI Newcastle-Upon-Tyne, Newcastle, cesign, coding, Typescript, graphics, portfolio, web'
      />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='jakeord' />
      <meta name='twitter:image' content='/images/me.jpeg' />
      <meta name='og:site_name' content='Jake Ord' />
      <meta name='og:type' content='website' />
      <meta name='og:image' content='/images/me.jpeg' />
      <meta name='og:url' content={canonical} />
      <meta name='og:title' content={titleMeta} />
      <meta name='og:description' content={descriptionMeta} />
      <link rel='canonical' href={canonical} />
      <link rel='icon' href='/images/dragon.svg' />
    </Head>
  );
};

export default SEO;
