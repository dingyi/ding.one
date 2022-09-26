/* eslint-disable import/no-anonymous-default-export */

const title = 'Ding'
const description = 'A digital product designer & design-focused engineer.'
const siteUrl = 'https://ding.one'

export default {
  title: title,
  titleTemplate: "%s | a other product designer.",
  defaultTitle: "Ding",
  description: description,
  canonical: "https://ding.one",
  openGraph: {
    type: 'website',
    locale: 'en_IE',
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
        alt: title,
      },
    ],
  },
  twitter: {
    handle: '@dingyi',
    site: '@site',
    cardType: 'summary_large_image',
  },
}