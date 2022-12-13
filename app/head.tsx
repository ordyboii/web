import MetaTags from "./seo";

export default function Head() {
  return (
    <>
      <MetaTags />
      <title>Jake Ord - UX designer that loves the web</title>
      <meta
        name='description'
        content='UX designer and typescript nerd. Based in Newcastle-Upon-Tyne. I blend together product, usability, accessibility and technical design to deliver research-validated solutions that drive business growth.'
      />
    </>
  );
}
