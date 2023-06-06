import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

export const metadata = {
	title: "Case Studies",
};

export default function CaseStudiesPage() {
	const projects = fs.readdirSync("content/case-studies").map((file) => {
		return {
			slug: file.replace(".md", ""),
			...matter(fs.readFileSync(`content/case-studies/${file}`, "utf-8")),
		};
	});
	const sides = fs.readdirSync("content/sides").map((file) => {
		return matter(fs.readFileSync(`content/sides/${file}`, "utf-8"));
	});

	return (
		<section className="case-studies flow">
			<h1>Case Studies</h1>

			<div className="grid">
				<div className="flow">
					<h2>Client Work</h2>
					<ul className="flow">
						{projects.map((project, index) => (
							<li key={index}>
								<Link href={`/case-studies/${project.slug}`} className="card">
									<img
										src={project.data.image}
										alt={`${project.data.title} hero image`}
										width="1600"
										height="900"
									/>
									<div className="flow">
										<h3>{project.data.title}</h3>
										<p>
											<strong>Client:</strong> {project.data.client}
										</p>
									</div>
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div className="flow">
					<h2>On The Side</h2>
					<ul className="flow">
						{sides.map((side, index) => (
							<li key={index} className="card">
								<img
									src={side.data.image}
									alt={`${side.data.title} hero image`}
									width="1600"
									height="900"
								/>
								<div className="flow">
									<h3>{side.data.title}</h3>
									<ReactMarkdown>{side.content}</ReactMarkdown>
									<a href={side.data.link}>View Project</a>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}
