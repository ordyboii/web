<?php

declare(strict_types=1);
require_once(__DIR__ . "/vendor/autoload.php");

$page = [
  "base" => "Jake Ord, designer, creator of interactive experiences, based in Newcastle, UK.",
  "description" => "Jake Ord, designer, creator of interactive experiences, based in Newcastle, UK.",
  "keywords" => "Designer, UX, UI, Interaction User Experience, Design, Newcastle, UK, Newcastle-Upon-Tyne, Interaction",
  "image" => "/assets/me-london.jpg",
  "name" => "https://jakeord.uk",
  "linkedin" => "https://www.linkedin.com/in/jorddy/",
  "github" => "https://github.com/ordyboii",
  "email" => "jake.ord345@gmail.com"
];

$url = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

function parseMarkdown(string $file): array
{
  $object = Spatie\YamlFrontMatter\YamlFrontMatter::parse(file_get_contents($file));
  return [
    "slug" => str_replace([".md", "content/", "writing/", "case-studies/"], "", $file),
    "data" => $object->matter(),
    "content" => Parsedown::instance()->text($object->body())
  ];
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://unpkg.com/htmx.org@1.9.5"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&family=Noto+Serif:wght@400;700&display=swap" rel="stylesheet">
  <title><?= isset($page['title']) ? "{$page['title']} {$page['base']}" :  $page['base'] ?></title>
  <meta name="description" content="<?= $page['description'] ?>">
  <meta name="keywords" content="<?= $page['keywords'] ?>">
  <meta name="og:title" content="<?= isset($page['title']) ? "{$page['title']} {$page['base']}" :  $page['base'] ?>">
  <meta name="og:description" content="<?= $page['description'] ?>">
  <meta name="og:url" content="<?= $page['name'] ?>">
  <meta name="og:image" content="<?= $page['image'] ?>">
  <meta name="og:type" content="website">
  <link rel="icon" href="/assets/icon.svg" type="image/x-icon">
  <style>
    /* GLOBAL */

    :root {
      --colour-primary: hsl(50, 20%, 77%);
      --colour-secondary: hsl(200, 42%, 14%);

      --font-sans: "Noto Sans", sans-serif;
      --font-serif: "Noto Serif", serif;
      --font-bold: 700;
      --font-regular: 400;
      --font-base: 1rem;
      --font-scale: 4vw;
      --font-l: clamp(1.25 * var(--font-base),
          var(--font-scale),
          1.5 * var(--font-base));
      --font-xl: clamp(1.5 * var(--font-base),
          var(--font-scale),
          1.9 * var(--font-base));
      --font-2xl: clamp(1.9 * var(--font-base),
          var(--font-scale),
          3 * var(--font-base));

      --radius: 0.8rem;
    }

    * {
      margin: 0;
      box-sizing: border-box;
    }

    html,
    body {
      min-height: 100%;
    }

    img,
    picture,
    video,
    canvas,
    svg {
      display: block;
      max-width: 100%;
    }

    input,
    button,
    textarea,
    select,
    a {
      font: inherit;
      color: inherit;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      --flow: 2.4rem;

      font-family: var(--font-sans);
      line-height: 1.6;
      letter-spacing: 0.03ch;
      background-color: var(--colour-secondary);
      color: var(--colour-primary);
      max-width: 1000px;
      padding: 2rem;
      margin-inline: auto;
      isolation: isolate;
      overflow-x: hidden;
    }

    @media (min-width: 50em) {
      body {
        padding-block: 5rem;
      }
    }

    h1,
    h2,
    h3 {
      font-family: var(--font-serif);
      font-weight: var(--font-bold);
      line-height: 1.2;
    }

    h1 {
      font-size: var(--font-2xl);
    }

    h2 {
      font-size: var(--font-xl);
    }

    h3 {
      font-size: var(--font-l);
    }

    p {
      max-width: var(--measure, 60ch);
    }

    p[data-width="wide"] {
      --measure: 100%;
    }

    hr {
      border: 0.5px solid var(--colour-primary);
    }

    ul[class] {
      list-style: none;
      padding: 0;
    }

    a {
      color: currentColor;
    }

    a:where(:hover, :focus, :active) {
      text-decoration: none;
    }

    img {
      max-width: 100%;
      object-fit: cover;
      height: auto;
    }

    details {
      cursor: pointer;
    }

    ::selection {
      background-color: var(--colour-primary);
      color: var(--colour-secondary);
    }

    /* COMPOSITION */

    .stack {
      display: flex;
      gap: var(--gutter, 1rem);
      align-items: var(--stack-vertical-alignment, center);
      justify-content: var(--stack-horizontal-alignment, flex-start);
      flex-wrap: var(--stack-wrap, wrap);
      flex-direction: var(--stack-direction, row);
    }

    .grid {
      display: grid;
      gap: var(--gutter, 3rem);
      grid-template-columns: var(--grid-columns, auto);
      grid-template-rows: var(--grid-rows, auto);
    }

    @media (min-width: 50em) {
      .grid[data-cols="even"] {
        grid-auto-flow: column;
        grid-auto-columns: 1fr;
      }
    }

    :where(.flow > :not(:first-child)) {
      margin-top: var(--flow, 1rem);
    }

    /* BLOCKS & EXCEPTIONS */

    @media (min-width: 50em) {
      .content {
        --grid-columns: auto 1fr;
      }
    }

    .skip-link {
      position: absolute;
      top: 1rem;
      left: 1rem;
      padding: 0.8rem 1.2rem;
      background-color: var(--colour-primary);
      color: var(--colour-secondary);
      opacity: 0;
    }

    .skip-link:focus {
      opacity: 1;
    }

    @media (min-width: 50em) {
      .social-links {
        --stack-direction: column;
      }
    }

    .nav a {
      padding: 0.4rem 0.8rem;
    }

    @media (min-width: 50em) {
      .nav a {
        padding: 0.8rem 1.2rem;
      }
    }

    .nav a:is(:hover, :focus),
    .nav a[aria-current="page"] {
      background-color: var(--colour-primary);
      color: var(--colour-secondary);
      border-radius: var(--radius);
      text-decoration: none;
    }

    .home>div {
      --stack-wrap: nowrap;
    }

    .avatar {
      flex-shrink: none;
      width: 4.5rem;
      height: 4.5rem;
      border-radius: 100vmax;
      object-fit: cover;
      border: 3px solid var(--colour-primary);
    }

    .writing {
      --flow: 2rem;
    }

    .writing a {
      --flow: 1rem;
    }

    @media (min-width: 50em) {
      .case-studies>div {
        --grid-columns: 1fr 1fr;
      }
    }

    .card {
      display: block;
      background-color: var(--colour-primary);
      color: var(--colour-secondary);
      box-shadow: 0 8px 16px hsl(0 0% 0% / 0.1);
      border-radius: var(--radius);
      overflow: hidden;
    }

    .card>div {
      padding: 1.2rem 2rem;
    }

    .card img {
      max-height: 14rem;
    }

    .card a {
      display: inline-block;
    }

    /* UTILITIES */

    .flex-shrink-none {
      flex-shrink: 0;
    }

    .content-image {
      max-height: 500px;
    }

    .animate-fade {
      animation: fade 300ms ease-in;
    }

    @keyframes fade {
      from {
        opacity: 0%;
        transform: translateY(10px);
      }

      to {
        opacity: 100%;
        transform: translateY(0);
      }
    }
  </style>
</head>

<body class="stack">
  <a class="skip-link" href="#content">
    Skip to content
  </a>
  <header class="header stack">
    <svg class="flex-shrink-none" fill="white" width="50" height="80" min-width="50">
      <title>
        Logo for Jake Ord, features the katakana ジェイク in a square
      </title>
      <use fill="currentColor" href="/assets/logo.svg#logo"></use>
    </svg>
    <nav class="stack" aria-label="Website navigation">
      <ul class="nav stack" hx-boost="true" hx-push-url="true">
        <li>
          <a href="/" aria-current="<?= $url == "/" ? "page" : "" ?>">Home</a>
        </li>
        <li>
          <a href="/case-studies" aria-current="<?= $url == "/case-studies" ? "page" : "" ?>">Case Studies</a>
        </li>
        <li>
          <a href="/writing" aria-current="<?= $url == "/writing" ? "page" : "" ?>">Writing</a>
        </li>
      </ul>
    </nav>
  </header>
  <main class="content grid">
    <nav aria-label="Social links">
      <ul class="social-links stack">
        <li>
          <a href="<?= $page['linkedin'] ?>" aria-label="Link to my LinkedIn page">
            <svg width="24" height="24">
              <use stroke="currentColor" href="/assets/linkedin.svg#linkedin"></use>
            </svg>
          </a>
        </li>
        <li>
          <a href="<?= $page['github'] ?>" aria-label="Link to my Github page">
            <svg width="24" height="24">
              <use stroke="currentColor" href="/assets/github.svg#github"></use>
            </svg>
          </a>
        </li>
        <li>
          <a href="mailto:<?= $page['email'] ?>" aria-label="Email me!">
            <svg width="24" height="24">
              <use stroke="currentColor" href="/assets/mail.svg#mail"></use>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
    <div id="content" class="animate-fade">
      <?php if ($url == "/") : ?>
        <section class="home flow">
          <h1>Hello I'm Jake Ord</h1>
          <p>
            I make the case for empowering users with intuitive interfaces through
            creating meaningful interactions. I also love to build dumb apps in PHP/Javascript. Right now, I am an Interaction Designer at <a href="https://www.gov.uk/government/organisations/hm-revenue-customs">HMRC.</a> But have worked previously for <a href="https://def.co.uk">DEF Software Ltd.</a>
          </p>
          <div class="stack">
            <img src="/assets/me-profile.jpg" alt="Profile shot of Jake Ord with a sunset in the background" width="50" height="50" class="avatar" />
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
            <summary>「お、ちょっと日本語を話せます」</summary>
            Oh, I speak a little Japanese.
          </details>
        </section>
      <?php endif; ?>

      <?php if (str_starts_with($url, "/case-studies")) :

        if ($url == "/case-studies") :

          $projects = array_diff(scandir("content/case-studies"), ['.', '..']);
          $projects = array_map(fn ($project) => parseMarkdown("content/case-studies/{$project}"), $projects);

          $sides = array_diff(scandir("content/sides"), ['.', '..']);
          $sides = array_map(fn ($side) => parseMarkdown("content/sides/{$side}"), $sides);

      ?>
          <section class="case-studies flow">
            <h1>Case Studies</h1>

            <div class="grid">
              <div class="flow">
                <h2>Client Work</h2>
                <ul class="flow">
                  <?php foreach ($projects as $project) : ?>
                    <li class="card">
                      <a href="/case-studies/<?= $project['slug'] ?>" class="card">
                        <img src="<?= $project['data']['image'] ?>" alt="<?= $project['data']['title'] ?> hero image" width="1600" height="900" />
                        <div class="flow">
                          <h3><?= $project['data']['title'] ?></h3>
                          <p>
                            <strong>Client:</strong> <?= $project['data']['client'] ?>
                          </p>
                        </div>
                      </a>
                    </li>
                  <?php endforeach; ?>
                </ul>
              </div>
              <div class="flow">
                <h2>On The Side</h2>
                <ul class="flow">
                  <?php foreach ($sides as $side) : ?>
                    <li class="card">
                      <img src="<?= $side['data']['image'] ?>" alt="<?= $side['data']['title'] ?> hero image" width=" 1600" height="900" />
                      <div class="flow">
                        <h3><?= $side['data']['title'] ?></h3>
                        <p><?= $side['content'] ?></p>
                        <a href="<?= $side['data']['link'] ?>">View Project</a>
                      </div>
                    </li>
                  <?php endforeach; ?>
                </ul>
              </div>
            </div>
          </section>
        <?php

        else :

          $segment = explode("/", $url);
          $project = parseMarkdown("content/case-studies/{$segment[2]}.md");

        ?>
          <section class="flow">
            <h1><?= $project['data']['title'] ?></h1>
            <p><?= $project['data']['client'] ?></p>
            <hr aria-hidden="true" />
            <img src="<?= $project['data']['image'] ?>" alt="<?= $project['data']['title'] ?> hero image" width="1600" height="900" class="content-image" />
            <article class="flow"><?= $project['content'] ?></article>
          </section>
      <?php
        endif;
      endif; ?>

      <?php if (str_starts_with($url, "/writing")) :

        if ($url == "/writing") :

          $posts = array_diff(scandir("content/writing"), ['.', '..']);
          $posts = array_map(fn ($post) => parseMarkdown("content/writing/{$post}"), $posts);

      ?>
          <section class="writing flow">
            <h1>Writing</h1>
            <ul class="flow">
              <?php foreach ($posts as $post) : ?>
                <li>
                  <a href="/writing/<?= $post['slug'] ?>" class="flow">
                    <h3><?= $post['data']['title'] ?></h3>
                    <p><?= date("F j, Y", strtotime($post['data']['date'])) ?></p>
                  </a>
                </li>
              <?php endforeach; ?>
            </ul>
          </section>
        <?php

        else :

          $segment = explode("/", $url);
          $post = parseMarkdown("content/writing/{$segment[2]}.md");

        ?>
          <section class="flow">
            <h1><?= $post['data']['title'] ?></h1>
            <p><?= date("F j, Y", strtotime($post['data']['date'])) ?></p>
            <hr aria-hidden="true" />
            <img src="<?= $post['data']['image'] ?>" alt="<?= $post['data']['title'] ?> hero image" width="1600" height="900" class="content-image" />
            <article class="flow"><?= $post['content'] ?></article>
          </section>
      <?php
        endif;
      endif; ?>
    </div>
    <?php if ($url == "/the-best-person-you-will-ever-meet") : ?>
       <section class="writing flow">
         <h1>The Best Person You Will Ever Meet (9.8 IMDB)</h1>
         <ul class="flow">
          <li>
             <h3>"Dating Jake is an absolute delight! They have an uncanny ability to make every mundane moment feel like an adventure. Whether it's their knack for accidentally locking us out of the car in the pouring rain or their unmatched talent for losing their keys at the most inconvenient times, you can be sure that boredom will never be a problem with them. If you enjoy constant surprises and a never-ending game of 'where did we leave that thing,' Jake is the dating experience you've been waiting for!"</h3>
             <p>The Tramps' Wife</p>
           </li>
           <li>
             <h3>"When it comes to handling challenges, Jake is in a league of their own. I once saw them attempt to assemble an IKEA bookshelf without reading the instructions, and let's just say it was a performance worthy of a comedy show. Not only did they manage to put it together inside out, but they also created a whole new design that should probably be patented. If you're seeking someone who can turn even the simplest task into a full-blown comedy routine, Jake is your go-to problem solver!"</h3>
             <p>A Drug Dealer From Blyth</p>
           </li>
           <li>
             <h3>"He still owes me 20 pounds"</h3>
             <p>His Mother</p>
           </li>
           <li>
             <h3>"He's alright"</h3>
             <p>His best friend</p>
           </li>
         </ul>
       </section>
    <?php endif; ?>
  </main>
</body>

</html>
