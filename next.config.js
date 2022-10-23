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
      /* images: {
        allowFutureImage: true,
        // allow next/image to serve remote images from safelisted domains
        remotePatterns: [
          { hostname: "secure.notion-static.com" },
          { hostname: "google.com" },
        ],
      }, */
      legacyBrowsers: false,
      browsersListForSwc: true,
      largePageDataBytes: 256 * 100000, // 12800KB by default
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