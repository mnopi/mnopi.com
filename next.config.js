// noinspection JSUnusedGlobalSymbols,Annotator

module.exports = {
  reactStrictMode: true,

  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config
  },

  async redirects() {
    return [
      {
        source: '/sudoers',
        destination: 'https://raw.githubusercontent.com/j5pu/sudoers/main/install',
        permanent: true,
      },
    ]
  },
}
