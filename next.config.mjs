const nextConfig = {
  swcMinify: false,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.minimize = false;
    }
    return config;
  },
}

module.exports = nextConfig
