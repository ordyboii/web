const express = require("express");
const nunjucks = require("nunjucks");
const date = require("date-fns");
const fs = require("fs");
const matter = require("gray-matter");
const marked = require("marked");

const app = express();
const port = process.env.PORT || 4000;

nunjucks.configure("views", {
  autoescape: true,
  express: app
}).addFilter("format", (string, format) => {
  return date.format(new Date(string), format);
});

app.use(express.static("public"));
app.locals.data = {
  base: "Designer, creator of interactive experiences, based in Newcastle, UK",
  description: "Designer, creator of interactive experiences, based in Newcastle, UK",
  keywords: "Designer, UX, UI, Interaction, User Experience, Design, Newcastle, UK, Newcastle-Upon-Tyne, Interaction",
  image: "/assets/me-london.jpg",
  linkedin: "https://www.linkedin.com/in/ordyboii",
  github: "https://github.com/ordyboii",
  email: "jake.ord345@gmail.com",
}

app.get("/", (req, res) => {
  res.render("home.html", { req })
})

app.get("/the-best", (req, res) => {
  res.render("the-best.html", { req })
})

app.get("/case-studies", (req, res) => {
  const projectFiles = fs.readdirSync("content/case-studies");
  const sideFiles = fs.readdirSync("content/sides");

  const projects = projectFiles.map(file => formatFile(file.replace(".md", ""), "case-studies"));
  const sides = sideFiles.map(file => formatFile(file.replace(".md", ""), "sides"));

  return res.render("case-studies.html", { req, projects, sides })
});

app.get("/writing", (req, res) => {
  const files = fs.readdirSync("content/writing");
  const posts = files.map(file => formatFile(file.replace(".md", ""), "writing"));

  return res.render("writing.html", { req, posts })
});

app.get("/case-studies/:slug", (req, res) => {
  const project = formatFile(req.params.slug, "case-studies");
  return res.render("project.html", { req, project })
});

app.get("/writing/:slug", (req, res) => {
  const post = formatFile(req.params.slug, "writing");
  return res.render("post.html", { req, post })
});

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`)
})

function formatFile(slug, dir) {
  const file = fs.readFileSync(`content/${dir}/${slug}.md`);
  const contents = matter(file);

  return {
    slug: slug.replace(".md", ""),
  	data: contents.data,
  	body: marked.parse(contents.content)
  }
}