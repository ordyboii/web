import Link from "next/link";
import fs from "fs";
import matter from "gray-matter";

export const metadata = {
	title: "Writing",
};

export default function WritingPage() {
	const posts = fs.readdirSync("content/writing").map((file) => {
		return {
			slug: file.replace(".md", ""),
			...matter(fs.readFileSync(`content/writing/${file}`, "utf-8")),
		};
	});
	return (
		<section className="writing flow">
			<h1>Writing</h1>
			<ul className="flow">
				{posts.map((post, index) => (
					<li key={index}>
						<Link href={`/writing/${post.slug}`} className="flow">
							<h3>{post.data.title}</h3>
							<p>
								{new Date(post.data.date).toLocaleDateString("en-gb", {
									dateStyle: "long",
								})}
							</p>
						</Link>
					</li>
				))}
			</ul>
		</section>
	);
}
