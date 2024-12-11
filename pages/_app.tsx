import React from "react"
import Head from "next/head"
import { AppProps } from 'next/app'
import Menu from "@components/Menu"
import { ThemeProvider } from 'next-themes'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from "@vercel/speed-insights/next"
import PlausibleProvider from 'next-plausible'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'
import { Albert_Sans } from '@next/font/google'
import { globalStyles } from '@styles/global'
import '@styles/reset.css'

const Albert = Albert_Sans()

export default function App({ Component, pageProps }: AppProps) {
  globalStyles()

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      </Head>
      <PlausibleProvider domain="ding.one">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
        >
          <DefaultSeo {...SEO} />
          <main className={Albert.className}>
            <Menu />
            <Component {...pageProps} />
          </main>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </PlausibleProvider>
    </>
  )
}
