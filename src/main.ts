import express from "express";
import { configure } from "nunjucks";
import { format } from "date-fns";

const app = express();
const port = process.env.PORT || 3000;

const nunjucks = configure("src/views", {
  autoescape: true,
  watch: true,
  express: app
});

nunjucks.addFilter("format", (string, format) => {
  return format(new Date(string), format);
});

app.use(express.static("src/assets"));

app.locals.data = {
  base: "Designer, creator of interactive experiences, based in Newcastle, UK",
  description:
    "Designer, creator of interactive experiences, based in Newcastle, UK",
  keywords:
    "Designer, UX, UI, Interaction, User Experience, Design, Newcastle, UK, Newcastle-Upon-Tyne, Interaction",
  image: "/assets/me-london.jpg",
  linkedin: "https://www.linkedin.com/in/ordyboii",
  github: "https://github.com/ordyboii",
  email: "jake.ord345@gmail.com",
};

app.get("/", (req, res) => {
  res.render("home.njk");
});

app.get("/work", (req, res) => {
  res.render("work.njk");
});

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
});
