import os
from datetime import datetime
from typing import Dict
from flask import Flask, render_template, request
from frontmatter import Frontmatter
from markdown import markdown

app = Flask(__name__)

def get_metadata() -> Dict[str, str]:
	return {
	  "base": "Jake Ord, designer, creator of interactive experiences, based in Newcastle, UK.",
	  "description": "Jake Ord, designer, creator of interactive experiences, based in Newcastle, UK.",
	  "keywords": "Designer, UX, UI, Interaction User Experience, Design, Newcastle, UK, Newcastle-Upon-Tyne, Interaction",
	  "image": "/assets/me-london.jpg",
	  "name": "https://jakeord.uk",
	  "linkedin": "https://www.linkedin.com/in/jorddy/",
	  "github": "https://github.com/ordyboii",
	  "email": "jake.ord345@gmail.com"
	}


def format_file(slug: str, dir: str) -> Dict[str, str]:
	file = Frontmatter.read_file(f"content/{dir}/{slug}")

	if "date" in file.get("attributes", {}):
		return {
			"slug": slug.replace(".md", ""),
			"data": file["attributes"],
			"date": datetime.strptime(file["attributes"]["date"], "%Y-%m-%d").strftime("%B %d, %Y"),
			"body": markdown(file["body"])
		}
	else:
		return {
			"slug": slug.replace(".md", ""),
			"data": file["attributes"],
			"body": markdown(file["body"])
		}


@app.get("/")
def index():
	return render_template("index.html", request=request, page=get_metadata())


@app.get("/case-studies")
def case_studies() -> str:
	projects = [format_file(slug, "case-studies") for slug in os.listdir("content/case-studies")]
	sides = [format_file(slug, "sides") for slug in os.listdir("content/sides")]

	return render_template(
		"case-studies.html", 
		projects=projects, 
		sides=sides, 
		request=request, 
		page=get_metadata()
	)


@app.get("/writing")
def writing() -> str:
	posts = [format_file(slug, "writing") for slug in os.listdir("content/writing")]
	
	return render_template("writing.html", request=request, page=get_metadata(), posts=posts)


@app.get("/case-studies/<string:title>")
def case_study(title: str) -> str:
	file = Frontmatter.read_file(f"content/case-studies/{title}.md")
	project = {
		"data": file['attributes'],
		"body": markdown(file["body"])
	}

	return render_template("project.html", request=request, page=get_metadata(), project=project)


@app.get("/writing/<string:title>")
def post(title: str) -> str: 
	file = Frontmatter.read_file(f"content/writing/{title}.md")
	post = {
		"data": file['attributes'],
		"date": datetime.strptime(file["attributes"]["date"], "%Y-%m-%d").strftime("%B %d, %Y"),
		"body": markdown(file["body"])
	}

	return render_template("post.html", request=request, page=get_metadata(), post=post)

@app.get("/the-best-person-you-will-ever-meet")
def the_best() -> str:
	page = get_metadata()
	page["title"] = "The Best Person Ever"

	return render_template("the-best.html", request=request, page=page)


if __name__ == "__main__":
	app.run(debug=True)