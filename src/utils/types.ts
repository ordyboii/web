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

export interface Post {
  slug: string;
  data: PostData;
  content: string;
}

export interface PostData {
  title: string;
  summary: string;
  date: string;
  image: string;
  imageAlt: string;
}
