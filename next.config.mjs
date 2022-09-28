import { withContentlayer } from "next-contentlayer";

export default withContentlayer({
  reactStrictMode: true,
  images: {
    domains: ["s3.us-west-2.amazonaws.com"]
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en"
  },
  experimental: {
    newNextLinkBehavior: true
  }
});
