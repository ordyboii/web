/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
  // interface Locals {}
  // interface Platform {}
  // interface Session {}
  // interface Stuff {}
}

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
