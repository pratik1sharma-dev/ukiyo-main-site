// JavaScript module configuration for Next.js
const nextConfig = {
  // Explicitly expose environment variables to the client
  env: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    RESEND_FROM_EMAIL: process.env.RESEND_FROM_EMAIL,
    RESEND_TO_EMAIL: process.env.RESEND_TO_EMAIL,
  },
  // Enable React Strict Mode for better development experience
  reactStrictMode: true,
  
  // Configure page extensions to prioritize .tsx and .jsx files
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  
  // Enable SWC minification for faster builds
  swcMinify: true,
  
  // Configure images optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: [], // Add external domains if needed
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Enable experimental features for better performance
  experimental: {
    // Enable optimized package imports
    optimizePackageImports: ['react-icons', 'framer-motion', 'lucide-react'],
    // Enable server components
    serverComponentsExternalPackages: ['resend'],
  },
  
  // Configure compression
  compress: true,
  
  // Configure headers for better caching
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  
  // Disable static optimization to prevent permission issues
  output: 'standalone',
  
  // Configure webpack for better build performance
  webpack: (config, { isServer, dev }) => {
    // Only run these optimizations in production
    if (!dev) {
      // Enable better tree shaking
      config.optimization.usedExports = true;
      
      // Use memory cache for better performance
      config.cache = {
        type: 'memory',
        maxGenerations: 1,
      };
      
      // Optimize bundle splitting
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      };
    }
    
    return config;
  },
};

export default nextConfig;
