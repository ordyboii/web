/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en"
  },
  experimental: {
    newNextLinkBehavior: true,
    images: {
      allowFutureImage: true
    }
  }
};
