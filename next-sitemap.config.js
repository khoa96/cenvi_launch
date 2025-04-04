// next-sitemap.config.js

/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://cenvi-launch-five.vercel.app/', // 🔁 Đổi thành domain thật sau này
    generateRobotsTxt: true, // ✅ Tự tạo robots.txt
    sitemapSize: 7000, // optional: chia nhỏ sitemap nếu nhiều trang
    changefreq: 'weekly',
    priority: 0.7,
    trailingSlash: true,
  };
  