import withRoutes from "nextjs-routes/config";

const defineConfig = withRoutes({ outDir: "./src/types" });

export default defineConfig({
  reactStrictMode: true,
  swcMinify: true
});
