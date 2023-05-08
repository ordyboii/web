import { defineDocumentType, makeSource } from "contentlayer/source-files";

const project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: "case-studies/**/*.md",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    summary: {
      type: "string",
      required: true,
    },
    image: {
      type: "string",
      required: true,
    },
    client: {
      type: "string",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (project) => `/${project._raw.flattenedPath}`,
    },
    slug: {
      type: "string",
      resolve: (project) => project._raw.sourceFileName.replace(".md", ""),
    },
  },
}));

const post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "writing/**/*.md",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    summary: {
      type: "string",
      required: true,
    },
    image: {
      type: "string",
      required: true,
    },
    date: {
      type: "date",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/${post._raw.flattenedPath}`,
    },
    slug: {
      type: "string",
      resolve: (post) => post._raw.sourceFileName.replace(".md", ""),
    },
  },
}));

const side = defineDocumentType(() => ({
  name: "Side",
  filePathPattern: "sides/**/*.md",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    image: {
      type: "string",
      required: true,
    },
    link: {
      type: "string",
      required: true,
    },
  },
}));

const config = defineDocumentType(() => ({
  name: "Config",
  filePathPattern: "config.md",
  isSingleton: true,
  fields: {
    siteTitle: {
      type: "string",
      required: true,
    },
    siteDescription: {
      type: "string",
      required: true,
    },
    siteImage: {
      type: "string",
      required: true,
    },
    siteName: {
      type: "string",
      required: true,
    },
    github: {
      type: "string",
      required: true,
    },
    twitter: {
      type: "string",
      required: true,
    },
    twitterHandle: {
      type: "string",
      required: true,
    },
    linkedin: {
      type: "string",
      required: true,
    },
    email: {
      type: "string",
      required: true,
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [project, post, side, config],
});
