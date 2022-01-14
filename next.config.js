module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/bin/sudoers',
        destination: 'https://raw.githubusercontent.com/j5pu/sudoers/main/install',
        permanent: true,
      },
    ]
  },
}
