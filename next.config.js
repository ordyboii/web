/** @type {import('next').NextConfig} */
module.exports = {
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
};
