// Import thư viện path để xử lý đường dẫn tuyệt đối
const path = require("path");

const nextConfig = {
  // Cấu hình Webpack để xử lý file SVG bằng svgr
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/, // Kiểm tra file có đuôi .svg
      use: ["@svgr/webpack"], // Sử dụng loader svgr để import SVG như component React
    });

    return config; // Trả lại cấu hình Webpack sau khi thêm rule mới
  },

  // Cấu hình cho SCSS
  sassOptions: {
    // Cho phép import file SCSS từ thư mục 'src/styles' mà không cần dùng đường dẫn tương đối dài
    includePaths: [path.join(__dirname, "src/styles")],

    // Tự động import file SCSS (globals.scss) vào tất cả các file SCSS (trừ .module.scss)
    prependData: `@import "globals.scss";`,
    // Bạn có thể import nhiều file như:
    // prependData: `@import "variables.scss"; @import "mixins.scss";`
  },
};

// Xuất cấu hình ra ngoài để Next.js sử dụng
module.exports = nextConfig;
