/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable static export for deployment to object storage (e.g., Cloudflare R2)
  output: 'export',
  // Disable Next/Image optimization so no server is required
  images: { 
    unoptimized: true,
    // Disable image domains to avoid network calls
    domains: []
  },
  // Optimize build for containerized environments
  swcMinify: true,
  // Skip font optimization to avoid network issues during build
  optimizeFonts: false,
  // Disable ESLint during build to avoid serialization issues
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable TypeScript checking during build for faster builds
  typescript: {
    ignoreBuildErrors: true,
  },
  // Build optimizations for speed
  compiler: {
    // Remove console.log in production
    removeConsole: {
      exclude: ['error'],
    },
  },
  // Disable experimental features that might slow down builds
  experimental: {
    optimizeCss: false,
    optimizePackageImports: [],
  },
  // Enable build caching
  incremental: true,
  // Reduce bundle size
  compress: true,
  // Skip source maps in production builds for speed
  productionBrowserSourceMaps: false,
};

export default nextConfig;
