export default function Home() {
  return (
    <section className="home flow">
      <h1>Hello I'm Jake Ord, UX Designer.</h1>
      <p>
        I make the case for empowering users with intuitive interfaces through
        creating meaningful interactions. Right now, I am a UX designer at{" "}
        <a href="https://def.co.uk">DEF Software Ltd.</a>
      </p>
      <div className="stack">
        <img
          src="/me-profile.jpg"
          alt="Profile shot of Jake Ord with a sunset in the background"
          width="50"
          height="50"
          className="avatar"
        />
        <p>
          "I take problems and turn them into simple, research-validated
          solutions that drive business growth and bring value to end-users".
        </p>
      </div>

      <p>
        I achieve this by challenging expectations, engaging in rigorous
        iteration, and thriving on working closely with stakeholders,
        co-workers, and end-users to ensure that the end product is both
        accessible and usable.
      </p>

      <details>
        <summary>お、ちょっと日本語を話せます。読むくれてありがとう。</summary>
        Oh, did I mention I speak a little Japanese. Thank you for reading.
      </details>
    </section>
  );
}
