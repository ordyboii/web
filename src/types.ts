export interface Project {
  slug: string;
  data: ProjectData;
  content: string;
}

export interface ProjectData {
  title: string;
  summary: string;
  date: string;
  image: string;
  imageAlt: string;
  client: string;
  role: string;
}
