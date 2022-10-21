/* eslint-disable import/no-anonymous-default-export */

const title = 'Ding'
const description = 'A product designer & design-focused engineer.'
const siteUrl = 'https://ding.one'

export default {
  title: title,
  titleTemplate: "%s | Ding: Designer, developer, and entrepreneur.",
  defaultTitle: "Ding",
  description: description,
  canonical: "https://ding.one",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    site_name: 'Ding',
    title,
    description: description,
    width: 1920,
    height: 1080,
    type: "image/png",
    images: [
      {
        url: `${siteUrl}/og.png`,
        alt: title
      },
    ],
  },
  twitter: {
    handle: '@dingyi',
    site: '@site',
    cardType: 'summary_large_image'
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.svg",
      type: "image/svg+xml"
    },
    {
      rel: "icon",
      href: "/favicon.ico"
    },
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.png",
      sizes: "180x180"
    },
    {
      rel: "manifest",
      href: "/manifest.json"
    },
  ],
  additionalMetaTags:[
    {
      name: 'theme-color',
      content: '#05201e'
    }
  ]
}