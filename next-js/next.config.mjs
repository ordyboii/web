/** @param {import('next').NextConfig} config */
const defineConfig = config => config;

export default defineConfig({
  reactStrictMode: true,
  swcMinify: true,
  experimental: { appDir: true }
});
