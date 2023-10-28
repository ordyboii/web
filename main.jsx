import express from "express"
import React from "react";
import { renderToString } from "react-dom/server"
import fs from "fs";
import matter from "gray-matter";
import marked from "marked";
import { format } from "date-fns";

const app = express();

app.use(express.static("public"))

app.locals = {
  base: "Jake Ord, designer, creator of interactive experiences, based in Newcastle, UK.",
  description: "Jake Ord, designer, creator of interactive experiences, based in Newcastle, UK.",
  keywords: "Designer, UX, UI, Interaction User Experience, Design, Newcastle, UK, Newcastle-Upon-Tyne, Interaction",
  image: "/assets/me-london.jpg",
  name: "https://jakeord.uk",
  linkedin: "https://www.linkedin.com/in/ordyboii",
  github: "https://github.com/ordyboii",
  email: "jake.ord345@gmail.com",
}

app.get("/", (request, response) => {
  return response.send(
    renderToString(<Home locals={app.locals} request={request} />)
  );
});

app.get("/the-best", (request, response) => {
  return response.send(
    renderToString(<TheBest locals={app.locals} request={request} />)
  )
});

app.get("/case-studies", (request, response) => {
  const projectFiles = fs.readdirSync("content/case-studies");
  const sideFiles = fs.readdirSync("content/sides");

  const projects = projectFiles.map(file => formatFile(file.replace(".md", ""), "case-studies"));
  const sides = sideFiles.map(file => formatFile(file.replace(".md", ""), "sides"));

  return response.send(
    renderToString(<CaseStudies locals={app.locals} request={request} projects={projects} sides={sides} />)
  )
});

app.get("/writing", (request, response) => {
  const files = fs.readdirSync("content/writing");
  const posts = files.map(file => formatFile(file.replace(".md", ""), "writing"));

  return response.send(
    renderToString(<Writing locals={app.locals} request={request} posts={posts} />)
  )
});

app.get("/case-studies/:slug", (request, response) => {
  const project = formatFile(request.params.slug, "case-studies");

  return response.send(
    renderToString(<Project locals={app.locals} request={request} project={project} />)
  )
});

app.get("/writing/:slug", (request, response) => {
  const post = formatFile(request.params.slug, "writing");

  return response.send(
    renderToString(<Post locals={app.locals} request={request} post={post} />)
  )
});

app.listen({ port: 4000 });

function formatFile(slug, dir) {
  const file = fs.readFileSync(`content/${dir}/${slug}.md`);
  const contents = matter(file);

  return {
    slug: slug.replace(".md", ""),
  	data: contents.data,
  	body: marked.parse(contents.content)
  }
}

function BaseLayout({ children, locals, request }) {
  const title = locals.title ? `${locals.title} ${locals.base}` : locals.base;

  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://unpkg.com/htmx.org@1.9.5"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&family=Noto+Serif:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/style.css" />
        <title>{title}</title>
        <meta name="description" content={locals.description} />
        <meta name="keywords" content={locals.keywords} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={locals.description} />
        <meta name="og:url" content={locals.name} />
        <meta name="og:image" content={locals.image} />
        <meta name="og:type" content="website" />
        <link rel="icon" href="/assets/icon.svg" type="image/x-icon" />
      </head>
    
      <body class="flow">
        <a class="skip-link" href="#content"> Skip to content </a>
        <header class="header stack">
          <svg
            class="flex-shrink-none"
            fill="white"
            width="50"
            height="80"
            min-width="50"
          >
            <title>
              Logo for Jake Ord, features the katakana ジェイク in a square
            </title>
            <use fill="currentColor" href="/logo.svg#logo"></use>
          </svg>
          <nav class="stack" aria-label="Website navigation">
            <ul class="nav stack" hx-boost="true" hx-push-url="true">
              <li>
                <a href="/" aria-current={request.path == "/" ? "page" : "" }>
                  Home
                </a>
              </li>
              <li>
                <a href="/case-studies" aria-current={request.path == "/case-studies" ? "page" : "" }>
                  Case Studies
                </a>
              </li>
              <li>
                <a href="/writing" aria-current={request.path == "/writing" ? "page" : "" }>
                  Writing
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main class="content grid">
          <nav aria-label="Social links">
            <ul class="social-links stack">
              <li>
                <a href={locals.linkedin} aria-label="Link to my LinkedIn page">
                  <svg width="24" height="24">
                    <use
                      stroke="currentColor"
                      href="/linkedin.svg#linkedin"
                    ></use>
                  </svg>
                </a>
              </li>
              <li>
                <a href={locals.github} aria-label="Link to my Github page">
                  <svg width="24" height="24">
                    <use
                      stroke="currentColor"
                      href="/github.svg#github"
                    ></use>
                  </svg>
                </a>
              </li>
              <li>
                <a href={`mailto:${locals.email}`} aria-label="Email me!">
                  <svg width="24" height="24">
                    <use stroke="currentColor" href="/mail.svg#mail"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
          <div id="content" class="animate-fade">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}

function Home({ locals, request }) {
  return  (
    <BaseLayout locals={locals} request={request}>
      <section class="home flow">
        <h1>Hello I'm Jake Ord</h1>
        <p>
          I make the case for empowering users with intuitive interfaces through
          creating meaningful interactions. I also love to build apps in Python &
          Javascript. Right now, I am an Interaction Designer at{" "}
          <a href="https://www.gov.uk/government/organisations/hm-revenue-customs">HMRC</a>.
          {" "}But have worked previously for{" "}
          <a href="https://def.co.uk">DEF Software Ltd.</a>
        </p>
        <div class="stack">
          <img
            src="/me-profile.jpg"
            alt="Profile shot of Jake Ord with a sunset in the background"
            width="50"
            height="50"
            class="avatar"
          />
          <p>
            "I take problems and turn them into simple, research-validated solutions
            that drive business growth and bring value to end-users".
          </p>
        </div>

        <p>
          I achieve this by challenging expectations, engaging in rigorous iteration,
          and thriving on working closely with stakeholders, co-workers, and end-users
          to ensure that the end product is both accessible and usable.
        </p>

        <details>
          <summary>「お、ちょっと日本語を話せます」</summary>
          Oh, I speak a little Japanese.
        </details>
      </section>
    </BaseLayout>
  )
}

function TheBest({ locals, request }) {
  return (
    <BaseLayout locals={locals} request={request}>
      <section class="writing flow">
        <h1>The Best Person You Will Ever Meet (9.8 IMDB)</h1>
        <ul class="flow">
          <li>
            <h4>"Dating Jake is an absolute delight! They have an uncanny ability to make every mundane moment feel like
              an adventure. Whether it's their knack for accidentally locking us out of the car in the pouring rain or
              their unmatched talent for losing their keys at the most inconvenient times, you can be sure that
              boredom will never be a problem with them. If you enjoy constant surprises and a never-ending game of
              'where did we leave that thing,' Jake is the dating experience you've been waiting for!"</h4>
            <p>The Tramps' Wife</p>
          </li>
          <li>
            <h4>"When it comes to handling challenges, Jake is in a league of their own. I once saw them attempt to
              assemble an IKEA bookshelf without reading the instructions, and let's just say it was a performance
              worthy of a comedy show. Not only did they manage to put it together inside out, but they also created a
              whole new design that should probably be patented. If you're seeking someone who can turn even the
              simplest task into a full-blown comedy routine, Jake is your go-to problem solver!"</h4>
            <p>A Drug Dealer From Blyth</p>
          </li>
          <li>
            <h4>"He still owes me 20 pounds"</h4>
            <p>His Mother</p>
          </li>
          <li>
            <h4>"He's alright"</h4>
            <p>His best friend</p>
          </li>
        </ul>
      </section>
    </BaseLayout>
  )
}

function CaseStudies({ locals, request, projects, sides }) {
  return (
    <BaseLayout locals={locals} request={request}>
      <section class="case-studies flow">
        <h1>Case Studies</h1>

        <div class="grid">
          <div class="flow">
            <h2>Client Work</h2>
            <ul class="flow">
              {projects.map(project => (
                <li class="card">
                  <a href={`/case-studies/${project.slug}`} class="card">
                    <img src={project.data.image} alt={`${project.data.title } hero image`} width="1600" height="900" />
                    <div class="flow">
                      <h3>{project.data.title}</h3>
                      <p><strong>Client:</strong> {project.data.client}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div class="flow">
            <h2>On The Side</h2>
            <ul class="flow">
              {sides.map(side => (
                <li class="card">
                  <img src={side.data.image} alt={`${side.data.title} hero image`} width="1600" height="900" />
                  <div class="flow">
                    <h3>{side.data.title}</h3>
                    <p dangerouslySetInnerHTML={{ __html: side.body }} />
                    <div class="flex">
                      <a href={side.data.github}>View code</a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </BaseLayout>
  )
}

function Writing({ locals, request, posts }) {
  return (
    <BaseLayout locals={locals} request={request}>
      <section class="writing flow">
        <h1>Writing</h1>
        <ul class="flow">
          {posts.map(post => (
            <li>
              <a href={`/writing/${post.slug}`} class="flow">
                <h3>{post.data.title}</h3>
                <p>{format(new Date(post.data.date), "MMMM MM, yyy")}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </BaseLayout>
  )
}

function Project({ locals, request, project }) {
  return (
    <BaseLayout locals={locals} request={request}>
      <section class="flow">
        <h1>{project.data.title}</h1>
        <p>{project.data.client}</p>
        <hr aria-hidden="true" />
        <img src={project.data.image} alt={`${project.data.title} hero image`} width="1600" height="900" class="content-image" />
        <article class="flow" dangerouslySetInnerHTML={{ __html: project.body }} />
      </section>
    </BaseLayout>
  )
}

function Post({ locals, request, post }) {
  return (
    <BaseLayout locals={locals} request={request}>
      <section class="flow">
        <h1>{post.data.title}</h1>
        <p>{format(new Date(post.data.date), "MMMM MM, yyy")}</p>
        <hr aria-hidden="true" />
        <img src={post.data.image} alt={`${post.data.title} hero image`} width="1600" height="900" class="content-image" />
        <article class="flow" dangerouslySetInnerHTML={{ __html: post.body }} />
      </section>
    </BaseLayout>
  )
}