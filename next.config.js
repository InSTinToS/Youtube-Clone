const withImages = require('next-images')

module.exports = withImages({
  esModule: true,
  inlineImageLimit: false,
  images: { disableStaticImages: true },
  env: { dotenv: 'dotenv in next.config.js ok!' },
  webpack: config => {
    config.module.rules.push({ test: /\.svg$/, use: ['@svgr/webpack'] })
    return config
  }
})
