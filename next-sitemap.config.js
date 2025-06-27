// next-sitemap.config.js
module.exports = {
  siteUrl: "https://www.insightabroadservices.org/",
  generateRobotsTxt: true,
  exclude: ["/admin"], // 🔒 Exclude /admin from sitemap
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: "/admin", // 🔒 Disallow in robots.txt
      },
    ],
  },
};