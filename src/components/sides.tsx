import type { MarkdownInstance } from "astro";
import { createMemo, createSignal } from "solid-js";
import { HeadingThree, Link, Text } from "./typography";

export default function Sides({ sides }: { sides: MarkdownInstance<Side>[] }) {
  let buttonRefs: HTMLButtonElement[] = [];

  const [sideShowing, setSideShowing] = createSignal(
    sides?.[0]?.frontmatter.title
  );

  const filteredSide = createMemo(
    () => sides.filter(side => side.frontmatter.title === sideShowing())[0],
    [sideShowing, sides]
  );

  return (
    <div class='space-y-4'>
      <Text>Projects and apps I've built in the past.</Text>
      <div
        role='tablist'
        tabIndex={0}
        aria-label='Side work'
        class='flex flex-col gap-4 sm:flex-row'
        onKeyDown={e => {
          // Accessibility moving the tab selection
          if (e.key === "ArrowLeft") {
            const currentSideIndex = sides.findIndex(
              side => side.frontmatter.title === sideShowing()
            );

            // Move the array selection left
            setSideShowing(sides[currentSideIndex - 1]?.frontmatter.title);
          }
          if (e.key === "ArrowRight") {
            const currentSideIndex = sides.findIndex(
              side => side.frontmatter.title === sideShowing()
            );

            // Move the array selection right
            setSideShowing(sides[currentSideIndex + 1]?.frontmatter.title);
          }

          // Find the correct button ref in the array and focus that tab button
          buttonRefs
            .find(ref => ref.id === filteredSide()?.frontmatter.image)
            ?.focus();
        }}
      >
        {sides.map(side => (
          <button
            ref={ref => buttonRefs.push(ref)}
            role='tab'
            id={side.frontmatter.image}
            tabIndex={sideShowing() === side.frontmatter.title ? 1 : -1}
            aria-selected={sideShowing() === side.frontmatter.title}
            aria-controls={side.frontmatter.title}
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
        <>
          <div
            role='tabpanel'
            id={filteredSide()!.frontmatter.title}
            tabIndex={0}
            aria-labelledby={filteredSide()!.frontmatter.image}
            aria-expanded={true}
            class='flex flex-col border-2 border-gray-600 bg-white md:flex-row'
          >
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
              <div
                innerHTML={filteredSide()!.compiledContent as unknown as string}
              />
            </div>
          </div>

          {/* Accessibility for showing other tabpanels as expanded "false" +2 as missing first and default to first */}
          {sides
            .filter(
              side =>
                filteredSide()?.frontmatter.title !== side.frontmatter.title
            )
            .map(side => (
              <div
                role='tabpanel'
                id={side.frontmatter.title}
                tabIndex={0}
                aria-labelledby={side.frontmatter.image}
                aria-expanded={false}
                class='sr-only'
              />
            ))}
        </>
      )}
    </div>
  );
}
