export default async function HomePage() {
  return (
    <>
      <section className="py-8 space-y-4" aria-label="Introduction">
        <h2 className="text-xl font-bold">Hey, I am Jake 🐉</h2>
        <p>
          I am an interaction designer and accessibility advocate. I have been
          working at{" "}
          <a
            className="underline focus:bg-yellow-400 focus:text-gray-950"
            href="https://www.gov.uk/government/organisations/hm-revenue-customs"
          >
            HMRC
          </a>{" "}
          where I help build accessible, interactive services for the UK.
        </p>
      </section>
      <section className="py-8 space-y-4" aria-label="Work history">
        <h2 className="text-xl font-bold">Work</h2>
        <p>
          I have contributed and helped design a lot of services throughout my
          career. I have a deep knowledge of interaction and UX design, WCAG
          guidelines, accessibility and designing for the right users. Here is a
          summary of my work.
        </p>

        <h3 className="text-lg font-bold">
          HMRC
          <br />
          <span className="text-gray-400">Interaction designer</span>
        </h3>

        <p>
          From 2023, I joined HMRC, the UK Tax Authority. I have helped design
          and test a lot of internal and external services. Most work was done
          agile and prototyping was done using the{" "}
          <a
            className="underline focus:bg-yellow-400 focus:text-gray-950"
            href="https://prototype-kit.service.gov.uk/docs/"
          >
            GOV.UK Prototype Kit
          </a>{" "}
          in code, also reviewing services using tools like{" "}
          <a
            className="underline focus:bg-yellow-400 focus:text-gray-950"
            href="https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd"
          >
            Axe DevTools
          </a>{" "}
          against the{" "}
          <a
            className="underline focus:bg-yellow-400 focus:text-gray-950"
            href="https://www.w3.org/TR/WCAG22/"
          >
            WCAG
          </a>{" "}
          guidelines.
        </p>

        <h3 className="text-lg font-bold">
          DEF Software
          <br />
          <span className="text-gray-400">UX designer</span>
        </h3>

        <p>
          A software company who provide solutions to local authorities in the
          UK, for planning development. From 2020, I led the design of their
          main back-office product. During my process, I designed in visual
          tools like Adobe CC, but transitioned to C# prototyping. Using this
          with the development team to create richer, more accessible designs
          for user research.
        </p>

        <p>
          Throughout my 3 years at{" "}
          <a
            className="underline focus:bg-yellow-400 focus:text-gray-950"
            href="https://www.def.co.uk/"
          >
            DEF
          </a>
          , I designed marketing kits and templates for the consulting staff,
          led are-design of the website, led user testing, created working
          groups with customers and grew a UX culture within the wider team.
        </p>
      </section>
      <section className="py-8 space-y-4" aria-label="More from Jake Ord">
        <h2 className="text-2xl font-bold">More</h2>
        <p>
          You can see my work on{" "}
          <a
            className="underline focus:bg-yellow-400 focus:text-gray-950"
            href="https://github.com/ordyboii"
          >
            Github
          </a>{" "}
          or get in contact with me by{" "}
          <a
            className="underline focus:bg-yellow-400 focus:text-gray-950"
            href="mailto:jake.ord345@gmail.com"
          >
            email
          </a>
          .
        </p>
      </section>
    </>
  );
}
