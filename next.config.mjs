/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable static export for deployment to object storage (e.g., Cloudflare R2)
  output: 'export',
  // Disable Next/Image optimization so no server is required
  images: { unoptimized: true },
};

export default nextConfig;
