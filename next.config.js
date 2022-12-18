//const { withContentlayer } = require("next-contentlayer")
const runtimeCaching = require("next-pwa/cache")
const { withPlausibleProxy } = require('next-plausible')

/**
 * @type {import('next').NextConfig}
 */

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV !== 'production',
  runtimeCaching,
})

module.exports = withPlausibleProxy()(
  withPWA({
    images: {
      domains: [
        "s2.googleusercontent.com",
        "s3.us-west-2.amazonaws.com",
        "amazonaws.com",
        "secure.notion-static.com",
        "i.scdn.co",
        "www.google.com"
      ],
    },
    reactStrictMode: true,
    staticPageGenerationTimeout: 100,
    typescript: {
      // !! WARN !!
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      // !! WARN !!
      ignoreBuildErrors: true,
    },
    experimental: {
      largePageDataBytes: 256 * 100000, // 12800KB by default
      fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } }
    ]
    },
    async redirects() {
      return [
        {
          source: "/book",
          destination: "https://cal.com/dingyi/",
          permanent: true,
        },
      ]
    },
  }),
)