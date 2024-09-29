import Image from "next/image";
import img from "./logo.svg";

export default function Home() {
  return (
    <>
      <a className="ordyboii-skip-link" href="#template-main">
        Skip to content
      </a>
      <header className="ordyboii-flex">
        <Image src={img} alt="" width={40} height={50} aria-hidden="true" />
        <h1 className="ordyboii-heading">
          Jake Ord
          <br />
          <span className="ordyboii-caption">Interaction Designer</span>
        </h1>
      </header>
      <main className="ordyboii-template__main" id="template-main">
        <section
          className="ordyboii-template__section ordyboii-flow"
          aria-label="Introduction"
        >
          <h2 className="ordyboii-heading">Hey, I am Jake 🐉</h2>
          <p className="ordyboii-body">
            I am an interaction designer and accessibility advocate. I have been
            working at{" "}
            <a
              className="ordyboii-link"
              href="https://www.gov.uk/government/organisations/hm-revenue-customs"
            >
              HMRC
            </a>{" "}
            where I help build accessible, interactive services for the UK.
          </p>
        </section>

        <section
          className="ordyboii-template__section ordyboii-flow"
          aria-label="Work history"
        >
          <h2 className="ordyboii-heading">Work</h2>
          <p className="ordyboii-body">
            I have contributed and helped design a lot of services throughout my
            career. I have a deep knowledge of interaction and UX design, WCAG
            guidelines, accessibility and designing for the right users. Here is
            a summary of my work.
          </p>

          <h3 className="ordyboii-heading">
            HMRC
            <br />
            <span className="ordyboii-caption">Interaction designer</span>
          </h3>

          <p className="ordyboii-body">
            From 2023, I joined HMRC, the UK Tax Authority. I have helped design
            and test a lot of internal and external services. Most work was done
            agile and prototyping was done using the{" "}
            <a
              className="ordyboii-link"
              href="https://prototype-kit.service.gov.uk/docs/"
            >
              GOV.UK Prototype Kit
            </a>{" "}
            in code, also reviewing services using tools like{" "}
            <a
              className="ordyboii-link"
              href="https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd"
            >
              Axe DevTools
            </a>{" "}
            against the{" "}
            <a className="ordyboii-link" href="https://www.w3.org/TR/WCAG22/">
              WCAG
            </a>{" "}
            guidelines
          </p>

          <h3 className="ordyboii-heading">
            DEF Software
            <br />
            <span className="ordyboii-caption">UX designer</span>
          </h3>

          <p className="ordyboii-body">
            A software company who provide solutions to local authorities in the
            UK, for planning development. From 2020, I led the design of their
            main back-office product. During my process, I designed in visual
            tools like Adobe CC, but transitioned to C# prototyping. Using this
            with the development team to create richer, more accessible designs
            for user research.
          </p>

          <p className="ordyboii-body">
            Throughout my 3 years at{" "}
            <a className="ordyboii-link" href="https://www.def.co.uk/">
              DEF
            </a>
            , I designed marketing kits and templates for the consulting staff,
            led are-design of the website, led user testing, created working
            groups with customers and grew a UX culture within the wider team.
          </p>
        </section>

        <section
          className="ordyboii-template__section ordyboii-flow"
          aria-label="More from Jake Ord"
        >
          <h2 className="ordyboii-heading">More</h2>
          <p className="ordyboii-body">
            You can see my work on
            <a className="ordyboii-link" href="https://github.com/ordyboii">
              Github
            </a>
            or get in contact with me by
            <a className="ordyboii-link" href="mailto:jake.ord345@gmail.com">
              email
            </a>
            .
          </p>
        </section>
      </main>
    </>
  );
}
