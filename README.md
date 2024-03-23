# Jake’s portfolio site

All projects I have ever created.
This project has commit signing enabled and the main branch locked.
You must create a pull request to contribute.

## Get started

This repo uses:

- Docker, for production
- Docker compose, for development
- Husky, pre-commit formatting with Prettier
- Typescript, Nunjucks and Node.js, language, templating and runtime

Use git to clone the repository to your machine.

```bash
git clone [git-repo-url]
```

Install Docker and Docker compose on your machine.

Then run the docker compose command.

```bash
docker compose up --build
```

This website is created in Node.js.

This command will allow you to run the Node.js environment in a Docker container, with automatic reload.

If you add new packages from npm, you will have to close the container and run `docker compose up --build` again.
