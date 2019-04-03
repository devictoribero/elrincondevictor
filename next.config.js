const routes = require('./routes')

const nextConfig = {
  exportPathMap: () => routes,
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader'
    })

    return config
  }
}

module.exports = nextConfig