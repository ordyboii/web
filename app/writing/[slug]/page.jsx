import fs from "fs";
import matter from "gray-matter";
import { cache } from "react";
import ReactMarkdown from "react-markdown";

export function generateStaticParams() {
	return fs.readdirSync("content/writing").map((file) => {
		return { slug: file.replace(".md", "") };
	});
}

const getPost = cache((slug) => {
	return matter(fs.readFileSync(`content/writing/${slug}.md`, "utf-8"));
});

export function generateMetadata({ params }) {
	const { data } = getPost(params.slug);
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

export default function PostPage({ params }) {
	const { data, content } = getPost(params.slug);
	return (
		<section class="flow">
			<h1>{data.title}</h1>
			<p>
				{new Date(data.date).toLocaleDateString("en-gb", {
					dateStyle: "long",
				})}
			</p>
			<hr aria-hidden="true" />
			<img
				src={data.image}
				alt={`${data.title} hero image`}
				width="1600"
				height="900"
				class="content-image"
			/>
			<ReactMarkdown class="flow">{content}</ReactMarkdown>
		</section>
	);
}
