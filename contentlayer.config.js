import { defineDocumentType, makeSource } from "contentlayer/source-files";

const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `projects/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    summary: { type: "string", required: true },
    image: { type: "string", required: true },
    date: { type: "date", required: true },
    client: { type: "string", required: true },
    protected: { type: "boolean", required: true }
  }
}));

const Side = defineDocumentType(() => ({
  name: "Side",
  filePathPattern: `sides/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    image: { type: "string", required: true },
    link: { type: "string" }
  }
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Project, Side]
});
