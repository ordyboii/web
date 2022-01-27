/// <reference types="@sveltejs/kit" />

interface Project {
  slug: string;
  data: ProjectData;
  content: string;
}

interface ProjectData {
  title: string;
  summary: string;
  date: string;
  image: string;
  imageAlt: string;
  client: string;
  role: string;
}
