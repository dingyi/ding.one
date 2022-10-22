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
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: securityHeaders
        }
      ];
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

// https://nextjs.org/docs/advanced-features/security-headers
const ContentSecurityPolicy = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' *.twitter.com *.cal.com;
    child-src *.google.com *.twitter.com;
    style-src 'self' 'unsafe-inline' *.googleapis.com;
    img-src * blob: data:;
    media-src 'none';
    connect-src *;
    font-src 'self' *.gstatic.com;
`

const securityHeaders = [
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, '')
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload'
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()'
  }
]