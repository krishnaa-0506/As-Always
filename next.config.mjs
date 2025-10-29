/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MONGODB_TLS_ALLOW_INVALID_CERTIFICATES: process.env.NODE_ENV === 'development' ? 'true' : 'false',
    MONGODB_TLS_VERSION: 'TLSv1_2',
    NODE_TLS_REJECT_UNAUTHORIZED: process.env.NODE_ENV === 'development' ? '0' : '1',
  },
  experimental: {
    serverComponentsExternalPackages: ['mongodb'],
  },
  webpack: (config, { dev, isServer }) => {
    if (!isServer) {
      // Don't include mongodb on client-side
      config.resolve.fallback = {
        ...config.resolve.fallback,
        mongodb: false,
      };
    }
    return config;
  },
};

export default nextConfig;
