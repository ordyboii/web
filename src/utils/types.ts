export type Project = {
  slug: string;
  data: ProjectData;
  content: string;
};

export type ProjectData = {
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  client: string;
  tags: string[];
};
