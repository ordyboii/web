import type { MarkdownInstance } from "astro";
import { createMemo, createSignal } from "solid-js";
import { HeadingThree, Link } from "./typography";

export default function Sides({ sides }: { sides: MarkdownInstance<Side>[] }) {
  const [sideShowing, setSideShowing] = createSignal(
    sides?.[0]?.frontmatter.title
  );

  const filteredSide = createMemo(
    () => sides.filter(side => side.frontmatter.title === sideShowing())[0],
    [sideShowing, sides]
  );

  return (
    <div class='space-y-4'>
      <div class='flex flex-col gap-4 sm:flex-row'>
        {sides.map(side => (
          <button
            onClick={() => setSideShowing(side.frontmatter.title)}
            class={`rounded border border-sky-900 px-4 py-2 ${
              sideShowing() === side.frontmatter.title
                ? "bg-sky-900 text-white shadow-lg shadow-sky-900/50"
                : "hover:bg-sky-50"
            }`}
          >
            {side.frontmatter.title}
          </button>
        ))}
      </div>
      {sideShowing() && filteredSide() && (
        <div class='flex flex-col border-2 border-gray-600 bg-white md:flex-row'>
          <img
            src={filteredSide()!.frontmatter.image}
            alt={filteredSide()!.frontmatter.title}
            width={1000}
            height={1000}
            loading='lazy'
            decoding='async'
            class='h-96 w-full object-cover transition sm:max-w-xl'
          />
          <div class='space-y-4 px-8 py-4'>
            <HeadingThree>{filteredSide()!.frontmatter.title}</HeadingThree>
            {filteredSide()!.frontmatter.link && (
              <Link
                href={filteredSide()!.frontmatter.link!}
                target='_blank'
                rel='noreferrer'
                variant='icon'
              />
            )}
            <article
              innerHTML={filteredSide()!.compiledContent as unknown as string}
            />
          </div>
        </div>
      )}
    </div>
  );
}
