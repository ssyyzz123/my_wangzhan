const nextConfig = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  webpack(config: any) {
    return config;
  },
};
export default nextConfig;
