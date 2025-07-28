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
  },
  
  // Enable experimental features for better performance
  experimental: {
    // Enable optimized package imports
    optimizePackageImports: ['react-icons', 'framer-motion'],
    // Configure file tracing exclusions
    outputFileTracingExcludes: {
      '*': ['**node_modules/**']
    }
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
    }
    
    return config;
  },
};

export default nextConfig;
