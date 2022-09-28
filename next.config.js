//const { withContentlayer } = require("next-contentlayer")

/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  staticPageGenerationTimeout: 100,
  images: {
    domains: [
      "s2.googleusercontent.com",
      "s3.us-west-2.amazonaws.com",
      "amazonaws.com",
      "secure.notion-static.com",
      "i.scdn.co"
    ],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  experimental: {
    images: {
      allowFutureImage: true,
      // allow next/image to serve remote images from safelisted domains
      remotePatterns: [
        { hostname: "secure.notion-static.com" },
        { hostname: "pbs.twimg.com" },
      ],
    },
    legacyBrowsers: false,
    browsersListForSwc: true,
    largePageDataBytes: 128 * 100000, // 12800KB by default
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
}

//module.exports = withContentlayer(nextConfig)

module.exports = nextConfig