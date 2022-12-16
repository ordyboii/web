import Animate from "@app/animate";
import AnnotatedText from "@app/annotated-text";
import PostGrid from "@app/post-grid";
import { getPosts } from "@content/parse";

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <Animate>
      <section className='grid gap-6 py-16'>
        <AnnotatedText
          component='HeadingOne'
          type='underline'
          content='Thoughts'
        />
        <PostGrid posts={posts} />
      </section>
    </Animate>
  );
}
