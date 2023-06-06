import ReactMarkdown from "react-markdown";
import fs from "fs";
import matter from "gray-matter";
import { cache } from "react";

export function generateStaticParams() {
	return fs.readdirSync("content/case-studies").map((file) => {
		return { slug: file.replace(".md", "") };
	});
}

const getProject = cache((slug) => {
	return matter(fs.readFileSync(`content/case-studies/${slug}.md`, ""));
});

export function generateMetadata({ params }) {
	const { data } = getProject(params.slug);
	return {
		title: data.title,
		description: data.summary,
		openGraph: {
			title: data.title,
			description: data.summary,
			images: data.image,
		},
	};
}

export default function ProjectPage({ params }) {
	const { data, content } = getProject(params.slug);
	return (
		<section className="flow">
			<h1>{data.title}</h1>
			<p>{data.client}</p>
			<hr aria-hidden="true" />
			<img
				src={data.image}
				alt={`${data.title} hero image`}
				width="1600"
				height="900"
				className="content-image"
			/>
			<ReactMarkdown className="flow">{content}</ReactMarkdown>
		</section>
	);
}
