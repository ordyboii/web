import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { serveStatic } from '@hono/node-server/serve-static'
import { logger } from "hono/logger"
import { PropsWithChildren } from "hono/jsx";
import { format } from "date-fns";

const app = new Hono();

app.use(logger());
app.use(serveStatic({ root: "./assets/" }))

app.get("/", (c) => {
  return c.html(
    <Layout title="Home" path={c.req.path}>
      <h1 class="text-6xl text-green-400">hi</h1>
    </Layout>
  )
})

serve({
  fetch: app.fetch, 
  port: 3000
});

function Layout({ 
  title, 
  path, 
  children 
}: PropsWithChildren<{ title: string, path: string }>) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title} - Jake Ord</title>
        <meta name="description" content="Interaction designer based in Newcastle, UK" />
        <link rel="icon" href="/icon.svg" type="image/x-icon" />
        <link rel="stylesheet" href="/styles.css" />
        <script src="https://unpkg.com/htmx.org@1.9.10"></script>
      </head>
      <body class="ob-flow">
        <a class="ob-link ob-skip-link" href="#content">Skip to content</a>
        <header class="ob-header ob-stack">
          <svg
            class="ob-flex-shrink-none"
            fill="white"
            width="50"
            height="80"
            minWidth="50"
          >
            <title>
              Logo for Jake Ord, features the katakana ジェイク in a square
            </title>
            <use fill="currentColor" href="/logo.svg#logo"></use>
          </svg>
          <nav class="ob-stack" aria-label="Website navigation">
            <ul class="ob-list ob-nav ob-stack">
              <li>
                <a 
                  class="ob-link" 
                  href="/" 
                  aria-current={path == '/' ? "page" : '' }
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  class="ob-link" 
                  href="/case-studies" 
                  aria-current={path == '/case-studies' ? "page" : '' }
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a 
                  class="ob-link"
                  href="/writing" 
                  aria-current={path == '/writing' ? "page" : '' }
                >
                  Writing
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main class="ob-content ob-grid">
          <aside aria-label="Social links">
            <ul class="ob-list ob-social-links ob-stack">
              <li>
                <a class="ob-link" href="https://www.linkedin.com/in/ordyboii" aria-label="Link to my Linkedin page">
                  <svg width="24" height="24">
                    <use
                      stroke="currentColor"
                      href="/linkedin.svg#linkedin"
                    ></use>
                  </svg>
                </a>
              </li>
              <li>
                <a class="ob-link" href="https://github.com/ordyboii" aria-label="Link to my Github page">
                  <svg width="24" height="24">
                    <use
                      stroke="currentColor"
                      href="/github.svg#github"
                    ></use>
                  </svg>
                </a>
              </li>
              <li>
                <a class="ob-link" href="mailto:jake.ord345@gmail.com" aria-label="Email me!">
                  <svg width="24" height="24">
                    <use stroke="currentColor" href="/mail.svg#mail"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </aside>
          <div id="content" class="ob-animate-fade">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}