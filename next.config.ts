// next.config.ts

export default {
  reactStrictMode: true,  // 启用 React 严格模式
  experimental: {
    turbopack: false,  // 禁用 Turbopack
  },
  webpack: (config) => {
    // 如果需要，可以在这里做额外的 Webpack 配置
    return config;
  }
};
