import Head from "next/head";
import { useRouter } from "next/router";

export default function SEO({
  title,
  description
}: {
  title?: string;
  description?: string;
}) {
  const router = useRouter();
  const titleMeta = title ? title : "Jake Ord - UX Designer";
  const canonical = "https://jakeord.netlify.app" + router.pathname;
  const descriptionMeta = description
    ? description
    : `Based in Newcastle-Upon-Tyne. I focus on creating experiences 
      that are both accessible, approchable and easy to use. I specialise 
      in product and branding design for the web`;

  return (
    <Head>
      <title>{titleMeta}</title>
      <meta name='description' content={descriptionMeta} />
      <meta
        name='keywords'
        content=' Based in Newcastle-Upon-Tyne. I focus
          on creating experiences that are both accessible, approchable and easy
          to use. I specialise in product and branding design for the web'
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
      <link rel='icon' href='/favicon.png' />
    </Head>
  );
}
